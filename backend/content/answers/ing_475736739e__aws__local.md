---
qid: ing_475736739e__aws__local
question: 'Explain: Better compliance — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 599
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:07:04-05:00'
sources: []
---

**Situation (S)**  
While leading the compliance team for a global e‑commerce platform, we discovered that our on‑prem data center could not meet the **PCI‑DSS** and **GDPR** recovery‑time objectives (RTO < 4 h, RPO = 0). A single outage would jeopardize customer trust and incur millions in penalties.

**Task (T)**  
Architect a cloud‑native disaster‑recovery (DR) plan that satisfies regulatory SLAs, keeps costs under **$1M/yr**, and lets us pivot quickly to new regions as we expand.

**Action (A)**  

| Design choice | AWS service | Why |
|---------------|-------------|-----|
| Global replication of data | **Amazon RDS Aurora Serverless v2** + **Cross‑Region Read Replicas** | Near‑real‑time sync, automatic failover, 99.99 % availability |
| Stateless application layer | **Elastic Container Service (ECS) with Fargate** | Zero admin overhead, auto‑scale in seconds |
| Automated recovery workflow | **AWS CloudFormation + CodePipeline** | IaC ensures identical infra in DR region |
| Load balancing & routing | **Amazon Route 53 latency‑based routing + health checks** | Instant traffic shift on failure |
| Cost control | **Savings Plans for Fargate** + **Reserved Instances for Aurora** | Predictable pricing, 75 % savings vs. On‑Demand |

We defined a *Recovery Point Objective* of 30 s (using Aurora’s cross‑region replication lag) and an RTO of 2 min (failover via Route 53 health checks). The plan was tested in a live drill; recovery took **1 min 45 sec**, well below SLA. Cost analysis shows a **$750K/year** DR budget, a **35 % reduction** versus our legacy solution.

**Result (R)**  
Compliance audit passed with zero findings; we avoided a potential $5M penalty and improved customer confidence by 18 % (survey). The DR architecture also enabled us to launch a new EU‑East region in just two weeks—demonstrating true *ownership* and *bias for action*.

---

**Leadership Principles Highlighted**

- **Ownership** – Took full responsibility for regulatory risk and delivered a cost‑effective, fully automated solution.  
- **Dive Deep** – Analyzed RPO/RTO trade‑offs, measured replication lag, and quantified recovery time in live tests.  

Bar‑raisers will note my proactive drill, measurable impact (penalty avoidance, cost savings), and the learning loop that turned a compliance requirement into an operational advantage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
