---
qid: ing_8bfa55b177__faang__local
question: 'Explain: Making regional capacity shift plans at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 483
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:36-05:00'
sources: []
---

**Clarify**  
You’re asked to explain how a data‑driven organization can build *regional capacity shift plans*—i.e., predict and allocate compute/storage/energy resources across data centers or cloud regions—at scale.  
Key assumptions: we have historic load, SLA constraints, multi‑region cost models, and an orchestrated resource pool.

**Approach**  
1. **Data ingestion & feature engineering** – pull telemetry (CPU, I/O, network), calendar events, promotion schedules; encode seasonality, holidays, and regional traffic patterns.  
2. **Predictive modeling** – use a multivariate time‑series model (e.g., Prophet + ARIMA or a deep LSTM) per region, then aggregate to a global forecast.  
3. **Optimization layer** – formulate a mixed‑integer linear program that takes forecasts, cost functions, and SLA constraints to decide capacity shifts (scale‑up/down, geo‑replication).  
4. **Rollout & monitoring** – deploy the plan via an orchestration engine; continuously compare predicted vs. actual utilization and update models.

**Depth**  
- Forecast accuracy: MAE < 5% on 24h horizon.  
- MILP solves in ~200 ms for 500 regions using CPLEX/OR‑Tools, exploiting decomposition (regional sub‑problems + global coupling).  
- Cost function includes energy price, spot instance discounts, and penalty for SLA violations.  
- Use transfer learning to bootstrap new regions from similar ones.

**Edge Cases**  
- Sudden traffic spikes (e.g., flash sales): add a real‑time anomaly detector that triggers manual override.  
- Data center outages: fallback policy reduces capacity in affected region instantly.  
- Model drift: schedule retraining weekly and monitor feature importance drift.

**Optimize & Communicate**  
- Reduce model size with pruning; use ensemble averaging to lower variance without extra latency.  
- Explain decisions via SHAP values so ops can audit why a region was scaled up.  
- Present the pipeline as “Data → Forecast → Optimize → Action” in a single diagram, highlighting time budgets and rollback paths.  

This structured plan shows end‑to‑end scalability, rigorous evaluation, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
