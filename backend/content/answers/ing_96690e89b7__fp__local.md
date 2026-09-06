---
qid: ing_96690e89b7__fp__local
question: 'Explain: Stage 5: Read Replicas (2M-10M users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 370
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:25:13-05:00'
sources: []
---

**Stage 5: Read Replicas (2 M–10 M users)**  
When a system’s traffic exceeds the write‑throughput of a single database node, writes become the bottleneck: each update must be serialized, logged, and replicated to all replicas before it can be considered durable. The fundamental problem is *write amplification*: every write costs more than one I/O.  

The solution is to separate **writes** from **reads**. One primary node handles all updates; its log (WAL) is asynchronously streamed to a set of read‑only replicas. Reads are distributed across these replicas, turning the cost per read into *O(1)* lookups on local storage while writes remain O(log N) for the single primary. This follows the CAP theorem’s **CP** design: we sacrifice immediate consistency (C → eventual) to keep availability (A) and partition tolerance (P).  

From an optimization perspective, this is a classic *load‑shedding* of read traffic onto cheaper resources, akin to caching but at the storage level. The deeper insight most overlook is that **replica placement can be data‑aware**: hot tables (frequently queried) are replicated on SSD‑backed nodes, while cold tables stay on HDD replicas. This hybrid placement maximizes throughput without overspending on uniform hardware.  

In practice, a load balancer routes read queries to the nearest replica, and a lightweight “read‑repair” process reconciles divergence during failover. Thus, with 2–10 M users, we achieve linear read scaling while keeping write latency bounded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
