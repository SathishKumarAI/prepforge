---
qid: ing_bd08649111__fp__local
question: 'Explain: Index per Time Frame — Time-Based Data | Elasticsearch: The Definitive
  Guide [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 362
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:45:31-05:00'
sources: []
---

**Index‑per‑Time‑Frame in Elasticsearch**

When you ingest time‑stamped data (logs, metrics, events), the most fundamental problem is *temporal locality*: queries almost always ask for “the last N days” or “events from a specific month.” If all records sat in one massive index, every search would need to scan billions of documents, and updates would lock the whole shard set.  

Elasticsearch solves this by **partitioning the data into separate indices per logical time window** (e.g., daily, weekly, monthly). Each index is an independent Lucene segment set that can be queried, refreshed, or deleted in isolation.

Why does this work?  
1. **Shard allocation efficiency** – Shards are allocated to nodes based on size; a small “today” index keeps the cluster lightweight while older indices can be moved to cheaper storage.  
2. **Query optimization** – The query engine can skip entire indices that fall outside the requested range, reducing I/O and CPU.  
3. **Lifecycle management** – Index‑level TTL or ILM policies let you automate rollover and deletion without affecting newer data.

A non‑obvious insight: *indices are not just storage units; they become logical “time buckets” for concurrency control.* When a new index is rolled over, the old one becomes read‑only. This eliminates lock contention on writes while still allowing full search performance, because Lucene’s merge process only touches the active index.

In short, index‑per‑time‑frame turns the temporal dimension into an explicit sharding strategy that aligns with both storage economics and query patterns, turning what would be a linear scan into a logarithmic‑time lookup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
