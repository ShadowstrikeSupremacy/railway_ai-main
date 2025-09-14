from ..database import get_db
from fastapi import APIRouter, Query, Depends, HTTPException
from typing import Literal, Dict, Any
from sqlalchemy.ext.asyncio import AsyncSession
from ..crud import list_trains, list_train_sections, list_sections
import pandas as pd

from algorithms.milp_optimizer import MILPOptimizer
from algorithms.rl_optimizer import run_rl_optimizer
from algorithms.comprehensive_hybrid_optimizer import ComprehensiveHybridOptimizer
from backend.app.routes.schedule_postprocess import convert_train_order_to_schedule

router = APIRouter()
OptimizationResult = Dict[str, Any]

async def milp_optimizer(db: AsyncSession) -> OptimizationResult:
    trains = await list_trains(db)
    sections = await list_sections(db)
    train_sections = await list_train_sections(db)

    trains_df = pd.DataFrame([t.__dict__ for t in trains])
    sections_df = pd.DataFrame([s.__dict__ for s in sections])
    train_sections_df = pd.DataFrame([ts.__dict__ for ts in train_sections])

    optimizer = MILPOptimizer()
    schedule = optimizer.optimize(trains_df, sections_df, train_sections_df)

    return {
        "method": "MILP",
        "optimized_schedule": schedule if schedule else "No optimal solution found",
        "trains_count": len(trains),
        "sections_count": len(train_sections),
    }


async def rl_optimizer(db: AsyncSession) -> OptimizationResult:
    trains = await list_trains(db)
    sections = await list_sections(db)
    train_sections = await list_train_sections(db)

    trains_df = pd.DataFrame([t.__dict__ for t in trains])
    sections_df = pd.DataFrame([s.__dict__ for s in sections])
    train_sections_df = pd.DataFrame([ts.__dict__ for ts in train_sections])

    train_order, score = run_rl_optimizer(trains_df, sections_df, train_sections_df)

    schedule = convert_train_order_to_schedule(train_order, train_sections_df, sections_df)

    return {
        "method": "Reinforcement Learning",
        "optimized_schedule": schedule,
        "score": score,
        "trains_count": len(trains),
        "sections_count": len(train_sections),
    }

async def comprehensive_hybrid_optimizer(db: AsyncSession) -> OptimizationResult:
    trains = await list_trains(db)
    sections = await list_sections(db)
    train_sections = await list_train_sections(db)

    trains_df = pd.DataFrame([t.__dict__ for t in trains])
    sections_df = pd.DataFrame([s.__dict__ for s in sections])
    train_sections_df = pd.DataFrame([ts.__dict__ for ts in train_sections])

    optimizer = ComprehensiveHybridOptimizer()
    result = optimizer.optimize(trains_df, sections_df, train_sections_df)

    return {
        "method": result.method,
        "optimized_schedule": result.schedule,
        "total_delay": result.total_delay,
        "computation_time": result.computation_time,
        "throughput": result.throughput,
        "conflicts_resolved": result.conflicts_resolved,
        "success": result.success,
        "trains_count": len(trains),
        "sections_count": len(train_sections),
    }

@router.get("/optimize/")
async def optimize_schedule(
    method: Literal["milp", "rl", "comprehensive_hybrid"] = Query(...),
    db: AsyncSession = Depends(get_db),
):
    if method == "milp":
        result = await milp_optimizer(db)
    elif method == "rl":
        result = await rl_optimizer(db)
    elif method == "comprehensive_hybrid":
        result = await comprehensive_hybrid_optimizer(db)
    else:
        raise HTTPException(status_code=400, detail="Invalid optimization method")

    return {"status": "success", "data": result}
