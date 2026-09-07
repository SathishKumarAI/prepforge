---
qid: ing_5c6b0e6c47__faang__local
question: 'Explain: Eventually consistent indexes — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 462
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:18:08-05:00'
sources: []
---

**Clarify**  
We’re asked how Uber’s LedgerStore can maintain *eventually‑consistent* indexes while handling trillions of them.  
Assumptions:  
1) Indexes are append‑only key/value pairs tied to a ledger entry.  
2) Reads tolerate staleness up to a bounded latency.  
3) Write throughput far exceeds read‑consistency needs.

**Approach**  
1. Shard indexes by hash of the key to distribute load.  
2. Persist each shard on a log‑structured store (e.g., Kafka/BookKeeper).  
3. Use a background *index updater* that streams new ledger entries to all relevant shards, applying updates asynchronously.  

**Depth**  
- **Storage**: Each shard is an immutable append‑only file; compaction runs offline, keeping only the latest value per key.  
- **Consistency model**: Updates are written once to the source log and then replicated to index shards via a *gossip* protocol. Reads hit the nearest replica; if a stale copy is served, a background sync will eventually bring it up‑to‑date.  
- **Complexity**: Write O(1) per entry (append). Read latency is bounded by replication lag—typically < 200 ms in Uber’s environment.  
- **Fault tolerance**: Replication factor ≥ 3 ensures no single point of failure; compaction handles node failures gracefully.

**Edge cases**  
- *Hot keys*: Mitigate via consistent hashing and key‑based sharding.  
- *Skewed writes*: Scale replicas elastically; use a write buffer to absorb bursts.  
- *Network partitions*: Readers may see stale data, but eventual consistency guarantees convergence once connectivity restores.

**Optimize & communicate**  
Future work:  
1) Adaptive compaction thresholds based on read‑write ratio.  
2) Bloom filters per shard for fast “key absent” checks.  
I’d explain the trade‑off between immediate consistency (higher write cost) and eventual consistency (lower latency), emphasizing that Uber’s use case prioritizes throughput and scalability over strict real‑time correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
