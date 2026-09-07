---
qid: ing_799d3cc962__faang__local
question: 'Explain: Hot Site / Multi-Site Configuration: — Cloud Disaster Recovery
  Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 399
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:26:20-05:00'
sources: []
---

**Hot Site / Multi‑Site Configuration – Cloud Disaster Recovery**

| Step | What I’d do |
|------|-------------|
| **Clarify** | We need a near‑zero‑downtime DR strategy that keeps services live in another region. Assume: 1 TB of data, real‑time analytics, SLA < 5 min failover. |
| **Approach** | 1️⃣ Replicate databases (e.g., Aurora Global) with asynchronous cross‑region streaming.<br>2️⃣ Spin up a *hot* standby cluster in the secondary region that mirrors production state.<br>3️⃣ Use DNS fail‑over (Route 53 health checks) to redirect traffic automatically. |
| **Depth** | • **Data consistency**: Use read replicas + conflict‑resolution via vector clocks.<br>• **Latency**: Keep write latency < 50 ms by placing the hot site in a region with minimal network hops.<br>• **Cost trade‑off**: Hot sites incur 100 % of prod cost but offer instant switchover; consider *warm* or *cold* sites for lower budgets. |
| **Edge Cases** | • Network partition → split‑brain; mitigate with consensus (Raft) on critical flags.<br>• Sudden spike in traffic after failover → auto‑scale using CloudWatch alarms.<br>• Data drift during replication lag → periodic audit logs. |
| **Optimize & Communicate** | I’d add automated health checks, a blue/green deployment pipeline for the hot cluster, and periodic DR drills. Presenting this plan to stakeholders: “We keep 1 TB live in two regions, failover <5 min, cost ~$X/month.” This balances resilience with ROI, satisfying both technical depth and business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
