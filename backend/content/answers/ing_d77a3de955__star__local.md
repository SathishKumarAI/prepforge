---
qid: ing_d77a3de955__star__local
question: What is Database Sharding? — Sharding | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 347
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:43-05:00'
sources: []
---

**Situation**  
When I joined the e‑commerce analytics team, our PostgreSQL instance was choking on nightly batch jobs: queries that scanned 1.2 billion rows were taking over an hour, and the production app began to time out during peak traffic.

**Task**  
I had to redesign the data layer so that both real‑time dashboards and batch ETL ran under two minutes, without rewriting the entire application or losing ACID guarantees for user orders.

**Action**  
I introduced horizontal sharding by partitioning the `orders` table across three PostgreSQL shards based on customer ID hash. Using PgPool-II, I set up connection pooling and routing logic that sent read‑only analytics queries to a dedicated analytics shard while write traffic hit the primary shard. To keep joins feasible, I replicated a lightweight denormalized “customers” view across all shards. We added a simple key‑value cache in Redis for hot customer profiles, reducing cross‑shard lookups. Finally, we automated failover with Patroni and logged sharding metrics to Grafana.

**Result**  
Query latency dropped from 65 s to under 12 s on average; batch jobs finished in 45 seconds, freeing the cluster for live traffic. Traffic spikes were handled without timeouts, and our SLA improved from 92% to 99.7%. I learned that sharding isn’t just a database trick—it’s an architectural decision that balances consistency, latency, and operational complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
