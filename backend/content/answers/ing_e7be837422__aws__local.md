---
qid: ing_e7be837422__aws__local
question: 'Explain: 4.5 Addressing Single Points of Failure — Design a Distributed
  Job Scheduler - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 447
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:37-05:00'
sources: []
---

**Situation / Task (S)**  
At my last role I led the migration of a legacy batch engine that processed ~3 M daily records to a cloud‑native scheduler. The single‑point failure in the monolith caused 4 h downtimes costing $12K/day in lost processing and SLA penalties.

**Action (A)**  
I architected a *distributed job scheduler* using **Amazon EventBridge + Step Functions + DynamoDB**:

| Component | Purpose |
|-----------|---------|
| **EventBridge** | Decouples producers, provides durable event bus with retry & dead‑letter queues. |
| **Step Functions** | Orchestrates job steps (validation → transform → load) with built‑in state persistence and error handling. |
| **DynamoDB (partition key = jobId)** | Stores job metadata; auto‑scales to 10 k TPS, eliminating a single DB bottleneck. |
| **Lambda + ECS Fargate** | Workers execute tasks; autoscale based on CloudWatch metrics. |

I added **distributed locking via DynamoDB conditional writes** and *watchdog heartbeats* that trigger failover to standby queues if a worker stalls.

**Result (R)**  
- 99.999% availability (downtime <30 s over 12 mo).  
- Throughput increased from 3 M/day to 6 M/day with 40 % cost savings by leveraging Fargate’s pay‑per‑second model.  
- Incident response time dropped from 4 h to under 5 min, cutting SLA fines by $8K/month.

**Learning**  
I realized that *ownership* means designing for failure early; *dive deep* into AWS managed services (EventBridge, Step Functions) yields resilience with minimal operational overhead. This approach aligns with Amazon’s **Customer Obsession**, **Ownership**, and **Deliver Results** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
