---
qid: ing_4f0142e91f__think__local
question: 'Explain: Sharding — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 462
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:15:40-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - What is “sharding” in this context? (horizontal partitioning of data)  
   - Assume we’re designing Instagram’s photo‑storage subsystem: millions of users, billions of photos, high read/write throughput.  
   - Assume we need to support fast uploads, global reads, and eventual consistency.

**2️⃣ Pick a mental model**  
   - Use the *CAP* and *scalability* lenses: sharding solves **partition tolerance** + **horizontal scalability**.  
   - Think of three layers: application → routing layer → storage shards (e.g., Cassandra partitions).

**3️⃣ Reason step‑by‑step**  
   1. **Identify partition key** – e.g., user ID or photo hash.  
   2. **Design shard placement** – consistent hashing, virtual nodes, avoid hot spots.  
   3. **Handle writes** – route to the correct shard; ensure replication (e.g., 3‑node cluster).  
   4. **Read path** – cache common feeds, use read replicas per region.  
   5. **Rebalancing** – when a shard grows, split and redistribute.  
   6. **Failure handling** – detect node loss, promote replicas, re‑route traffic.

**4️⃣ Watch for pitfalls**  
   - *Wrong key choice* → uneven load.  
   - *Ignoring cross‑shard joins* – Instagram’s feed needs many shards; use denormalization or materialized views.  
   - *Over‑complicating routing* – keep the router stateless.

**5️⃣ Sanity‑check & verbalize**  
   - “If I upload 1 GB of photos per second, how many shards do I need?” → estimate throughput / shard capacity.  
   - Explain to a peer: “We split by user ID so that all a user’s data lives together; this keeps session locality and simplifies cache eviction.”  

Follow this checklist whenever you’re asked to explain sharding in a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
