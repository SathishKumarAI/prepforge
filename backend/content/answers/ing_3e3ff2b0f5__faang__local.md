---
qid: ing_3e3ff2b0f5__faang__local
question: 'Explain: Design with DynamoDB — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 578
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:08:57-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level design that explains how Uber’s *LedgerStore* (a DynamoDB‑backed service) can support on the order of trillions of indexes while remaining cost‑effective, highly available, and low‑latency.  
Assumptions:  
- Each index is a key/value pair that can be queried in O(1).  
- Workload is read‑heavy with occasional writes/updates.  
- Data partitioning must avoid hot spots; consistency can be eventually consistent for analytics.

**Approach**  
1. Use DynamoDB **global secondary indexes (GSIs)** to expose each logical index as a separate table‑like structure.  
2. Partition by hashing the *index key* and using a *shard prefix* (e.g., `hash(indexKey) % N`).  
3. Store only the minimal payload needed for lookups (key, timestamp, small metadata).  
4. Leverage **DynamoDB Streams** + Lambda to propagate write updates to all relevant GSIs in near real‑time.  
5. Batch writes with *WriteBatch* and *Conditional Writes* to keep consistency.

**Depth**  
- With `N ≈ 10⁶` shards, each shard handles ~10³ indexes → ~10⁹ total items per GSI; DynamoDB can scale horizontally by adding more partitions automatically.  
- Each write triggers at most *k* stream records (k = number of GSIs for that key). Costs: read/write capacity units are proportional to item size (~200 B) and throughput.  
- Latency stays under 10 ms due to local partitioning; consistency is eventual, acceptable for a ledger.

**Edge Cases**  
- Hot shard when many writes target the same prefix → mitigate by using a *randomized* shard suffix or rotating prefixes.  
- TTL expiration must be coordinated across all GSIs to avoid orphaned data.  
- Back‑pressure during spikes: use DynamoDB’s auto‑scaling and burst capacity.

**Optimize & Communicate**  
- Introduce **prefix sharding** with a deterministic hash + random offset to flatten the load curve.  
- Use *Provisioned IOPS* for hot shards, *On‑Demand* for cold ones.  
- Explain that the design trades a modest increase in write amplification (multiple GSIs) for sub‑10 ms reads across trillions of indexes—exactly what Uber needs for real‑time routing and billing.  

This structured answer demonstrates clear problem framing, a concrete DynamoDB strategy, complexity reasoning, edge‑case awareness, and optimization insight—all key to scoring well in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
