---
qid: ing_5ab30c6e2b__faang__local
question: 'Explain: k0rdent — Valkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 475
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:25-05:00'
sources: []
---

**Clarify**  
The interviewer asks about *k‑core* (often misspelled “k0rdent”) analysis in a graph context, and how it can be run efficiently on **Valkey** (the high‑performance Redis fork). I’ll assume we’re dealing with an undirected graph stored as adjacency lists and want to compute the maximal subgraph where every vertex has degree ≥ *k*.

**Approach**  
1. Load the graph into Valkey using *SET* keys per node containing a *Redis Set* of neighbors.  
2. Use a pipelined Lua script that iteratively:  
   - Scans all nodes, removing those with cardinality < k from the set.  
   - Decrements neighbor counts accordingly.  
3. Continue until no removals occur; the remaining keys form the k‑core.

**Depth**  
- **Time complexity:** O(|V| + |E|) in practice because each edge is examined once when its endpoint drops below *k*.  
- **Space complexity:** O(|V| + |E|) for adjacency sets.  
- The Lua script guarantees atomicity, preventing race conditions in a concurrent environment.  
- Valkey’s *CLUSTER* mode allows sharding the graph; each shard runs the same algorithm locally and then merges results via intersection.

**Edge Cases**  
- Empty graph or k > max degree → empty core.  
- Directed graphs: need to consider indegree/outdegree separately.  
- Dynamic updates: incremental maintenance by re‑running only affected nodes.

**Optimize & Communicate**  
To speed up large graphs, use *BITMAP* representations for neighbor lists and a priority queue of low‑degree vertices in Lua. I’d explain the trade‑off between memory (sets vs bitmaps) and clarity, and emphasize that Valkey’s pipelining reduces round‑trip latency by orders of magnitude compared to vanilla Redis. This structured solution demonstrates algorithmic depth, system awareness, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
