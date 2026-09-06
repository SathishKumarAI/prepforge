---
qid: ing_65158ac9a7__think__local
question: 'Explain: General sizing guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 482
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:42:48-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify the *data model*: number of documents, average size, and field cardinality.  
- Assume a typical Elasticsearch cluster with multiple data nodes, each with a fixed RAM/CPU budget.  
- Presume you’ll use default shard‑size heuristics (≤ 5 GB per primary) unless custom requirements arise.

**2️⃣ Adopt the “shard‑per‑node” mental model**  
- Treat shards as the unit of parallelism and storage.  
- Map a single node’s capacity to a set number of shards, balancing between too few (under‑utilized resources) and too many (overhead).

**3️⃣ Step‑by‑step sizing logic**  
1. **Compute raw data size**: docs × avg. doc size.  
2. **Add overhead**: ~30 % for Lucene indexing structures.  
3. **Determine primary shards**: divide total size by desired shard size (e.g., 5 GB).  
4. **Round to a power of two**: keeps cluster topology tidy.  
5. **Set replica count**: typically 1–2 replicas; this multiplies the shard count accordingly.  
6. **Check RAM limits**: each primary consumes ~50‑70 % of node heap; ensure enough free space for operations.

**4️⃣ Avoid common pitfalls**  
- *Over‑sharding*: > 200 shards per node leads to CPU thrashing.  
- *Under‑sharding*: too few shards cause hot spots and slow queries.  
- *Ignoring replica impact*: replicas double the storage requirement and shard count.  
- *Neglecting future growth*: add a 20–30 % buffer for data expansion.

**5️⃣ Sanity‑check & communicate**  
- Verify that the total primary + replica shards fit within node limits (heap, disk).  
- Run a small test index to confirm query latency and recovery times.  
- Present the shard plan in a table: node count, primary/replica per node, expected heap usage, and projected growth margin. This transparent view helps stakeholders see trade‑offs and validates the sizing rationale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
