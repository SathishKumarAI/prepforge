---
qid: ing_013330c353__aws__local
question: 'Explain: Hash Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 479
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:27:14-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup to redesign its fraud‑detection pipeline. The existing B+‑tree index on transaction IDs caused 30 % slow‑downs during peak hours, pushing SLA violations above the company target of 99.5 %. I owned the solution: replace the generic index with a *hash index* that could handle high write churn and provide sub‑millisecond lookups.

**Action**  
1. **Requirements & Trade‑offs** – We needed < 10 µs query latency, 100 % read consistency, and cost ≤ $0.02/transaction.  
2. **Design** – I proposed an *Amazon DynamoDB Global Secondary Index (GSI)* backed by a **hash partition key** (`txn_id`) and a **range key** (`timestamp`).  
3. **AWS Services** –  
   - **DynamoDB** for low‑latency, serverless storage.  
   - **Lambda** to stream writes via **Kinesis Data Streams** into the GSI.  
   - **CloudWatch** alarms to auto‑scale read capacity based on 95th percentile latency.  
4. **Scalability & Availability** – DynamoDB automatically shards by hash key, ensuring even distribution; Multi‑AZ replication guarantees 99.99 % availability.  
5. **Cost** – With on‑demand mode and reserved concurrency, the cost dropped from $0.05 to $0.018 per transaction.

**Result**  
- Query latency fell from 12 ms to 8 µs (×1,500x).  
- SLA compliance rose to 99.98 %.  
- Monthly ops costs reduced by 36 %.  

**Reflection**  
I learned that *hash indexes* excel when the query pattern is exact‑match on a highly cardinal key; misusing them can lead to hotspotting. Future iterations will incorporate adaptive partitioning (AWS Aurora Serverless) if we anticipate skewed access patterns. This experience reinforced **Ownership**, **Dive Deep**, and **Deliver Results**—hallmarks of Amazon’s culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
