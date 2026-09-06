---
qid: ing_4dd13fd8be__think__local
question: 'Explain: Write Locally and Read Globally — Live Comment System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 441
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:11:33-05:00'
sources: []
---

**1️⃣ Clarify the requirement & assumptions**  
   * “Write locally” → each user’s comment is first stored on a node that serves them (low latency).  
   * “Read globally” → any client must see all comments for a thread, regardless of where they were written.  
   * Assume millions of users, high write traffic, eventual consistency acceptable, and we’re targeting a public forum‑style system.

**2️⃣ Adopt a proven architecture framework**  
   * Use **partitioned write‑ahead logs** (Kafka or Pulsar) + **distributed key‑value store** (Cassandra/ScyllaDB).  
   * Model: **Write → Local cache → Log → Replication → Global read index**.  
   * This separates the fast local path from the slower global aggregation.

**3️⃣ Step‑by‑step reasoning**  

1. Client sends POST to its nearest edge node.  
2. Edge stores comment in a short‑lived in‑memory buffer (Redis).  
3. Buffer pushes comment into a partitioned stream; partitions are keyed by thread ID for locality.  
4. Stream consumers write records into the global database, appending to a sorted list per thread.  
5. Reads query the global DB directly or via a read replica cluster; optional caching of hot threads in memory.

**4️⃣ Avoid common pitfalls**  

* Don’t let local writes bypass durability – always log before acknowledging.  
* Avoid write‑skew: use optimistic locking on the thread index.  
* Don’t mix synchronous replication with async reads – it defeats low latency.  
* Watch out for “split brain” when partitioning; ensure quorum writes.

**5️⃣ Sanity check & communicate**  

* Verify that a single comment is visible within milliseconds to the writer and within seconds globally.  
* Explain trade‑offs: local write speed vs eventual consistency, and why a log‑based approach gives us exactly that.  
* Use diagrams in discussion: edge → buffer → stream → global store → read replicas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
