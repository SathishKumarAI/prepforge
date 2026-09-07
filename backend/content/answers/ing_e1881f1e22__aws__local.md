---
qid: ing_e1881f1e22__aws__local
question: 'Explain: The Business Problem — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 446
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:33-05:00'
sources: []
---

**Situation & Task**  
While leading the Cloud‑AI squad at a fintech, we were asked to build a *Computer Use Agent* (CUA) that could autonomously provision, configure, and monitor virtual desktops for 30 000 concurrent traders. The goal was to cut manual provisioning time from **3 days → 2 minutes** and reduce infra cost by **20 %**, while keeping SLA ≥ 99.9 %.  

**Action (Design)**  
1. **Infrastructure as Code** – Terraform + AWS CloudFormation for reproducible VPC, subnets, IAM roles.  
2. **Orchestration** – Step Functions + Lambda to spin up Amazon WorkSpaces on demand; each state validates user creds, applies security groups, and pushes configuration via SSM Parameter Store.  
3. **Observability** – CloudWatch Alarms + X-Ray traces for latency; DynamoDB streams trigger auto‑scaling of the WorkSpace fleet.  
4. **Cost control** – Spot Fleet with a 30 % price ceiling, backed by Savings Plans; Lambda cold‑start warmed via scheduled “heartbeat”.  

**Result (Data)**  
- Provisioning time dropped from **3 days → 2 min** (96 % faster).  
- Daily cost fell from **$12K → $9.6K** (20 % savings).  
- Uptime rose to **99.95 %**, surpassing the SLA by 0.05 %.  

**Reflection**  
I took full *ownership* of the pipeline, diving deep into Lambda memory/timeout trade‑offs and AWS pricing models. The biggest failure was an under‑provisioned spot pool that caused a brief outage; we logged it, added a safety margin, and now auto‑scales based on real‑time CloudWatch metrics. This experience sharpened my *Bias for Action* and reinforced the value of continuous monitoring—key to delivering reliable AI‑driven services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
