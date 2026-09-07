---
qid: ing_756c9656b7__faang__local
question: 'Explain: Seamless support for stateful services — Twine: Efficient, reliable
  cluster management - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 482
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:17:40-05:00'
sources: []
---

**Clarify**  
The interview asks how *Twine* gives “seamless support for stateful services” while keeping cluster‑management efficient and reliable at Meta. I’ll assume Twine is an internal scheduler/manager that handles long‑running, data‑centric workloads (e.g., key‑value stores, search indices) across many machines.

**Approach**  
1. Describe the challenges of stateful jobs: persistent storage, fault tolerance, consistent replicas, and rolling upgrades.  
2. Explain Twine’s architecture: a master controller + worker agents that expose a **stateful API** (create‑snapshot, restore, re‑balance).  
3. Show how it integrates with Meta’s existing resource manager (e.g., Mesos/Presto) to allocate slots, track health, and trigger rescheduling.

**Depth**  
- *Snapshot‑as‑Service*: Twine uses incremental snapshots of stateful volumes via ZFS snapshots, stored in S3‑like object store; restores are O(1) by re‑attaching the snapshot.  
- *Consistent Rebalancing*: Uses a distributed consensus (Raft) to elect a coordinator that computes minimal data movement, then streams chunks over RDMA for low latency.  
- *Fault Recovery*: Workers publish heartbeats; if missing > t seconds, Twine marks nodes unhealthy and spawns new replicas within the same rack to preserve locality.  
- *Efficiency*: All metadata operations are batched; per‑node metrics feed a reinforcement‑learning scheduler that predicts hot spots and pre‑allocates slots.

**Edge Cases**  
- Network partitions → fallback to “split‑brain” detection, pause writes until consensus restored.  
- Sudden node failure during snapshot → Twine rolls back to last consistent point.  
- Scaling burst: Twine temporarily over‑provisions with “shadow workers” and throttles when capacity is hit.

**Optimize & Communicate**  
Highlight that Twine’s API hides complexity from application developers, letting them treat stateful services like stateless ones while still guaranteeing ACID guarantees. Explain how this design keeps cluster utilization > 90 % without sacrificing reliability, a key metric for Meta’s global scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
