---
qid: ing_2da2fadbc6__faang__local
question: 'Explain: Geographic Redundancy — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 430
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:29:35-05:00'
sources: []
---

**Geographic Redundancy – Availability**

| Step | What to say |
|------|-------------|
| **Clarify** | “We need to ensure the service stays up even if an entire region fails (power outage, natural disaster). Assume we have multiple data centers in distinct geographic zones, a load balancer, and a consistency model (eventual/strong).” |
| **Approach** | 1. Deploy identical application stacks in each zone.<br>2. Use a global DNS or edge‑level load balancer with health checks to route traffic only to healthy regions.<br>3. Replicate data across zones using asynchronous replication or multi‑master DBs; keep a read/write split if needed.<br>4. Store critical state (sessions, config) in a globally replicated store (e.g., DynamoDB Global Tables). |
| **Depth** | *Availability* = 1 – P(any zone fails). With two zones, availability ≈ 1 – p² where p is per‑zone failure probability. For strong consistency we add quorum reads/writes; for eventual consistency we accept higher latency but lower write costs. CAP trade‑off: choose *AP* (availability + partition tolerance) with tunable consistency. |
| **Edge Cases** | • Zone‑wide power loss → DNS TTL should be short.<br>• Network partitions between zones → fall back to read‑only mode.<br>• Data divergence → conflict resolution or versioning. Test by simulating zone failure and measuring failover time (< 2 s). |
| **Optimize & Communicate** | • Use health‑check probes + weighted routing for graceful degradation.<br>• Cache hot data in edge caches to reduce cross‑zone traffic.<br>Explain that geographic redundancy turns a single point of failure into a multi‑point system, boosting uptime from 99.9 % to >99.999 %. This satisfies the interviewers’ focus on structured reasoning and depth. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
