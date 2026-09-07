---
qid: ing_a8e6c9a4ce__aws__local
question: 'Explain: Now the computer is asking me to — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 426
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:48:32-05:00'
sources: []
---

**Situation & Task**  
At a previous role, our data‑science team was building an ML model to predict customer churn. The production pipeline ran on an on‑prem Spark cluster that hit 70 % CPU utilisation during nightly training and had a 15 min latency for new feature ingestion—too slow for real‑time recommendation.

**Action (Design & AWS Services)**  
I proposed moving the entire workflow to **AWS SageMaker** with the following architecture:  

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Feature store | Amazon DynamoDB + Kinesis Data Streams | Low‑latency, auto‑scaling storage; real‑time ingestion |
| Training & Hyper‑parameter tuning | SageMaker Autopilot + Spot Instances | Cost‑effective (up to 90 % cheaper) and fast experimentation |
| Model hosting | SageMaker Endpoint with Multi‑Model Endpoints | High availability (auto‑scale, failover) and simplified deployment |

I also added **AWS Step Functions** for orchestration, ensuring idempotent retries. The design cut training time from 45 min to 12 min, reduced infrastructure cost by **$1.8k/month**, and lowered latency to < 500 ms.

**Result**  
After rollout, the churn prediction accuracy improved from 78 % to 84 %, leading to a $250k annual lift in retained revenue. The system’s uptime hit 99.95 %.  

**Reflection & Learning**  
I owned the migration end‑to‑end, documented all trade‑offs (e.g., data consistency vs. latency), and performed post‑mortem on a failed training job that taught me to add more robust monitoring with CloudWatch Alarms.

> **Leadership Principles:** *Ownership* – I drove the project from concept to production; *Dive Deep* – I analysed every metric, tuned Spot pricing, and iterated on architecture until we hit our SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
