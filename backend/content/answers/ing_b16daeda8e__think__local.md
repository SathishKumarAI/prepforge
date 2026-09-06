---
qid: ing_b16daeda8e__think__local
question: 'Explain: 7.3 Durability — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 616
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:42:33-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify *durability* as a core reliability guarantee: once an operation (e.g., photo upload) returns success, the data must survive crashes or failures.  
- Assume we’re designing Instagram’s storage layer (posts, media, metadata).  
- Note constraints: high write throughput, eventual consistency across regions, low latency for reads.

**2️⃣ Pick a mental model / framework**  
- Use the **CAP + PACELC** lens to reason about *Consistency* vs. *Availability*.  
- Adopt a **write‑ahead log → immutable object store → read‑optimized cache** pipeline (common in large social apps).  
- Map durability onto *write persistence guarantees*: “at least once”, “exactly once”, or “strong durability”.

**3️⃣ Step‑by‑step reasoning**  
1. *Write path*: User uploads media → client sends to a front‑end API → the API writes to a write‑ahead log (e.g., Kafka/Redis Streams).  
2. *Log persistence*: Ensure the log is replicated across multiple nodes; only acknowledge after N‑replicas persist.  
3. *Background worker* consumes the log → stores immutable media blob in a distributed object store (S3, GCS) and metadata in a relational DB or NoSQL.  
4. *Redundancy*: Store media copies in multiple regions; use erasure coding for cost efficiency.  
5. *Idempotency*: Tag each write with a unique request ID to guard against retries.  
6. *Recovery*: On node failure, replay the log from the last checkpoint to rebuild state.  
7. *Read path*: Cache (Redis) serves most recent posts; fallback to DB if cache miss.

**4️⃣ Common traps & how to avoid them**  
- **Assuming instant durability**: Neglecting replication lag can lead to “phantom” writes that disappear after a crash.  
- **Single point of failure in the log**: Use partitioned, replicated logs; avoid a single broker.  
- **Ignoring idempotency**: Duplicate acknowledgments may corrupt user feeds.  
- **Over‑optimizing for speed at cost of durability**: Bypassing replication for “fast” writes can violate durability guarantees.

**5️⃣ Sanity‑check & verbalize**  
- Ask: *If the system crashes right after a successful upload, will the photo still be retrievable?*  
- Verify that every write passes through a replicated log before client acknowledgment.  
- Explain how replaying the log restores lost state, ensuring durability even under catastrophic failures.

By following this structured approach—clarify, model with CAP/PACELC, detail write‑ahead + replication, watch for pitfalls, and validate—you can confidently articulate Instagram’s durability strategy in a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
