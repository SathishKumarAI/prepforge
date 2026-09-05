---
qid: ing_3473c374d5__think__local
question: 'Explain: Candidate — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 488
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:30:09-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- Confirm that “Distributed Counter” means a shared numeric value that multiple clients can increment/decrement concurrently, possibly across data centers.  
- Assume high availability, low latency, eventual consistency is acceptable; we’re not building a transactional database.  
- Note constraints: read/write throughput, fault tolerance, network partitions, and typical counter use‑cases (likes, page views).

**2️⃣ Mental model / framework**  
Use the classic *CAP* + *scalable architecture* lens:  
- **Consistency vs Availability** – pick eventual consistency for high write rates.  
- **Partitioning strategy** – sharding by key or hash to spread load.  
- **Replication** – synchronous replicas in same region, asynchronous cross‑region.  
- **Conflict resolution** – CRDT (Commutative Replicated Data Type) or vector clocks.

**3️⃣ Step‑by‑step reasoning**  
1. *Data model*: each counter is a CRDT (e.g., GCounter).  
2. *Write path*: client sends increment to local node → updates local replica, propagates diff asynchronously to peers.  
3. *Read path*: read from local node; optionally merge with recent diffs for fresher value.  
4. *Failure handling*: if a node is down, clients route to nearest healthy replica; lost increments are replayed via logs.  
5. *Scaling*: add nodes by expanding hash ring; re‑distribute shards automatically.  
6. *Monitoring*: track replication lag, write latency, and conflict counts.

**4️⃣ Common pitfalls to avoid**  
- Assuming linearizability will kill throughput—don’t enforce strict locking unless required.  
- Forgetting about clock skew in vector clocks → use logical timestamps or Lamport clocks.  
- Over‑sharding: too many tiny shards increase coordination overhead.  

**5️⃣ Sanity‑check & verbalize**  
- Ask: “Does this handle 10k RPS with <50 ms latency?” → estimate per-node load, network hops.  
- Explain to a peer: “We use CRDTs so increments are commutative; each node keeps a local log and syncs diffs asynchronously, giving us eventual consistency while keeping the system highly available.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
