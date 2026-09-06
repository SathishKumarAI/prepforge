---
qid: vq_3e70382634__faang__local
question: Is this real-time anomaly detection or batch analytics?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 534
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:56-05:00'
sources: []
---

**Clarify**

The interviewer is asking whether we should design a **real‑time anomaly detector** (streaming) or a **batch analytics** system that processes historical data.  
Assumptions I’d confirm:  

- What latency do anomalies need to be surfaced? (seconds vs days?)  
- How large are the data volumes and ingestion rates?  
- Do we have strict SLAs for alerting, or is post‑hoc reporting sufficient?  

---

**Approach**

1. **Identify use‑case constraints** (latency, volume, accuracy).  
2. **Map to architecture patterns**: stream processing vs batch ETL + analytics.  
3. **Select tooling and data model** accordingly.

---

**Depth**

| Scenario | Typical Architecture | Key Components | Complexity |
|----------|----------------------|----------------|------------|
|Real‑time |Kafka → Flink/Beam → Redis (state) → Alerting UI | Ingestion, windowed streaming, incremental ML inference | O(log N) per event; requires stateful ops |
|Batch |HDFS/S3 → Spark → Hive/Redshift → BI | Batch jobs, offline model training, scheduled dashboards | O(N log N) for large data; no strict latency |

- **Real‑time** demands low‑latency pipelines, windowing logic, and often online learning or drift handling.  
- **Batch** allows heavier models, richer feature engineering, and reproducible results but cannot react instantly.

---

**Edge Cases**

- *Data bursts*: streaming must back‑pressure; batch may need incremental jobs.  
- *Concept drift*: real‑time pipelines can update models on the fly; batch requires retraining cycles.  
- *Missing data*: stream processors need imputation logic; batch can perform post‑hoc cleaning.

---

**Optimize & Communicate**

If latency is < 5 s, lean toward **real‑time**: use Kafka + Flink, store state in Redis, push alerts via WebSocket. If we’re okay with 1–2 hour latency and want richer analytics, go **batch**: schedule Spark jobs nightly, materialize features in Redshift, expose via Tableau.

Explain trade‑offs clearly to the interviewer:  
- *Real‑time*: higher operational cost, complex state management.  
- *Batch*: simpler stack, but delayed insights.

This structured reasoning aligns with FAANG interview expectations—clarity, strategy, depth, edge‑case awareness, and a concise recommendation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
