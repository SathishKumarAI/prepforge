---
qid: ing_e2575a20cd__faang__local
question: What are the methods of database sharding?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 451
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:25:32-05:00'
sources: []
---

**Clarify**  
The question asks for *sharding techniques* used to horizontally partition a relational or NoSQL database so that each shard holds a subset of the data. I’ll assume we’re talking about production‑grade systems (e.g., MySQL, PostgreSQL, MongoDB) and not toy examples.

**Approach**  
I’ll first list the main sharding strategies, then briefly explain their trade‑offs in terms of scalability, complexity, and query patterns.

**Depth**

| Shard type | How it works | Typical use case |
|------------|--------------|------------------|
| **Hash‑based (consistent hashing)** | Split data by applying a hash function to the shard key. | Uniform load; good for write‑heavy workloads where queries are key‑specific. |
| **Range partitioning** | Divide data into contiguous ranges of the key. | Time‑series logs, order dates—queries on ranges work efficiently. |
| **Directory/lookup sharding** | Maintain a lookup table mapping keys to shard IDs. | Flexible but adds latency; useful when shard key isn’t obvious or changes over time. |
| **Geographic sharding** | Partition by user location or region. | Reduces cross‑region traffic and latency for global apps. |
| **Hybrid (e.g., hash+range)** | Combine a primary hash to pick a cluster, then range within that cluster. | Balances load while supporting range queries. |

**Edge cases**  
- Uneven key distribution can cause hot shards.  
- Schema changes or re‑sharding require data migration and careful downtime planning.  
- Joins across shards become expensive; often need denormalization.

**Optimize & communicate**  
Start with a hash shard for the most common access pattern, monitor cardinality, then consider range sharding if range queries dominate. Explain that consistent hashing minimizes movement during re‑shard, while directory tables add flexibility at cost of an extra lookup hop. Finally, highlight the importance of monitoring shard size and implementing automated migration scripts to keep the system balanced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
