---
qid: ing_d1aae0f29e__aws__local
question: 'Explain: Retention and Scope — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 452
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:14:49-05:00'
sources: []
---

**Situation & Task**  
I was tasked with redesigning our recommendation engine’s “add to cart” API so that it could be called repeatedly from mobile, web, and third‑party partners without duplicating analytics events or inflating inventory counts.

**Action – Design & AWS Services**  
* **Idempotency**: Each request carries a unique `idempotency_key`. I stored the key in an **Amazon DynamoDB** table (PK=`user_id`, SK=`idempotency_key`) with a TTL of 30 days. A Lambda authorizer checks the table before processing; if the key exists, the Lambda returns the cached response immediately—ensuring *exactly‑once* semantics.  
* **Retention & Scope**: To keep audit data for compliance yet avoid hot‑spots, I partitioned events by `user_id` and used a **Kinesis Data Stream** to ship raw events to an **Amazon S3 Glacier Deep Archive** lifecycle tier after 90 days, while recent 30 days stayed in S3 Standard.  
* **Scalability & Availability**: The Lambda function runs in a VPC with an Application Load Balancer front‑end; the DynamoDB table is provisioned with auto‑scaling (10 k read/write per second) and uses global tables for multi‑region failover.  

**Result**  
- *Reduced duplicate events by 99.8%*, cutting downstream processing costs by **$12K/month**.  
- *Latency dropped from 350 ms to 80 ms* under peak load (10 k QPS).  
- Compliance audit passed with zero manual intervention, thanks to the retention strategy.

**Reflection & Bar‑raiser Insight**  
I owned every layer—designing DynamoDB for idempotency, choosing Kinesis for real‑time ingestion, and architecting a cost‑effective archival path. I *dive deep* into cold‑start mitigation and TTL expirations, quantified the impact on ops budgets, and learned that a single‑key table can become a bottleneck; future iterations will shard by hashed user IDs to distribute load further.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
