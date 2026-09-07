---
qid: ing_496484ae68__aws__local
question: 'Explain: System design topics: start here — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 557
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:33-05:00'
sources: []
---

**Situation (S)**  
I was hired as a Machine‑Learning Engineer at a fintech startup that needed to deploy real‑time fraud detection for $2 B of daily transactions. The existing monolith could not scale beyond 10 k TPS and had 30 % latency, hurting customer experience.

**Task (T)**  
Design an end‑to‑end system that can ingest millions of events per second, score them with a trained model, and trigger alerts in <200 ms while staying cost‑effective. I owned the solution from data ingestion to serving.

**Action (A)**  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Ingestion | **Amazon Kinesis Data Streams** (shards = 20) | Handles >1M events/s, auto‑scales, low latency. |
| Feature Store | **AWS Glue + Amazon Athena** + **DynamoDB** | Batch ETL for static features; real‑time lookup via DynamoDB with TTL for fresh data. |
| Model Serving | **Amazon SageMaker Endpoint (Multi‑Model)** | Deploys 10+ models, autoscaling on CPU/GPU. |
| Orchestration | **AWS Step Functions + Lambda** | Guarantees idempotent pipeline, retries, and stateful error handling. |
| Alerting | **Amazon SNS + CloudWatch Alarms** | Immediate push to ops and auto‑scale alert dashboards. |

*Scalability:* Kinesis shards automatically split on high throughput; SageMaker Multi‑Model endpoints scale CPU/GPU horizontally.  
*Availability:* All services are region‑native with 99.9 % SLA; we enable **Multi‑AZ** for critical components.  
*Cost:* Spot instances for Lambda & Step Functions, auto‑scaling reduces idle capacity; estimated $12k/month vs $30k for monolith.

**Result (R)**  
After launch:  
- Throughput rose to 2 M TPS with <120 ms latency (20 % improvement).  
- Fraud detection accuracy increased from 78 % to 92 %, reducing false positives by 45 %.  
- Operational cost dropped 60 % and incident rate fell from 5/day to 0.3/day.

**Learning & Bar‑raiser cues**  
I **took ownership** of every layer, performed a *dive deep* into latency bottlenecks, quantified impact with A/B tests, and iterated after each failure (e.g., retraining on drifted data). This aligns with Amazon’s **Ownership**, **Dive Deep**, and **Bias for Action** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
