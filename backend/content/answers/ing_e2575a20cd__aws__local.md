---
qid: ing_e2575a20cd__aws__local
question: What are the methods of database sharding?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 534
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:11-05:00'
sources: []
---

**Situation / Task**  
While redesigning the recommendation engine for a global e‑commerce platform, I was asked to shard the user‑activity database so that query latency dropped below **50 ms** and the system could scale to **10 M active users/day**.

**Action**  
I evaluated three sharding strategies:

| Method | How it works | AWS services used | Trade‑offs |
|--------|--------------|-------------------|------------|
| **Hash‑based (modulo)** | UserID → `hash(user_id) % N` shards. Simple, even distribution. | *Amazon RDS* + *Aurora Serverless* for each shard; *Elastic Load Balancer* to route. | Requires rebalancing when adding shards; no range queries. |
| **Range‑based** | Partition by signup date or geography (e.g., `signup_month`). | *Amazon DynamoDB* with partition key = `region#month`; *AWS Glue* for ETL. | Hotspot risk if traffic is uneven across ranges. |
| **Directory/Consistent Hashing** | Maintain a lookup table mapping user_id → shard; use consistent hashing to minimize movement when adding shards. | *Amazon ElastiCache* (Redis) as the directory cache; *Aurora Global Database* for cross‑region reads. | Extra latency from directory lookups, but minimal data migration on scale‑up. |

I chose **consistent hashing** because it offered the best balance of **scalability** (adding shards causes <5 % re‑routing) and **availability** (no single point of failure in the lookup). I implemented a Redis cache for the directory to keep lookups under **2 ms**.

**Result**  
Post‑migration, read latency dropped from 120 ms to **45 ms**, throughput increased by **3×**, and cost per transaction fell by **22 %** due to reduced cross‑shard traffic. I documented the failure mode of hash‑based sharding (data skew) and how consistent hashing mitigated it—an insight that later guided our team’s design for a new microservice.

---

*Leadership Principles:* **Ownership** – led end‑to‑end migration; **Dive Deep** – quantified shard performance; **Deliver Results** – exceeded latency targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
