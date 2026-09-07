---
qid: ing_00f71d0b7c__faang__local
question: 'Explain: External data sources — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 483
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:46:36-05:00'
sources: []
---

**Clarify**  
You’re asking how Meta leverages external data (e.g., third‑party signals, public APIs) in an asynchronous computing pipeline for ML workloads—specifically what the architecture looks like and key lessons learned.

*Assumptions to confirm:*  
- External sources are rate‑limited, unreliable, and may return heterogeneous schemas.  
- We need near‑real‑time ingestion without blocking downstream training jobs.  
- Data must be stored durably for batch retraining.

**Approach**  
1. **Event‑driven ingestion** – use a Kafka topic per source.  
2. **Asynchronous workers** – microservices consume events, transform, and write to a cold store (S3/Redshift).  
3. **Back‑pressure & retry** – implement exponential backoff and dead‑letter queues for failures.  
4. **Schema registry** – enforce Avro schemas so downstream jobs are schema‑agnostic.  
5. **Feature store integration** – expose cleaned data via a feature service (e.g., Feast) to both online inference and offline training.

**Depth**  
- Each worker runs in a Kubernetes pod, auto‑scales on Kafka lag.  
- Data is versioned; each ingestion batch gets a monotonically increasing timestamp.  
- Latency target: <2 s from event arrival to feature availability for online use.  
- Batch pipeline replays old events for model retraining nightly.

**Edge Cases**  
- Source outages → fallback to cached data, notify ops via PagerDuty.  
- Schema drift → auto‑validation against registry; if mismatch, pause ingestion until approved schema update.  
- Data volume spikes → trigger additional consumer pods automatically.

**Optimize & Communicate**  
- **Performance**: use vectorized processing (e.g., Spark Structured Streaming) for heavy transforms.  
- **Observability**: dashboards show Kafka lag, retry rates, and feature freshness.  
- **Scalability**: sharding by key (user ID) keeps workers independent; this reduces contention.  

By decoupling ingestion from training and using asynchronous patterns, Meta can ingest heterogeneous external data at scale while keeping ML pipelines resilient and low‑latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
