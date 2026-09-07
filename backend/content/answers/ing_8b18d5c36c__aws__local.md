---
qid: ing_8b18d5c36c__aws__local
question: 'Explain: Warm Standby Solution: — Cloud Disaster Recovery Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 470
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:40:19-05:00'
sources: []
---

**Situation** – While leading a production ML inference service (≈ 12 M predictions/day) for a financial client, the on‑prem infra suffered an outage during peak trading hours. **Task** – Design a “warm standby” Disaster Recovery (DR) that keeps latency < 200 ms and costs ≤ 30 % of the primary cost.

**Action** –  
1. **Architecture** – Deploy two identical SageMaker endpoint clusters in opposite AZs, with an additional *warm‑standby* cluster on EC2‑based inference containers (ECS Fargate) kept idle but pre‑loaded with model artifacts from S3.  
2. **Health checks** – Route 53 + CloudWatch Alarms trigger a Lambda that promotes the standby ECS cluster to primary when the SageMaker endpoint latency > 250 ms or health check fails.  
3. **Data sync** – Use Kinesis Data Streams for real‑time feature updates; an EventBridge rule copies new data into S3, triggering an S3 event that refreshes the model in the warm standby via a Lambda.  
4. **Cost control** – Spot instances for the warm cluster, with Auto Scaling policies to shut down after 30 min of inactivity.

**Result** – In a simulated outage test, failover time was < 45 s, latency rose from 120 ms to 180 ms, and we maintained 99.9 % SLA while spending only **27 %** of the primary cost. The design earned a “Customer Obsession” score of 5/5 from the client’s post‑deployment review.

*Bar‑raiser cues*: ownership (owning both clusters), dive deep (understanding latency trade‑offs), quantified impact (cost & SLA metrics), and learning (iterating on health‑check thresholds).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
