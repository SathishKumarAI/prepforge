---
qid: ing_f5ca5e2f4d__faang__local
question: 'Explain: Select your preferred language — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 548
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:11:18-05:00'
sources: []
---

**Clarify**  
*Problem:* How does Uber’s **LedgerStore** sustain trillions of indexes—e.g., per‑user, per‑trip, per‑region—while delivering sub‑second reads?  
*Assumptions I’d confirm:* 1) Data is write‑heavy but read latency < 100 ms. 2) Indexes are many‑to‑many (a trip touches user, driver, location). 3) System must tolerate node failures and scale horizontally.

**Approach**  
1. Partition data & indexes by *shard key* (user ID, region hash).  
2. Use **wide‑column** stores (Cassandra/Scylla) for write amplification control.  
3. Build *secondary index tables* that map keys → row IDs in the base table, stored as sparse columns.  
4. Employ *compact storage* (Bloom filters + LSM trees) to skip empty ranges.  
5. Run *incremental compaction* and *hot‑spot detection* to rebalance shards.

**Depth**  
- **Write path:** Append-only writes go to the base table; an index updater in the same batch writes to the corresponding index tables, keeping all operations atomic via lightweight transactions or a two‑phase commit.  
- **Read path:** A query first looks up the index (O(1) on the sparse column), retrieves row IDs, then fetches data from the base table. Because indexes are sparse and only store necessary columns, disk I/O is minimal.  
- **Scaling:** Sharding by hash ensures even distribution; hot shards trigger *split* operations that move ranges to new nodes without downtime.  
- **Fault tolerance:** Each shard replicates across 3 nodes; read repair & anti‑entropy keep replicas in sync.

**Edge Cases**  
- Rapid growth of a single user’s activity → triggers dynamic re‑sharding.  
- Schema evolution (new index columns) handled by background migration jobs that add new sparse columns without blocking writes.  
- Network partitions could cause stale reads; mitigated by read‑repair on read path.

**Optimize & Communicate**  
Improvements: use *time‑to‑live* per index to auto‑purge stale data, and compress index values with dictionary encoding. I’d explain this architecture in a diagram, emphasize the trade‑off between write amplification (extra index writes) vs. read latency (O(1) lookups), and highlight that LedgerStore’s design leverages proven NoSQL primitives while custom‑optimizing for Uber’s massive cardinality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
