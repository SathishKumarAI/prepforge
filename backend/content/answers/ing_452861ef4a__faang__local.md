---
qid: ing_452861ef4a__faang__local
question: 'Explain: High Availability — System Design Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 544
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:25:03-05:00'
sources: []
---

**High‑Availability (HA) – System Design Cheat Sheet**

| Step | What to Cover | Key Points |
|------|---------------|------------|
| **1️⃣ Clarify** | *Restate the problem & ask assumptions* | “We need a system that stays online even if one or more components fail. Assume 99.999% uptime, user traffic ~10 k RPS, data stored in a relational DB.” |
| **2️⃣ Approach** | *Outline the HA plan* | • Redundant tiers (load balancer, app servers, database replicas) <br>• Failure detection & automatic switchover <br>• Data consistency strategy (strong vs. eventual). |
| **3️⃣ Depth** | *Technical details* | - **Load Balancers:** use active‑active with health‑checks; sticky sessions optional.<br>- **App Servers:** stateless, auto‑scale via cloud provider; keep session in Redis or JWT.<br>- **Databases:** master‑replica (primary‑secondary) + read replicas; use multi‑AZ deployment. <br>- **Failover:** DNS TTL low, or use service mesh with health probes to redirect traffic instantly. <br>- **Data Consistency:** eventual consistency for reads, synchronous writes on primary; consider two‑phase commit if needed.<br>- **Complexity:** O(1) routing; cost ≈ 2× resources + replication overhead. |
| **4️⃣ Edge Cases** | *What can break & tests* | • Network partition → split‑brain; use quorum locks. <br>• Simultaneous node failures → design for 2+ replicas. <br>• Load balancer failure → dual LB with BGP or Anycast. <br>Test by killing random nodes, simulating network lag, and verifying traffic is served without interruption. |
| **5️⃣ Optimize & Communicate** | *Improvements & narrative* | • Add caching layers (CDN) to reduce DB load.<br>• Use blue‑green deployments for zero‑downtime updates.<br>Explain trade‑offs: stronger consistency = higher latency; cheaper redundancy = risk of data loss. Narrate decisions as “Given X constraints, we chose Y to balance availability vs. cost.” |

**TL;DR:** Build a stateless, multi‑tiered architecture with redundant load balancers, auto‑scaling app servers, replicated databases, and automated health checks. Ensure graceful failover, test edge cases, and communicate trade‑offs clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
