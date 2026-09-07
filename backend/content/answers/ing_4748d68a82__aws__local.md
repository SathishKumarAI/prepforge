---
qid: ing_4748d68a82__aws__local
question: 'Explain: Common Mistakes — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 423
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:47-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built an ML recommendation engine for a global e‑commerce platform. The data pipeline was initially designed around **PostgreSQL**, but we hit latency spikes during peak traffic and struggled to ingest the 10 GB daily clickstream.

**Action**  
1. *Dive Deep* – profiled queries, discovered 60 % of the time spent on joins over highly‑cardinality tables.  
2. *Bias for Action & Invent & Simplify* – migrated the feature store to **Amazon DynamoDB** with a secondary GSI keyed by user ID and timestamp, adding an S3 data lake for raw events (Athena).  
3. Implemented a **Kinesis Data Streams** ingestion layer, auto‑scaling on CloudWatch alarms.  
4. Updated the training pipeline in SageMaker to read from DynamoDB via the built‑in connector, reducing feature lookup latency by 70 %.  

**Result**  
- Query latency dropped from 8 s to <400 ms (95th percentile).  
- Daily ingestion capacity increased 5× without code changes.  
- Model training time decreased 3×, allowing a new recommendation batch every 4 h instead of 24 h.  
- Cost savings: DynamoDB on-demand pricing + S3 lifecycle reduced storage spend by **$12k/month**.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Faster recommendations → higher conversion (↑5% AOV).  
- *Ownership*: Took end‑to‑end responsibility for the migration, including rollback plans and SLA monitoring.  

Bar‑raiser signals: clear ownership, data‑driven impact, deep technical trade‑off analysis, and learning loop (post‑mortem on the initial SQL bottleneck).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
