---
qid: ing_06d3920af1__aws__local
question: 'Explain: Application complexity — What is Database Sharding? - Shard DB
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 437
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:29-05:00'
sources: []
---

**Situation / Task**  
I was leading a team that had to migrate a legacy monolith with a single MySQL database (10 GB) into a micro‑service architecture on AWS. The app’s traffic spiked from 50k requests/day to 500k, and the single DB hit 90 % CPU, causing latency >300 ms.

**Action**  
I introduced *database sharding* – partitioning data across multiple MySQL instances so each shard handles a subset of keys (e.g., user ID ranges). I used **Amazon RDS Aurora Serverless v2** for elasticity and **AWS DAX** for caching. The design included:
- **Shard routing layer** (Node.js Lambda + API Gateway) that routes queries to the correct shard based on hash(user_id).
- **Cross‑shard query service** using **AWS AppSync** with GraphQL resolvers, aggregating results.
- Automatic failover via Aurora’s multi‑AZ and a **Route 53 health check**.

I automated shard rebalancing with a scheduled Lambda that scanned usage metrics (CloudWatch) and moved hot keys to new shards when load >70 %.  

**Result**  
Latency dropped from 300 ms to <50 ms; throughput increased to 1.2 M req/day without provisioning extra hardware, saving ~30 % on RDS costs. The team gained ownership of the scaling strategy and learned to *Dive Deep* into query patterns—key for future capacity planning.

**Leadership Principles**  
- **Ownership**: I took full responsibility for the migration, from design to production roll‑out.  
- **Dive Deep**: Detailed analysis of query logs drove shard boundaries and auto‑rebalancing logic.  

Bar‑raisers look for evidence that you own a problem, drill into metrics, and translate findings into scalable, cost‑effective AWS solutions—exactly what this sharding rollout delivered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
