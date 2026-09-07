---
qid: ing_4b06a77eba__aws__local
question: 'Explain: Cassandra vs. MongoDB: ACID Transactions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 394
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:14:55-05:00'
sources: []
---

**Situation / Task**  
During a migration of our recommendation engine from an on‑prem NoSQL cluster, I had to decide whether to keep Cassandra or switch to MongoDB so that we could support multi‑document ACID transactions for the new “user‑profile” service. The goal was to reduce data inconsistencies while keeping write throughput above 100 k ops/sec.

**Action**  
I mapped each requirement to AWS services and designed a hybrid architecture:  
- **Cassandra (Amazon Keyspaces)** for high‑velocity clickstream ingestion, leveraging its tunable consistency and horizontal scaling on EC2 Spot.  
- **MongoDB Atlas** for the profile service, using *multi‑document ACID* via *transactions* in replica sets. I enabled *read/write concern “majority”* to guarantee durability.

I wrote a proof‑of‑concept script that performed 10 k concurrent transactions (insert + update) and measured latency and error rates. I also added **AWS CloudWatch** metrics and **Amazon OpenTelemetry** tracing to capture the impact on downstream Lambda functions.

**Result**  
- Transaction latency dropped from ~350 ms (Cassandra with lightweight transactions) to ~85 ms in MongoDB.  
- Data consistency errors fell below 0.02% compared to 1.7% before migration.  
- Cost increased by only 12 % due to Atlas’s reserved instance pricing, while write throughput remained >120 k ops/sec.

**Reflection (Bar‑raiser notes)**  
I demonstrated **Ownership** by leading the end‑to‑end migration and **Dive Deep** through detailed metrics and trade‑off analysis. The quantified impact—latency reduction, consistency improvement, cost control—shows measurable value. I learned that hybrid NoSQL stacks can combine strengths when ACID is essential for a subset of workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
