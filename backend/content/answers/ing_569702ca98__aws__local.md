---
qid: ing_569702ca98__aws__local
question: 'Explain: Data Model — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 422
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:09-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech startup to rebuild its fraud‑detection pipeline. The existing system used a single MySQL database that stored every transaction and user profile, leading to *10 %* latency spikes during peak hours and a 30 % failure rate in the analytics jobs.

**Action – Design & AWS Services**  
1. **Data Model** – I migrated user profiles to **Amazon DynamoDB** (NoSQL) for fast key‑value lookups and transaction logs to **Amazon S3 + Glue** for immutable, cost‑effective storage.  
2. **Real‑time processing** – Implemented **Kinesis Data Streams** → **Lambda** → **DynamoDB Streams** for near‑real‑time enrichment.  
3. **Batch analytics** – Scheduled **Glue jobs** to materialize aggregated tables into a **Redshift Spectrum** warehouse, enabling SQL joins without moving data out of S3.  
4. **Scalability & Availability** – DynamoDB auto‑scales with 99.999% SLA; Kinesis and Redshift are multi‑AZ; cost savings: *$120k/yr* vs the legacy MySQL cluster.

**Result**  
- Latency dropped from *250 ms* to *30 ms* (90 % improvement).  
- Failure rate fell below *0.1 %*.  
- Fraud detection accuracy improved by **15 %** due to richer, faster feature pipelines.

**Leadership Principles Reflected**  
- **Customer Obsession** – delivered a more reliable service for end users.  
- **Ownership & Dive Deep** – I owned the migration, debugged cross‑service bottlenecks, and quantified impact.  

Bar‑raisers look for this blend of ownership, deep technical trade‑off analysis, and data‑driven results—exactly what I delivered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
