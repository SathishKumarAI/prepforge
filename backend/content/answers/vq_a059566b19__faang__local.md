---
qid: vq_a059566b19__faang__local
question: WHOW DOES INDEXING IMPROVE PERFORMANCE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 394
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:25:46-05:00'
sources: []
---

**Clarify**

The question asks how *indexing* (e.g., B‑tree or hash indexes in a DBMS) boosts query performance.  
Assumptions: we’re dealing with relational databases, typical SELECT queries with predicates on indexed columns, and the data set is larger than memory.

**Approach**

1. Explain what an index is and how it changes data access patterns.  
2. Contrast full‑table scans vs. index lookups.  
3. Quantify I/O savings (pages read).  
4. Mention trade‑offs: write overhead, storage, maintenance.

**Depth**

- An index stores key values plus pointers to the actual rows.  
- For a B‑tree index, searching a key takes *O(log n)* page reads versus *O(n)* for a full scan.  
- Example: 1 M rows → ~10 k pages; index lookup ≈ log₂(10 k) ≈ 14 pages vs. scanning all 10 k.  
- Indexes also support range queries, ORDER BY, and join predicates efficiently.  
- However, every INSERT/UPDATE/DELETE must update the index (extra I/O), so write throughput can drop.

**Edge Cases**

- Highly selective predicates benefit most; non‑selective ones may still need a scan.  
- If the indexed column is almost constant or contains many nulls, the index offers little gain.  
- Fragmentation and stale statistics can degrade performance.

**Optimize & Communicate**

Highlight that proper indexing requires profiling query patterns, choosing composite indexes for multi‑column predicates, and periodically rebuilding/reorganizing to maintain depth. Conclude by stressing that while indexes dramatically reduce read I/O, they incur write costs—balancing these is key in production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
