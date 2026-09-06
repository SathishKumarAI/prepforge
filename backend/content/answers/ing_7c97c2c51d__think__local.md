---
qid: ing_7c97c2c51d__think__local
question: 'Explain: Strongly consistent indexes — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 507
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:15:08-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - *What is a “strongly consistent index”?* Assume it means an index that reflects every committed write immediately, with no eventual‑consistency lag.  
   - *Which system are we talking about?* Focus on Uber’s LedgerStore (a distributed log + key‑value store).  
   - *Scale target:* trillions of indexes—so think in terms of billions of partitions, sharding, and horizontal scalability.

**2️⃣ Mental model / framework**  
   - Treat the ledger as a write‑ahead log; every record has a monotonically increasing offset.  
   - An index is essentially a mapping from a key (or composite key) to one or more offsets.  
   - Consistency comes from ensuring that once an offset is visible, all indexes pointing to it are already committed.

**3️⃣ Step‑by‑step reasoning**  
   1. **Write path**: append record → commit in consensus layer → update primary data store.  
   2. **Index update**: immediately after commit, write index entries into a separate log (or same log with special markers).  
   3. **Replication & durability**: use the same consensus mechanism for indexes to guarantee that all replicas see the same order.  
   4. **Partitioning**: hash key → shard → each shard owns its own set of offsets, reducing contention.  
   5. **Compression / compaction**: periodically merge index logs while preserving order to keep size manageable.  

**4️⃣ Common traps to avoid**  
   - *Assuming eventual consistency is fine*: at Uber’s scale they need real‑time billing, so any lag is unacceptable.  
   - *Ignoring write amplification*: double writes (data + index) can hurt throughput if not batched.  
   - *Underestimating the cost of locking*: per‑shard locks or optimistic concurrency are essential.

**5️⃣ Sanity‑check & communicate**  
   - Verify that every commit path includes an atomic update to both data and index logs.  
   - Show a diagram: “Write → Commit → Index write (same log) → Replicate.”  
   - Explain how sharding keeps the per‑node load in check while guaranteeing global consistency via consensus.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
