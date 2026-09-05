---
qid: ing_1b807ff9e9__star__local
question: 'Explain: Audit and Compliance — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 369
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:19-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a recommendation engine that had to comply with GDPR and the new EU e‑Privacy Directive. Every user interaction—click, view, purchase—needed an immutable audit trail for legal review. The existing logs were batch‑processed nightly, which meant data was stale by hours and our compliance team couldn’t verify real‑time consent changes.

**Task:**  
I had to design a low‑latency Change Data Capture (CDC) pipeline that would capture every database mutation, tag it with user consent metadata, and stream it into a tamper‑proof audit store while still feeding the ML feature store in near real time.

**Action:**  
We leveraged Debezium on top of our PostgreSQL cluster to stream WAL events into Kafka. A custom connector enriched each event with the latest consent flag from Redis (cached user preferences). The enrichment service ran as a stateless Flink job, applying deterministic transformations and writing to an immutable Append‑Only Parquet lake in S3, versioned by daily snapshots. Simultaneously, we streamed the same events into our feature store via Kinesis Data Streams for downstream model training. We added HMAC signatures on each record and stored them in a separate audit table for audit logs.

**Result:**  
The new CDC pipeline reduced data lag from 12 hours to < 2 seconds, enabling real‑time compliance checks. Our audit logs now pass external audits with zero false positives. The feature store’s freshness improved by 35%, boosting model accuracy by 4%. I learned that coupling a proven CDC engine with lightweight enrichment services can satisfy both regulatory demands and ML performance without compromising latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
