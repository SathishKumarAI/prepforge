---
qid: ing_4e0a8604b8__star__local
question: 'Explain: Permanent Storage — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 344
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:04:40-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time fraud detection pipeline that ingested millions of transaction events per day from payment gateways. The initial prototype used Kafka’s default log retention (7 days), but compliance required us to keep all raw events for 90 days for audit and model retraining.

**Task:**  
I had to redesign the Kafka cluster so it could act as a durable, searchable archive while still supporting low‑latency consumption by downstream services.

**Action:**  
First, I switched from the default log compaction to a long‑term retention policy, setting `log.retention.hours=2160` and increasing segment size to 1 GB to reduce metadata overhead. Then I enabled Kafka’s MirrorMaker 2 to replicate the topic to an on‑prem HDFS cluster for cost‑effective cold storage. To keep the data queryable, I integrated KSQLDB to expose a materialized view that persisted to a PostgreSQL sink, allowing SQL queries over the archived events. Finally, I added a retention filter using `log.cleaner.enable=true` to purge records older than 90 days automatically.

**Result:**  
The new setup allowed us to store 120 TB of raw transaction logs for three months without impacting throughput (still <50 ms latency). Audit teams could query the full history in seconds, and our ML models retrained on a 90‑day window saw a 12% lift in fraud detection accuracy. I learned how Kafka’s retention knobs can be tuned to serve both real‑time streaming and long‑term archival needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
