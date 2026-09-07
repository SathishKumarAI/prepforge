---
qid: vq_351f6d9310__aws__local
question: '3 Question 2: Are there NULL values in the array?'
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 451
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:46:33-05:00'
sources: []
---

**Situation & Task**  
During a quarterly data‑quality audit for our real‑time analytics pipeline (≈ 10 M records/day), I discovered that the ingestion service was silently dropping rows containing `NULL` values in critical columns. The downstream dashboards were showing stale metrics, and we risked violating SLAs with over 15% of users reporting “missing data” errors.

**Action**  
I owned the remediation by adding a validation step in our **AWS Lambda** consumer (Python 3.11). The function now scans each incoming JSON array for `None`/`NULL`, logs an event to **Amazon CloudWatch Logs**, and writes a warning record to a dedicated **DynamoDB** “Null‑Audit” table (partition key: `stream_id#timestamp`).  
To scale, I leveraged Lambda’s concurrency auto‑scaling with reserved capacity of 200 k req/s. For cost control, the audit table uses on‑demand mode and TTL of 7 days to keep storage minimal. I also introduced a **CloudWatch Metric Filter** that triggers an SNS alert if the null rate exceeds 0.5% for any stream.

**Result**  
Within two weeks, the null‑rate dropped from 4.2 % to < 0.1 %. Dashboard accuracy improved by **12 pp**, and we avoided a potential $50K SLA penalty. The audit table now serves as a compliance artifact for quarterly reviews.  

**Reflection & Learning**  
I realized that early detection is cheaper than post‑hoc fixes; moving validation into the ingestion layer saves downstream reprocessing costs (~$0.03 per 1 k rows). Next time, I’ll prototype with **AWS Step Functions** to chain validation and enrichment steps, ensuring a single source of truth.

> *Leadership Principles:* **Ownership**, **Dive Deep**, **Customer Obsession**, **Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
