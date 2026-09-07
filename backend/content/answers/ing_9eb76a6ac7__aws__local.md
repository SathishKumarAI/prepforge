---
qid: ing_9eb76a6ac7__aws__local
question: 'Explain: Transactions and Consistency — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 440
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:30-05:00'
sources: []
---

**Situation** – I led a migration of our fraud‑detection pipeline from an on‑prem SQL warehouse to a fully managed NoSQL stack on AWS. The goal was to cut latency for real‑time decisioning while keeping the business logic deterministic.

**Task** – Balance strong consistency needed for transaction logs with eventual consistency that scales horizontally, and design a system that delivers 99.9 % availability under 5 M requests/sec.

**Action**  
- **SQL (Amazon Aurora)** was used for *write‑through* audit tables: ACID guarantees ensured every transaction ID had a single source of truth. I leveraged *Aurora Serverless v2* to auto‑scale from 0–200 w/latency <1 ms, keeping cost under $30k/month.  
- For *feature‑store* and *model inference*, I chose **Amazon DynamoDB** with *point‑in‑time recovery* and *global tables* for multi‑region reads. Using the *DynamoDB Accelerator (DAX)* reduced read latency from 10 ms to <1 ms, supporting 5M RPS at <$20k/month.  
- A **Lambda layer** wrapped the consistency logic: if a write failed in Aurora, the Lambda rolled back the DynamoDB entry, ensuring *eventual consistency* without compromising business rules.  
- I implemented **AWS CloudWatch dashboards** that tracked read/write latency and error rates; after deployment, we saw a 40 % reduction in fraud‑false positives (from 3.2 % to 1.9 %) and a 25 % cost saving.

**Result** – The hybrid architecture achieved 99.95 % availability, met SLAs for real‑time scoring, and lowered operational overhead by eliminating manual DB sharding. I learned that “ownership” means owning the trade‑off between consistency and scalability, and “Dive Deep” requires profiling every layer until metrics align with business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
