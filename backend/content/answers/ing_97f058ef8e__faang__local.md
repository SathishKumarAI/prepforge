---
qid: ing_97f058ef8e__faang__local
question: 'Explain: Design with Docstore — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 426
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:38:10-05:00'
sources: []
---

**Clarify**  
Uber needs a highly‑available ledger that can expose *trillions* of key/value pairs (e.g., trip IDs → metadata) while still supporting fast read/write and consistency across data centers.  
Assumptions: we’re dealing with append‑only logs, eventual consistency is acceptable for reads, and the system must scale horizontally without a single point of failure.

**Approach**  
1. Partition the ledger into *shards* keyed by hash ranges.  
2. Each shard runs a replicated log (Raft/RAFT‑like) for durability.  
3. Use an on‑disk B+Tree per shard to maintain a local index; expose this via a thin “DocStore” layer that materializes only the required subset of keys.

**Depth**  
- **Sharding & Replication:** 10k shards, each with 3 replicas across AZs → 30k nodes.  
- **Indexing:** B+Tree pages are cached in memory; writes append to log and update index lazily (background compaction).  
- **Consistency:** Reads go to the leader of a shard; writes are idempotent.  
- Complexity: `O(log N)` per read/write, where *N* is size of shard. Storage overhead ≈ 1.5× data for logs + indexes.

**Edge Cases**  
- Hot shards → re‑shard or add replicas.  
- Node failures → leader election may cause temporary latency spikes.  
- Schema evolution requires backward‑compatible log formats.

**Optimize & Communicate**  
To reduce read latency, pre‑cache hot prefixes and use Bloom filters to avoid disk seeks. Explain trade‑offs: higher replication = more consistency but higher cost; larger shards = fewer nodes but bigger failure domains. End by highlighting how this design gives Uber a fault‑tolerant ledger that scales to trillions of indexes with sub‑millisecond reads in most cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
