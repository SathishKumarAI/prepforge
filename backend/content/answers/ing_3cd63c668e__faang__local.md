---
qid: ing_3cd63c668e__faang__local
question: 'Explain: Redundancy Trade-Offs — Single Point of Failure (SPOF) | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 411
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:05:25-05:00'
sources: []
---

**Redundancy Trade‑Offs – Managing a Single Point of Failure (SPOF)**  

| Step | What I’ll Do |
|------|--------------|
| **Clarify** | A SPOF is any component whose failure brings down the whole system. We need to know what level of uptime, latency and cost we’re targeting, which services are critical, and how much traffic each can absorb. |
| **Approach** | 1️⃣ Identify critical nodes (DB master, auth server). <br>2️⃣ Choose redundancy patterns: active‑standby, multi‑active or sharding. <br>3️⃣ Add health checks & automatic failover. <br>4️⃣ Evaluate CAP trade‑offs for distributed data stores. |
| **Depth** | *Active‑Standby*: one primary + hot standby; failover latency ≈ 1–2 s, cost ~200% of active. *Multi‑Active*: all nodes serve traffic; requires consensus (Paxos/Raft) or conflict resolution, higher consistency overhead. *Sharding*: distributes load, removes single DB SPOF but adds cross‑shard joins complexity. For stateful services, use session replication or sticky routing. Complexity: O(1) failover time vs O(n) for re‑balancing. |
| **Edge Cases** | Network partitions (split brain), simultaneous node failures, data loss during switchover, stale reads in eventual consistency shards. Test with chaos monkey and simulated latency spikes. |
| **Optimize & Communicate** | Start with low‑cost active‑standby for non‑critical services, progressively move to multi‑active as traffic grows. Document failover scripts, monitor health metrics, and run quarterly DR drills. Explain that each redundancy layer increases availability at the cost of added latency, consistency overhead, and infrastructure spend—balancing them against SLAs is key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
