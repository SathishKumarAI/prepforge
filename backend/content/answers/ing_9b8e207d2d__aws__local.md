---
qid: ing_9b8e207d2d__aws__local
question: 'Explain: Deployment — GitHub - confluentinc/kafka-rest: Confluent REST
  Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 449
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:16:53-05:00'
sources: []
---

**Situation** – In my last role I led the migration of a real‑time analytics pipeline from on‑prem Kafka to an **AWS managed solution** while keeping the existing **Confluent REST Proxy** (github.com/confluentinc/kafka-rest) for backward compatibility with legacy producers.  
**Task** – Deploy the proxy in a highly available, cost‑effective manner so that 3 M events/sec could be ingested without throttling and all traffic stayed within the VPC.  
**Action** –  
1. **Infrastructure as Code**: Used Terraform to spin up an **ECS Fargate cluster** behind an **ALB** in two AZs, ensuring zero‑downtime rollouts.  
2. **Service Mesh**: Added **AWS AppMesh** for fine‑grained traffic control and observability (metrics, traces).  
3. **Scaling**: Configured **Application Auto Scaling** on CPU/Memory thresholds; set a maximum of 10 tasks per service to cap cost at ~$0.15/h.  
4. **Security**: Integrated with **AWS Secrets Manager** for broker credentials and enforced TLS termination at the ALB.  
5. **Monitoring**: Leveraged CloudWatch dashboards and an alerting rule that fired when latency >120 ms, achieving <1 % SLA breaches.  

**Result** – Achieved 99.9 % availability, handled 3.2 M events/sec with <30 ms average latency, and reduced ops cost by **27 %** versus the on‑prem solution.  

*Leadership Principles*: **Ownership** (I drove the end‑to‑end migration), **Dive Deep** (analyzed latency graphs to tune scaling policies).  
Bar‑raiser focus: clear ownership narrative, data‑driven impact, and a learn‑from‑failure loop that led us to add AppMesh after initial bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
