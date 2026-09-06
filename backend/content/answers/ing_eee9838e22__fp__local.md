---
qid: ing_eee9838e22__fp__local
question: 'Explain: 2.3 Partition Tolerance — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 404
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:26:49-05:00'
sources: []
---

**Why a distributed database can’t always keep its promises**

In a system spread over several nodes, the *fundamental problem* is that messages may be delayed or lost because of network partitions. A partition means two groups of nodes cannot communicate for some time.  

CAP formalises the consequences: **Consistency (C)** – every read sees the latest write; **Availability (A)** – every request receives a response; **Partition tolerance (P)** – the system continues to operate despite partitions.  
The theorem says *at most two* of these can hold simultaneously.

**Derivation from first principles**

Consider a single client issuing a write on node 1 and a read on node 2 during a partition.  
- If we insist on **C**, node 2 must wait until it receives the update, which may never happen if the network stays split → **A fails**.  
- If we insist on **A**, node 2 can reply immediately, but its value is stale → **C fails**.  
- If we drop **P** and force the nodes to stay in sync (e.g., by blocking writes until a quorum reconnects), the system stops serving requests while the partition persists → **A fails again**.

Thus, *partition tolerance* is not optional; it’s an unavoidable requirement for any truly distributed system. The only trade‑off left is whether you give up consistency or availability during a split.

**Non‑obvious insight**

Most people think “CAP = pick one of C, A, P”. In reality, **P is the baseline**, and CAP reduces to *choosing between C and A* once a partition occurs. Design decisions (e.g., Raft’s quorum writes vs. Dynamo’s eventual consistency) are simply different points on that C–A spectrum, not separate modes of operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
