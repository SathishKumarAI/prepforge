---
qid: ing_0cc7bf0401__faang__local
question: 'Explain: Real-time query performance — Recommendation engine & system use
  cases with graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 501
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:13:33-05:00'
sources: []
---

**Clarify**

We need to explain how a recommendation engine can achieve *real‑time* query performance when backed by a graph database, and give concrete system use‑cases (e.g., e‑commerce, media streaming).  
Assumptions: the graph stores user–item interactions, similarity edges, and possibly content metadata; queries return top‑N recommendations in < 100 ms.

**Approach**

1. Model the domain as a *heterogeneous* graph (users, items, tags).  
2. Pre‑compute high‑value subgraphs or embedding vectors.  
3. Use efficient traversal primitives + caching for latency.  
4. Scale horizontally with sharding and read replicas.  

**Depth**

- **Graph Schema**: `User –[PURCHASED]→ Item`, `Item –[SIMILAR_TO]→ Item`, `User –[FOLLOWS]→ User`.  
- **Query Pattern**: “Top‑N items linked to user’s purchase neighbors, weighted by similarity.”  
  - *Greedy traversal* (`LIMIT 10`) on a *pre‑joined* subgraph.  
  - Use *materialized paths* or *edge lists* for `SIMILAR_TO` edges to avoid deep recursion.  
- **Performance**:  
  - Index each edge type; average lookup O(1).  
  - With sharding, each shard handles a subset of users → constant‑time traversal per shard.  
  - Cache results in an LRU layer (e.g., Redis) for hot users.  

**Edge Cases**

- Cold‑start users: fall back to content‑based embeddings.  
- Rapidly changing similarity graph: use *incremental updates* and TTL on cache.  
- Skewed popularity: balance shards or use a global “hot” shard.

**Optimize & Communicate**

1. **Batch precomputation** nightly for heavy edges; keep real‑time queries lightweight.  
2. **Profile** latency per hop; prune low‑weight edges early.  
3. **Explain** to interviewers that the key is *decompose* (pre‑compute + index) + *cache*, ensuring sub‑100 ms even under millions of concurrent users.  

This structured approach shows deep understanding of graph engines, real‑time constraints, and practical scaling tactics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
