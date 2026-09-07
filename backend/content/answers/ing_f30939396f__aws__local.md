---
qid: ing_f30939396f__aws__local
question: 'Explain: Sources — Databricks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 520
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:13-05:00'
sources: []
---

**Situation & Task**  
At my previous company we needed to ingest real‑time telemetry from 12 k IoT devices into a unified analytics layer for anomaly detection. The challenge was to move raw JSON streams, batch logs, and external data (weather API) into a single, queryable lake while keeping costs under $5K/month.

**Action**  
I chose **Databricks Unified Analytics Platform** because it unifies streaming, batch, and ML workloads on the same cluster fleet.  
1. **Data ingestion** – Built a *Structured Streaming* pipeline that pulls from Kafka (device data) and S3 (batch logs). For the weather API I used Databricks Jobs to run a nightly Python script that writes Parquet files to Lakehouse.  
2. **Schema enforcement & catalog** – Leveraged Delta Lake’s ACID transactions, time‑travel, and schema evolution features; registered tables in Unity Catalog for fine‑grained access control.  
3. **Cost optimisation** – Enabled *Auto‑Pause* on all clusters (idle <5 min) and set *Spot Instances* for batch jobs; used the *Databricks Runtime 12* to reduce CPU usage by ~30 %.  
4. **Monitoring & alerting** – Created a Databricks SQL dashboard that tracks ingestion latency, error rates, and storage growth; wired alerts to SNS.

**Result**  
- Latency dropped from 15 min (Kafka + Hive) to <2 s for real‑time queries.  
- Storage costs fell by **38 %**, staying under the $5K/month target.  
- The anomaly‑detection model now runs on a single, reproducible pipeline with 99.9 % data freshness.

**Learnings & Bar‑raiser cues**  
*Ownership*: I owned the end‑to‑end flow and documented every step in Confluence for future teams.  
*Dive Deep*: I debugged an ingestion lag by inspecting Delta transaction logs and Kafka consumer offsets, discovering a hidden back‑pressure issue.  
*Quantified Impact*: The cost savings and latency improvements directly increased product uptime, boosting customer satisfaction scores by 12 pts.  

**Leadership Principles Highlighted**  
- **Ownership** – Taking full responsibility for the pipeline’s reliability and cost.  
- **Dive Deep** – Using Databricks’ tooling to uncover hidden performance bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
