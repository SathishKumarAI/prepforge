---
qid: ing_e1daa9c95e__aws__local
question: 'Explain: Multi-Master Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 389
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:50:12-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup that needed a *global* user‑profile store for its mobile app. The data had to stay in sync across three regions (US, EU, APAC) while keeping latency < 50 ms for reads and supporting 5 k TPS writes.

**Action**  
I chose **Amazon Aurora Serverless v2 + Global Database** for the relational layer. Aurora’s *multi‑master* replication lets each region act as an independent write source; changes are propagated via *Aurora Replication Streams* to the other regions with < 200 ms lag, satisfying our SLA. To avoid split‑brain we enabled **Conflict Detection & Resolution (CRD)** and used a deterministic merge policy on user ID.  
For monitoring, I set up **CloudWatch Alarms** on replication lag and **AWS X-Ray** traces for cross‑region calls. Costs were kept under $12 k/month by leveraging Aurora’s *pay‑per‑request* model and using read replicas only where traffic spikes.

**Result**  
After deployment, read latency dropped from 120 ms to 45 ms, write throughput increased from 1 k TPS to 5 k TPS, and we achieved a 99.999% availability SLA across all regions—meeting the product roadmap’s “zero‑downtime global launch” goal.

**Learning**  
The biggest failure was an initial misconfiguration of CRD that caused data divergence; I fixed it by adding automated reconciliation jobs and updated our playbook. This reinforced **Ownership** (fixing the bug immediately) and **Dive Deep** (analyzing replication logs to pinpoint the root cause).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
