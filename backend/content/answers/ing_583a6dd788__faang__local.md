---
qid: ing_583a6dd788__faang__local
question: 'Explain: Type of Data Store — Distributed Counter System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 521
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:08:42-05:00'
sources: []
---

## 1️⃣ Clarify  
We need a **distributed counter** that supports high‑throughput increment/decrement and reads with eventual consistency.  
Assumptions:  

- Writes dominate (millions per second).  
- Reads are frequent but can tolerate stale values up to a few seconds.  
- The system must scale horizontally, survive node failures, and avoid single‑point bottlenecks.

## 2️⃣ Approach  
1. **Sharding** – split counters by key hash across shards.  
2. **Local in‑memory store + WAL** – each shard keeps an LSM‑style log of deltas (e.g., RocksDB).  
3. **Increment path** – append delta to local log, update local counter, ack immediately.  
4. **Read path** – return local counter; background compaction aggregates logs into a single value.  
5. **Reconciliation** – periodic global aggregation or gossip ensures all replicas converge.

## 3️⃣ Depth  
- **Data model**: `key → [delta1, delta2,…]`.  
- **Complexity**: O(1) write (append), O(1) read (cached value).  
- **Fault tolerance**: each shard has N replicas; writes are sent to all replicas with vector clocks.  
- **Consistency**: eventual; use conflict‑free replicated data type (CRDT) semantics—addition is associative, commutative.  
- **Compaction**: merge deltas into a single value every T seconds or after M entries.

## 4️⃣ Edge Cases  
- Network partitions → replicas diverge until healed.  
- Clock skew → use logical timestamps to order operations.  
- Hot keys → re‑hash or introduce “hot shard” with higher replication factor.  

## 5️⃣ Optimize & Communicate  
- **Batch writes**: group multiple increments per key before persisting.  
- **Read‑through cache**: expose a Redis‑like layer for ultra‑fast reads.  
- **Monitoring**: track lag between local counter and global aggregate to detect stale reads.  

Narrate the design as a “write‑once, read‑many” system where correctness is guaranteed by CRDTs while performance comes from sharding and local in‑memory updates. This balances latency, throughput, and fault tolerance—key metrics for FAANG‑style distributed services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
