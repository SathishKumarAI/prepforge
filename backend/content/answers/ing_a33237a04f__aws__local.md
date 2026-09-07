---
qid: ing_a33237a04f__aws__local
question: 'Explain: Schema Evolution — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 417
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:34:08-05:00'
sources: []
---

**Situation & Task**  
While revamping a retail analytics platform I had to ingest order data that kept adding new columns (e.g., `gift_wrap`, `delivery_instructions`). The team needed a **change‑data‑capture (CDC)** pipeline that could handle *schema evolution* without downtime.

**Action**  
I designed an end‑to‑end solution using **AWS DMS → Amazon Kinesis Data Streams → Lambda → AWS Glue & Redshift**.  

1. **DMS** continuously streams bin‑log changes from the RDS source into Kinesis, preserving original schema metadata.  
2. A **Lambda function** parses each record, detects new columns via a DynamoDB “schema registry”, and updates the target Redshift table using *ALTER TABLE ADD COLUMN* when needed.  
3. AWS Glue crawlers run nightly to refresh the data catalog, ensuring downstream BI tools see the latest schema.  

I wrote unit tests for idempotent schema‑add logic (≤ 0.1 s per change) and used CloudWatch metrics to keep lag under 2 seconds.

**Result**  
The pipeline processed 10M+ records/day with < 5 % error rate, reduced manual schema‑change effort by **70%**, and cut operational costs by **30%** (no on‑prem servers).  

**Reflection**  
I owned the end‑to‑end flow, dove deep into CDC semantics, and iterated after a 1st‑time failure that missed nullable columns. I documented lessons in a knowledge base so future teams could jump straight to production.

> **Leadership Principles:** *Ownership* – drove full delivery; *Dive Deep* – engineered a robust, cost‑effective CDC system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
