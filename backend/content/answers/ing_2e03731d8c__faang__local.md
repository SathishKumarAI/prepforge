---
qid: ing_2e03731d8c__faang__local
question: 'Explain: Introduction — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 589
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:30:33-05:00'
sources: []
---

**Clarify**

*Problem:*  
Explain how *LedgerStore*, Uber’s distributed storage layer, can support trillions of indexes while remaining fast and fault‑tolerant.

*Assumptions to confirm:*  
- Indexes are read‑heavy (query‑intensive) but relatively sparse updates.  
- Data is partitioned by key ranges; the system must survive node failures and scale horizontally.

**Approach**

1. Partition data into *shards* (horizontal splits).  
2. For each shard, maintain a *compact inverted index* stored in memory‑optimized structures.  
3. Use *Bloom filters* + *prefix trees* to prune search space quickly.  
4. Replicate shards for fault tolerance; use *gossip*/consensus for consistency.

**Depth**

- **Sharding & Hotspotting:**  Shard keys by hash or range, each shard on a dedicated node group. This keeps the index size per node manageable (≈10⁶‑10⁷ entries).  
- **Index Structure:**  A *Roaring Bitmap* per term maps to document IDs; bitmaps compress heavily when sparsity is high—ideal for trillions of terms.  
- **Memory & Disk Balance:**  Keep hot bits in L1/L2 cache, rest on SSD with read‑ahead. Use *Lazy Loading* so only touched parts are paged.  
- **Consistency:**  Apply *Paxos/RAFT* per shard to keep replicas in sync; eventual consistency for reads is acceptable for Uber’s use cases.  
- **Fault Tolerance:**  If a node fails, its shards are immediately taken over by standby replicas; no index rebuild needed.  
- **Scaling:**  Adding a new node simply takes on new shard ranges; rebalancing is incremental.

**Edge Cases**

- *Burst writes* to an index term → temporarily spill to disk and back‑fill bitmaps.  
- *Shard hot‑spots* if many queries target the same key range → split shard or add read replicas.  
- *Corrupted bitmap* → recover from replica, re‑compute affected segment.

**Optimize & Communicate**

- **Performance:**  Roaring Bitmaps give O(1) membership checks; Bloom filters cut down false positives to <0.01%.  
- **Cost:**  Compressing to ~10 % of raw size keeps memory footprint < 200 GB for trillions of entries, fitting on commodity SSD clusters.  
- **Narrative:**  “LedgerStore shards data, compresses indexes with Roaring Bitmaps, prunes queries via Bloom filters, and guarantees high availability through per‑shard replication—enabling trillions of fast, fault‑tolerant lookups at Uber.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
