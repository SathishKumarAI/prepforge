---
qid: ing_21667d46fd__fp__local
question: 'Explain: Horizontal Scalability — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 345
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:17:19-05:00'
sources: []
---

**Why horizontal scaling is essential for a notification service**

A notification system must deliver *millions of messages per second* to an ever‑growing user base while guaranteeing **low latency**, **high availability**, and **exactly‑once semantics**.  
If we model the workload as a Poisson stream with rate λ, the expected queue length in a single server grows linearly with λ (Little’s Law). A single machine will inevitably hit its I/O or CPU ceiling once λ exceeds that linear bound; adding more servers is the only way to keep the *service time* bounded.  

**Scaling principle:**  
1. **Stateless workers + sharded queues** – Each worker handles a deterministic partition of users (e.g., hash(user_id) mod N).  
2. **Back‑pressure via bounded queues** – Prevents any one partition from starving others, preserving fairness.  
3. **Leader‑less consensus for deduplication** – Use probabilistic bloom filters per shard to avoid duplicate sends without a central coordinator.

A non‑obvious insight: *sharding by message type (email, push, SMS) rather than user* often yields better cache locality because each channel has distinct payload size and retry policy. Mixing them forces workers to juggle incompatible workloads, inflating context switches and memory pressure.  

Thus, horizontal scalability emerges from the fundamental trade‑off between **throughput** and **latency**, resolved by partitioning work into independent, stateless units that can be replicated elastically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
