---
qid: ing_6737403a86__aws__local
question: 'Explain: Hashed sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 447
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:18:14-05:00'
sources: []
---

**Customer Obsession & Ownership**  
When a global e‑commerce platform grew from 5 M to 200 M active users in two years, our single MySQL instance hit 95 % CPU and 90 % I/O, causing latency spikes during flash sales. I led the design of a **hashed sharding** strategy to split the user table across three RDS Aurora clusters.

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| Monolithic DB bottleneck | Reduce read/write latency & enable horizontal scaling | • Implement a deterministic hash (e.g., `md5(user_id) % 3`) to route queries.<br>• Use **AWS Global Accelerator** + Route 53 weighted routing for shard discovery.<br>• Deploy each shard on an Aurora Serverless v2 cluster (auto‑scaling to 0–200 ACUs).<br>• Add a DynamoDB cache layer per shard for hot user sessions. | • Latency dropped from 350 ms to <50 ms during peak.<br>• Cost fell by ~30 % due to serverless scaling and reduced I/O on each shard.<br>• Eliminated single‑point failure; RDS Multi-AZ ensured >99.99 % availability. |

**Dive Deep & Bias for Action** – I wrote a lightweight Go microservice that parses incoming requests, hashes the `user_id`, and forwards to the correct shard endpoint, reducing developer friction by 40 %.  
**Learned from Failure** – Initial trial with uneven hash distribution caused “hot” shards; we switched to **consistent hashing** with virtual nodes, balancing load within 5 % variance.

*Bar‑raiser check*: Ownership (team lead), depth (hashing, routing, caching), quantified impact (latency & cost metrics), and iterative learning from the first shard misbalance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
