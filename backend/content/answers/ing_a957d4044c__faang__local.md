---
qid: ing_a957d4044c__faang__local
question: 'Explain: Clustered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 501
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:18:03-05:00'
sources: []
---

**Clarify**  
You’re asking how *clustered indexes* work and why they matter when designing systems that serve ML workloads (e.g., feature stores or model‑serving databases). I’ll assume a relational store where data is physically ordered by the key, and we care about query latency for large scans or range lookups.

**Approach**  
1. Define clustered vs non‑clustered indexes.  
2. Explain how physical ordering benefits sequential reads (feature pipelines) and random lookups (model inference).  
3. Discuss trade‑offs: write amplification, maintenance overhead.  
4. Touch on hybrid storage (e.g., HDFS + Parquet) where clustering is implicit.

**Depth**  
A clustered index stores rows in the leaf nodes of a B‑tree in key order; the table itself becomes the index. Reads that follow the index path hit contiguous pages, giving *O(log N)* search plus minimal I/O for ranges. For ML pipelines that scan features by user ID or time window, this reduces seek time dramatically compared to unsorted storage. However, inserts/deletes must shift rows, causing log‑structured writes and possible fragmentation; compaction is needed (e.g., in LSM‑trees). In columnar stores like Parquet, clustering is achieved via *sort columns*—the file blocks are ordered by a key, enabling predicate pushdown during query planning.

**Edge Cases**  
- Highly concurrent writes: cluster index can become a bottleneck.  
- Unbalanced keys (skew): leads to hot spots and uneven page usage.  
- Very large tables: physical re‑ordering may be costly; consider partitioning or hybrid indexes.

**Optimize & Communicate**  
For production ML systems, combine clustering with *partition pruning* (time‑based partitions) and *index compression* to keep I/O low. Explain that while clustered indexes give the best read performance for range queries, they should be paired with write‑optimized layers (e.g., Kafka + Delta Lake) so that updates are batched before being materialized into a clustered table. This layered approach balances ML inference latency against data freshness and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
