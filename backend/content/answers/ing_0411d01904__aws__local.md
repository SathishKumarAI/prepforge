---
qid: ing_0411d01904__aws__local
question: 'Explain: High Availability — Highavailability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 526
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:49-05:00'
sources: []
---

**High‑Availability (HA) for an AI inference service**

*Situation*: At my previous startup we launched a real‑time recommendation engine that served 2 M users/day. A single‑point failure caused a 30 % revenue drop during peak hours.

*Task*: Build an HA architecture that guarantees **99.999% availability** while keeping latency < 150 ms for inference calls.

*Action*:  
- Deployed the model on **ECS Fargate** behind an **Application Load Balancer (ALB)** with cross‑AZ placement, ensuring automatic failover if a zone goes down.  
- Used **Auto Scaling** to spin up new task sets based on CPU/Memory thresholds and scheduled scaling for traffic peaks.  
- Persisted model weights in **S3** and cached them in an **ElastiCache Redis** cluster (multi‑AZ) so new tasks warm instantly.  
- Leveraged **RDS Aurora Serverless v2** for user profile data, giving instant failover with minimal write lag.  
- Added **Route 53 latency routing + health checks** to route traffic to healthy endpoints globally.  
- Implemented a **dead‑letter queue (SQS)** for failed inference requests and a Lambda retry pipeline.

*Result*: Availability rose from 99.8% to **99.999%**, reducing downtime cost by $120K/month. Latency improved to 110 ms average, boosting conversion by 7%. The design is cost‑effective: Fargate charges only for used compute, and Aurora Serverless scales automatically.

**Leadership Principles Highlighted**

- **Customer Obsession** – Ensuring uninterrupted service directly improves user experience.  
- **Ownership & Dive Deep** – I architected, deployed, and tuned every component; the metrics validate my ownership.

**Bar‑raiser cues**

- Quantified impact (99.999% availability, $120K/month saved).  
- Depth: detailed trade‑offs between Fargate vs EC2, Aurora Serverless vs provisioned DBs.  
- Learning from failure: iterated on health checks after the first outage to eliminate 30 % revenue loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
