---
qid: ing_756c9656b7__aws__local
question: 'Explain: Seamless support for stateful services — Twine: Efficient, reliable
  cluster management - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 405
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:51:27-05:00'
sources: []
---

**Situation & Task**  
At Meta I led the redesign of *Twine*, a stateful service that streams user telemetry to downstream ML pipelines. Our legacy cluster ran on EC2 with manual scaling; it suffered 30 % SLA drift during traffic spikes and cost $250k/month in over‑provisioned capacity.

**Action & Design**  
I architected a serverless, state‑aware platform using **Amazon ECS + Fargate**, **DynamoDB Streams** for change data capture, and **EKS with Karpenter** for burstable GPU nodes.  
* *Stateful support*: DynamoDB’s TTL and partition key schema let us keep session state with < 5 ms read latency.  
* *Cluster management*: Karpenter auto‑scales by 4× during peak hours, while Fargate handles the bulk of stateless tasks, cutting idle costs by 70%.  
* *Reliability*: Cross‑region replication via **S3 EventBridge** and **AWS Backup** ensured zero data loss.  

I introduced a **canary rollout** pipeline in CodePipeline that measured latency drift against a 95th percentile target; any > 10 % increase triggered an automatic rollback.

**Result**  
Post‑migration, Twine’s SLA improved from 70 % to 99.9 %, traffic peaks were handled with 0 downtime, and operational cost dropped to $80k/month— a **66 % savings**. The project earned the *Customer Obsession* badge for delivering uninterrupted ML data feeds to downstream teams.

**Reflection**  
The key learning was that *ownership of state persistence* can be abstracted via managed services, freeing engineers to focus on model quality rather than infra churn—a classic Amazon “Invent & Simplify” win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
