---
qid: ing_f345a9d371__aws__local
question: 'Explain: Eventual Consistency — Strong vs. Eventual Consistency - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 371
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:33-05:00'
sources: []
---

**Situation / Task**  
While leading the migration of a real‑time ad‑tech platform to AWS, my team had to guarantee that click data was available for downstream analytics within seconds without compromising cost.

**Action**  
I designed a hybrid storage strategy:  
* **DynamoDB (eventual consistency)** for write‑heavy ingestion—ensuring <10 ms latency and 99.9% availability.  
* **S3 + Athena** for durable, query‑optimized copies—providing strong consistency for batch reporting.  
We implemented a *stream‑to‑table* pipeline using Kinesis Data Streams, where each record is written to DynamoDB and simultaneously forwarded to S3 via Lambda.  
To guard against read anomalies, we added an “optimistic lock” pattern: clients read the latest version ID from DynamoDB; if it differs, they retry after a short backoff.

**Result**  
- Reduced write latency by **35 %** compared to a fully strongly consistent design.  
- Cut storage costs by **42 %** (S3’s cheaper tier for archival).  
- Maintained 99.95 % data accuracy in analytics, satisfying SLA with the finance team.

**Reflection**  
*Customer Obsession*: We prioritized end‑user experience (fast writes) while still delivering accurate insights.  
*Ownership & Dive Deep*: I owned the trade‑off analysis, quantified latency vs. cost, and iterated on the lock mechanism after a production anomaly.  

This solution balances scalability, availability, and cost—exactly what AWS engineers are expected to deliver.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
