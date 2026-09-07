---
qid: ing_527710ec1f__faang__local
question: 'Explain: Use case: User searches keywords — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 440
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:56:17-05:00'
sources: []
---

**Clarify**  
We’re building a search service for the *system‑design‑primer* repo: users type keywords, and we return matching files (e.g., `README.md`). Assume read‑heavy traffic, eventual consistency is acceptable, and the repo size is moderate (< 10k files). What scales? Query latency < 200 ms, 99th‑percentile ≤ 300 ms.

**Approach**  
1. **Indexing** – Build a full‑text inverted index per file (token → posting list of file IDs + positions). Store on disk (e.g., RocksDB) and cache hot postings in memory.  
2. **Search API** – Accept query, tokenize, lookup tokens, intersect posting lists, rank by TF–IDF or BM25.  
3. **Caching** – LRU cache for popular queries; pre‑populate with common patterns (`/master`, `README`).  
4. **Scalability** – Partition index by token hash across shards (horizontal scaling). Use a load balancer to route queries.

**Depth**  
- **Complexity**: Query time ≈ O(Σ|posting|) + sorting; indexing is O(N·L).  
- **Trade‑offs**: Full‑text vs. exact match; using BM25 gives relevance but heavier CPU.  
- **Storage**: Inverted index size ~ 10× source, manageable on SSDs.

**Edge Cases**  
- Empty query → return top N popular files.  
- Non‑existent tokens → empty result set quickly.  
- Very long queries → cap at 5–7 terms to avoid cartesian explosion.

**Optimize & Communicate**  
- Incrementally update index on push events (Git hooks).  
- Profile CPU; if ranking dominates, move to GPU or approximate nearest neighbor.  
- Explain to interviewers: “I’d start with a proven inverted‑index pattern, shard it for scale, and then iterate on caching and ranking based on observed traffic.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
