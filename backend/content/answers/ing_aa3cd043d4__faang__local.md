---
qid: ing_aa3cd043d4__faang__local
question: 'Explain: Read-optimized permanent index table — How LedgerStore Supports
  Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 544
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:19:51-05:00'
sources: []
---

**Clarify**  
You’re asking how Uber’s *LedgerStore* can keep a read‑heavy “permanent” index that scales to trillions of rows while still supporting fast queries and updates. The key is that the index is immutable once written (read‑optimized) and partitioned across many nodes, so we need to explain its storage layout, update strategy, and consistency guarantees.

**Approach**  
1. **Immutable chunks** – data is written in append‑only segments.  
2. **Multi‑level indexing** – a small in‑memory L0 index per segment plus larger on‑disk indices (B+ trees or Roaring bitmaps).  
3. **Distributed sharding** – each key range lives on its own node; shards are replicated for fault tolerance.  
4. **Lazy compaction** – old segments are merged offline, keeping read paths short.

**Depth**  
- *Segment layout*: Each segment contains a sorted list of keys with pointers to value locations in the underlying log. The segment header stores a hash‑based Bloom filter and a Roaring bitmap for quick existence checks.  
- *Index hierarchy*: L0 (in‑memory) is a hash map over the last 10 M keys per shard; L1 is a disk‑resident B+ tree that covers the whole shard, with leaf nodes containing pointers to segments.  
- *Updates*: Writes append new records to a segment and update the in‑memory index; no delete or overwrite occurs until compaction.  
- *Consistency*: Strong consistency on reads is achieved by reading from the latest committed segment per shard; eventual consistency for deletes via tombstone markers that survive compaction.  
- *Complexity*: Read cost ≈ O(log N) for B+ tree lookup + O(1) Bloom filter; write cost is amortized O(1) due to append‑only.

**Edge cases**  
- Very hot keys may cause L0 overflow → trigger a new shard or merge.  
- Segment corruption requires replaying from the log; we test by injecting failures during compaction.  
- Shard imbalance: monitor key distribution and rebalance automatically.

**Optimize & communicate**  
We can reduce read latency further by caching hot segment ranges in SSD tiered storage, and by using adaptive Bloom filters that shrink when a shard becomes cold. In discussion I’d emphasize the trade‑off between write amplification (due to compaction) and read speed, noting that Uber’s use case prioritizes reads, so the design deliberately tolerates higher write overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
