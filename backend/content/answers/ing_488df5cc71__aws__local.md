---
qid: ing_488df5cc71__aws__local
question: 'Explain: Step 3: Design core components — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 665
total_tokens: 936
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:27-05:00'
sources: []
---

**Step 3: Design Core Components – A Practical Example**

**Situation (S)**  
When I joined a fintech startup, we needed to expose our ML‑model inference API to 50k concurrent users while keeping latency < 150 ms. The team had already sketched high‑level flows on the *system‑design‑primer* repo but lacked concrete component sizing.

**Task (T)**  
My goal was to define the core micro‑services, data pipelines, and infrastructure that would satisfy performance, cost, and reliability targets, and then document them in the repo for future hires.

**Action (A)**  

| Component | AWS Service(s) | Design Reasoning |
|-----------|----------------|------------------|
| **Model Serving API** | `Amazon ECS Fargate` + `Application Load Balancer` | Serverless containers scale automatically; ALB provides built‑in health checks and TLS termination. |
| **Feature Store** | `Amazon DynamoDB` (global secondary indexes) | Low‑latency read of 100 µs per request, supports eventual consistency for non‑critical features. |
| **Batch Training Pipeline** | `AWS Glue + Amazon S3 + SageMaker Processing Jobs` | Glue crawlers auto‑discover schema; S3 stores raw data; processing jobs run on spot instances to cut costs by 40%. |
| **Model Registry & Versioning** | `SageMaker Model Registry` | Guarantees immutable, auditable model artifacts. |
| **Observability** | `Amazon CloudWatch + X-Ray` | Real‑time metrics (latency, error rate) and distributed tracing for root cause analysis. |

*Scalability:* Fargate autoscaling capped at 10 k tasks; DynamoDB provisioned throughput 50 k RCU/WCU with on‑demand fallback.  
*Availability:* Multi‑AZ deployments, ALB cross‑zone load balancing, and DynamoDB global tables for read locality.  
*Cost:* Spot instances + Fargate’s pay‑per‑second pricing lowered infra spend from $12k/month to $7.5k/month.

**Result (R)**  
Post‑deployment, API latency dropped to 95 ms average; 99.9% availability over 6 months. Training pipeline throughput increased by 3× with a 40% cost reduction. The design was added to the repo and used as the baseline for two new hires, cutting onboarding time from 4 weeks to 2.

**Leadership Principles Highlighted**

- **Ownership:** Took end‑to‑end responsibility for performance & cost.
- **Dive Deep:** Performed detailed capacity planning and failure mode analysis.
- **Deliver Results:** Quantified latency, availability, and cost metrics.
- **Invent & Simplify:** Replaced monolithic infra with modular, serverless components.

**Bar‑raiser Takeaway**

> *“Did the candidate own the problem, dig into the numbers, and articulate a clear trade‑off matrix? Did they show how this design scales beyond the initial scope?”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
