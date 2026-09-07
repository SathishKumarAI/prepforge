---
qid: ing_2a3b678780__faang__local
question: 'Explain: Data Replication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 472
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:21:31-05:00'
sources: []
---

**Data Replication – A Structured FAANG‑Style Explanation**

| Step | What I’d Say |
|------|--------------|
| **Clarify** | “You’re asking about data replication: the process of copying data from one storage location to another so that it can be read or written reliably.  Key assumptions: we’re dealing with distributed systems, consistency trade‑offs matter, and latency/throughput are critical.” |
| **Approach** | 1️⃣ Identify *why* replicate (availability, fault tolerance, locality). 2️⃣ Choose a *replication model*: master–slave, multi‑master, or quorum. 3️⃣ Decide on *consistency guarantees*: strong vs eventual. 4️⃣ Implement *conflict resolution* and *failure handling*. |
| **Depth** | • **Master–Slave**: single writer, multiple readers; uses write‑ahead logs for sync. <br>• **Multi‑Master**: all nodes accept writes; requires conflict detection (e.g., vector clocks). <br>• **Quorum**: read/write quorum sizes \(R+W > N\) ensure consistency. <br>Complexity: replication lag O(1) per node, but network overhead grows with \(N\). |
| **Edge Cases** | • Network partitions → split‑brain in multi‑master.<br>• Clock skew affects vector clocks.<br>• Large objects cause bandwidth bottlenecks; use delta encoding or compaction. |
| **Optimize & Communicate** | Use *asynchronous* replication for low latency, *synchronous* only when strict consistency is required.  Employ *compacted logs* to reduce storage, and *sharding* to keep replica sets small.  I’d explain trade‑offs clearly: “If we pick eventual consistency, writes are fast but stale reads can occur; if we enforce synchronous replication, read latency increases.” |

**TL;DR:** Data replication copies data across nodes for availability and locality. Pick a model (master–slave, multi‑master, quorum), set consistency levels, handle conflicts, watch out for partitions/clock issues, and tune sync vs async to balance performance and correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
