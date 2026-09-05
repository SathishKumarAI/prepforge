---
qid: ing_b7f97c9483__star__local
question: 'Explain: Scale efficiently — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 318
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:21-05:00'
sources: []
---

**Situation:**  
At a fintech startup we were launching a new payments API that had to support millions of daily transactions across the U.S., Canada, and Europe. Our single PostgreSQL instance was hitting 30 % CPU saturation during peak hours, and latency kept creeping above 200 ms—unacceptable for our SLA.

**Task:**  
I needed to redesign the data layer so we could handle 10× traffic without a costly new cluster or compromising consistency on user balances.

**Action:**  
I introduced horizontal sharding: partitioning the `transactions` table by customer ID hash into four shards hosted on separate RDS instances. I used Amazon Aurora Serverless for each shard to auto‑scale and implemented a lightweight routing service in Go that hashed incoming requests to the correct shard at microsecond latency. To preserve ACID guarantees, I added cross‑shard two‑phase commit logic only for balance updates, while most reads stayed single‑shard. We also set up Prometheus dashboards per shard and automated failover with Aurora’s Multi-AZ replication.

**Result:**  
Post‑migration, peak CPU dropped to 8 %, latency fell below 50 ms, and we supported a 12× increase in transactions before any code changes. The exercise taught me the trade‑off between sharding complexity and performance gains—and how careful routing and monitoring can keep data consistency intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
