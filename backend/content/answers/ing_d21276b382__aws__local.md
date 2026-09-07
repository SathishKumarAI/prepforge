---
qid: ing_d21276b382__aws__local
question: 'Explain: Single Point of Failure — 8 Common System Design Problems and
  Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 551
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:54-05:00'
sources: []
---

**Situation / Task**  
When I led the migration of our recommendation engine to a new micro‑service architecture, we discovered that the legacy “user‑profile cache” was a **single point of failure (SPOF)**: if it went down, all downstream services lost critical data and latency spiked. My goal was to eliminate SPOFs while keeping cost < 15 % of the current spend.

**Action**  
I applied *Customer Obsession* & *Ownership*, mapping eight common SPOF patterns and their fixes:

| # | Problem | Solution | AWS Service(s) | Trade‑offs |
|---|---------|----------|----------------|------------|
| 1 | Single database node | **Read replica + Multi‑AZ** | RDS, Aurora | Slight write lag |
| 2 | Stateless API on one EC2 | **Elastic Load Balancer + Auto Scaling** | ALB, ASG | Extra compute during spikes |
| 3 | Cache tier with single Redis instance | **ElastiCache Cluster (sharded)** | ElastiCache | More ops for cluster mgmt |
| 4 | SQS queue with one consumer | **Multiple Lambda consumers & DLQ** | SQS, Lambda | Increased cold‑start latency |
| 5 | File storage on EBS volume | **S3 + Glacier backup** | S3, Glacier | Retrieval time for archives |
| 6 | Monitoring on single CloudWatch dashboard | **CloudWatch Alarms + SNS fan‑out** | CloudWatch, SNS | Extra alert noise |
| 7 | Backup script running on one EC2 | **Scheduled Lambda with DynamoDB logs** | Lambda, DynamoDB | Minor code changes |
| 8 | Single‑point API key rotation | **AWS Secrets Manager with automatic rotation** | Secrets Manager | Slight latency in fetch |

I scripted automated Terraform modules to spin up the new topology and ran a chaos‑engineering test that dropped each component for 30 s. The system stayed 99.999% available, and we cut failure‑related tickets by **48 %**.

**Result**  
Post‑migration, uptime improved from 99.92 % → **99.999%**, cost increased only 12 %, and the engineering team reported a 30 % faster feature cycle due to reduced incident triage. I documented lessons in a “SPOF Playbook” that now serves as a reference for all new services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
