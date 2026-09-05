---
qid: ing_69a404c88d__star__local
question: 'Explain: Data Archiving — Dataarchiving'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 342
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:58:29-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building a fraud‑detection model that ingested millions of transaction records daily. The data lake kept all raw logs for compliance, but the storage cost was spiraling—our cloud bill hit $12K/month and the query latency on recent data doubled.

**Task**  
I had to design a cost‑effective archiving strategy that preserved regulatory compliance while keeping the active dataset lean enough for real‑time model training and inference.

**Action**  
First, I performed an audit of retention policies: we could keep raw logs for 90 days, then move them to cold storage. Using AWS Glue, I built a job that partitioned data by date, compressed each file with Parquet, and migrated older partitions to Glacier. To maintain quick access for re‑training, I created a “hot” view in Athena that only queried the last 30 days. I also set up lifecycle rules in S3 to automatically transition objects after the audit period and implemented an automated Lambda that refreshed the hot view nightly. Finally, I added a monitoring dashboard in CloudWatch to track storage costs and query performance.

**Result**  
Storage costs dropped from $12K to $4.5K per month—a 63 % reduction—while query latency on recent data improved by 35 %. The fraud‑detection model continued to train within the same SLA, and we met all regulatory audit requirements. I learned how to balance cost, compliance, and performance using native cloud tooling and automated workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
