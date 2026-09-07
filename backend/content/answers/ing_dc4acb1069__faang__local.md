---
qid: ing_dc4acb1069__faang__local
question: 'Explain: Capacity Planning System Design — Back of the Envelope - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 502
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:10:32-05:00'
sources: []
---

**Clarify**  
You’re asked to sketch a capacity‑planning system that predicts compute and storage needs for ML workloads (e.g., training jobs). Confirm assumptions:  
- What metrics are we predicting? CPU/GPU hours, disk I/O, memory usage.  
- Time horizon (next week/month).  
- Data sources: historic job logs, model complexity, dataset size.  

**Approach**  
1. **Data ingestion** → batch pipeline that extracts historical job stats and stores them in a time‑series DB.  
2. **Feature engineering** → extract features such as epochs, batch size, GPU type, model ops count, dataset cardinality.  
3. **Modeling layer** → lightweight ML models (linear regression or XGBoost) per resource type; ensemble across clusters.  
4. **Decision engine** → map predictions to capacity decisions: add/remove nodes, reserve spot instances, schedule back‑fill jobs.  
5. **Feedback loop** → continuously update the model with actual usage and drift metrics.

**Depth**  
- Use a relational DB (PostgreSQL) for metadata + ClickHouse for high‑cardinality logs; query latency < 200 ms.  
- Train models offline nightly; inference in <1 s per cluster using TensorFlow Lite or ONNX runtime.  
- Complexity: training O(n log n), inference O(1).  
- Trade‑offs: heavier models (deep nets) give marginal gains but increase latency and compute cost.

**Edge Cases**  
- Outlier jobs (e.g., one massive pre‑training run) skew predictions → use robust statistics or clipping.  
- Sudden shifts in workload mix (e.g., new model architecture) → trigger model retraining sooner.  
- Data gaps (missing logs) → fallback to rule‑based heuristics.

**Optimize & Communicate**  
Explain that we start with a simple linear model for rapid prototyping, then iterate with more complex models if MAPE > 10 %. Highlight the end‑to‑end latency (<5 s from data ingestion to capacity recommendation), cost savings (≈15 % over manual provisioning), and how monitoring alerts keep the system in sync. This narrative shows structured thinking, clear assumptions, technical depth, and a focus on measurable improvements—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
