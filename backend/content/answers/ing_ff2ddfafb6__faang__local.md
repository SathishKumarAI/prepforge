---
qid: ing_ff2ddfafb6__faang__local
question: 'Explain: Handling the Freshness Requirement — Real Time Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 478
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:33:22-05:00'
sources: []
---

**Clarify**  
We need a system that keeps search results up‑to‑date while still serving low latency queries. Key assumptions: (1) data changes frequently (clicks, logs, social posts); (2) users expect < 200 ms response; (3) the index is distributed across many nodes; (4) we have bounded storage and compute budgets.

**Approach**  
1. **Near‑real‑time indexing pipeline** – ingest events → Kafka → microservices → write to a “delta” shard.  
2. **Hybrid storage** – keep a large, immutable “base” index on SSD for fast reads; apply the delta in memory or via incremental merges during query time.  
3. **Refresh strategy** – schedule background compaction every few seconds/minutes, but never block readers.  
4. **Cache invalidation** – tag cached results with last‑updated timestamps and purge when new data arrives.

**Depth**  
- *Index update*: each event updates a per‑document posting list; write‑optimized log segment.  
- *Query processing*: read base index + apply delta in RAM (O(k) where k is number of recent docs). Complexity: O(log N + |delta|).  
- *Compaction*: merge delta into base, maintaining sorted postings; run as a background thread to keep latency constant.  
Trade‑offs: higher freshness → more write amplification and memory usage; lower freshness → simpler cache invalidation but stale results.

**Edge Cases**  
- Burst of writes causing delta growth → trigger immediate compaction.  
- Node failure during merge → use versioned checkpoints.  
- Query for a document that is in the middle of being updated → return last‑known value or “stale” flag.

**Optimize & Communicate**  
- Use Bloom filters on the delta to skip non‑matching docs, cutting query time.  
- Profile latency hotspots; if delta merging dominates, shift to incremental merge trees (e.g., LSM).  
Explain that this design balances freshness (< 1 s) with sub‑200 ms response by decoupling writes from reads and leveraging background compaction—exactly the pattern we see in production search engines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
