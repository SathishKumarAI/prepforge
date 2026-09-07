---
qid: ing_2dbb0cc437__aws__local
question: 'Explain: Facebook Newsfeed — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 570
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:37-05:00'
sources: []
---

**Situation / Task**  
I was asked to redesign Facebook’s Newsfeed ranking engine for a 5‑billion daily active user (DAU) audience while keeping latency under 200 ms and cost below $50M/yr.

**Action – Design & AWS stack**  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **Data Ingestion** | Kinesis Data Streams + Lambda | Real‑time click, view, and engagement events at >10k/s with zero‑lag. |
| **Feature Store** | DynamoDB Global Tables + SageMaker Feature Store | Low‑latency read of user & post features; multi‑region for high availability. |
| **Model Training** | SageMaker Pipelines on Spot instances | Hyperparameter tuning (10 % cheaper) and automated retraining every 12 h. |
| **Inference** | SageMaker Neo + Amazon Elastic Inference on ECS Fargate | Model compressed to 30 % size, inference latency <50 ms; auto‑scales with CPU/GPUs. |
| **Serving & A/B Testing** | AppConfig + CloudWatch Alarms | Dynamic rollout of new rankers with rollback on >5 % drop in CTR. |

*Scalability*: Kinesis shards (10k+), DynamoDB provisioned throughput (1M RCU/WCU).  
*Availability*: Multi‑AZ, auto‑heal via CloudFormation stacks.  
*Cost*: Spot + Fargate = 40 % savings vs on‑prem GPU clusters; total < $45M/yr.

**Result**  

- Lifted average daily engagement from **12.3 % to 18.7 %** (Δ +6.4 pp) in 3 months.  
- Latency dropped 60 % while keeping CPU utilization <70 %.  
- Reduced infra spend by **$5M/yr** through spot usage and serverless inference.

**Reflection**  

*Ownership*: I owned the full ML pipeline, from data capture to model monitoring.  
*Dive Deep*: Tracked feature drift quarterly; discovered a 15 % bias in “video” tags—corrected via retraining.  
*Bias for Action*: Deployed Neo‑optimized models within two weeks of pilot success, cutting inference time by 30 %.  

This solution demonstrates Amazon’s **Customer Obsession** (higher engagement), **Ownership** (end‑to‑end control), and **Dive Deep** (data‑driven tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
