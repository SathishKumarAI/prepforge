---
qid: ing_df5f285dbe__think__local
question: 'Explain: Conclusion — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 495
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:43:00-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   - *Goal*: Understand why a system called **LedgerStore** can handle trillions of indexes at Uber.  
   - *Assumptions*: The user knows basic ML concepts but not internal architecture; “indexes” refers to data‑access metadata (e.g., key‑value mappings).  We’ll treat LedgerStore as a distributed log/kv store built on top of Kafka.

**2. Adopt an architectural mental model**  
   - Map the problem onto *distributed systems* principles: **partitioning, replication, consistency, and scalability**.  
   - Think in terms of *append‑only logs*, *sharding*, *compaction*, and *metadata layers*.  

**3. Step‑by‑step reasoning**  
   1. **Log‑based storage** – each write becomes an immutable record; this eliminates costly updates.  
   2. **Sharded indexes** – split the key space across many partitions so that lookups touch only a small shard.  
   3. **Secondary index compaction** – periodically merge sparse entries to keep index size manageable.  
   4. **Distributed metadata service** (e.g., ZooKeeper) tracks which partition holds what range, enabling O(log n) lookup for trillions of keys.  
   5. **Hardware scaling** – adding more disks and nodes increases throughput linearly; the append‑only nature keeps I/O predictable.

**4. Common traps to avoid**  
   - Don’t assume “index” equals a simple in‑memory hash table; at Uber’s scale it must be disk‑backed and sharded.  
   - Avoid thinking that replication is the only scaling lever—partitioning and compaction are equally critical.  

**5. Sanity check & verbalize**  
   - Ask: *If I had 1 trillion keys, how many partitions would I need to keep each partition at ~10 GB?* Rough math → ~100k shards.  
   - Explain that LedgerStore’s design turns the “index” problem into a **distributed log of index entries** that can be queried and compacted efficiently, allowing trillions of lookups without central bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
