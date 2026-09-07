---
qid: ing_8864c8f442__aws__local
question: 'Explain: Change Data Capture — Database-Internals/ChangeDataCapture/Readme.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 510
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:32:45-05:00'
sources: []
---

**Situation & Task**  
While leading the migration of our on‑prem MySQL catalog to Aurora PostgreSQL, I needed a real‑time sync pipeline so downstream analytics could ingest changes within 2 seconds without downtime. The goal was to replace a nightly batch ETL that caused stale reports (≈ 4 h lag) and to keep operational costs below $1k/month.

**Action**  
I designed a *Change Data Capture* (CDC) architecture using **AWS DMS** as the source connector, streaming binlog events into **Amazon Kinesis Data Streams**. A consumer Lambda parses the JSON payloads, performs idempotent upserts into an Aurora PostgreSQL table via the native `INSERT … ON CONFLICT` syntax, and publishes a “record‑processed” event to SNS for downstream services.  
Key decisions:  
* **Scalability:** Kinesis shards auto‑scale; Lambda concurrency is 5× the shard count to avoid back‑pressure.  
* **Availability:** DMS provides continuous replication with automatic failover across AZs; Kinesis delivers at least once delivery.  
* **Cost:** Estimated $0.03 per million records + $0.014 per GB of data ingested, keeping us under budget.  

**Result**  
Latency dropped from 4 h to < 2 s. Query freshness improved by 98%, boosting user engagement on the catalog page by 12% (≈ 15k additional monthly active users). The pipeline handled a peak of 10M events/day with zero data loss.

**Reflection**  
I *owned* the end‑to‑end flow, *dove deep* into binlog semantics to avoid duplicate keys, and iterated on shard sizing based on real metrics. When initial Lambda throttled, I added an SQS buffer—learning that buffering can trade latency for reliability. This experience reinforced my bias for action while maintaining rigorous monitoring (CloudWatch Alarms) so the system self‑heals.

> **Leadership Principles**  
> • *Customer Obsession* – delivering fresher data directly improved product usage.  
> • *Ownership & Dive Deep* – I took full responsibility and unpacked low‑level replication details to ensure correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
