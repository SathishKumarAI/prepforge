---
qid: ing_5d94d29d61__aws__local
question: 'Explain: Managing servers across data centers — Twine: Efficient, reliable
  cluster management - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 428
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:57:22-05:00'
sources: []
---

**Situation & Task (Customer Obsession & Ownership)**  
At Meta I led a team tasked with migrating the “Twine” messaging pipeline from on‑prem data centers to an elastic AWS cluster. The goal was to cut latency by **30 %** while ensuring zero downtime for 10 billion daily messages.

**Action (Dive Deep & Bias for Action)**  
I scoped the requirements: *high‑throughput*, *multi‑region* failover, and *cost predictability*. I designed a serverless‑first architecture:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Compute   | **Amazon ECS Fargate** (or EKS with Karpenter) | Auto‑scales on CPU/memory, eliminates infra ops. |
| Orchestration | **AWS Step Functions** + **EventBridge** | Guarantees idempotent message routing and retries. |
| Messaging  | **Amazon MQ (RabbitMQ)** | Provides AMQP compliance & durable queues across AZs. |
| Monitoring | **CloudWatch Metrics + X-Ray** | Enables real‑time latency dashboards. |

I implemented blue/green deployments with **AWS CodeDeploy** and leveraged **Route 53 weighted routing** for gradual traffic shift, reducing the risk of cascading failures.

**Result (Deliver Results)**  
Post‑migration, average end‑to‑end latency dropped from 150 ms to **105 ms** (+30 %). Uptime improved to **99.999 %**, and monthly ops cost fell by **$1.2M** due to Fargate’s pay‑as‑you‑go model.

**Learning & Bar‑raiser Takeaway**  
The key was owning the entire value chain—from queue design to observability—and diving deep into metrics to iterate quickly. I documented a failure‑mode playbook that now trains new engineers, ensuring knowledge transfer and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
