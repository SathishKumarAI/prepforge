---
qid: ing_a5d1a92a04__aws__local
question: 'Explain: Driver - Push Location — Driverallocationubergojek'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 412
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:41:45-05:00'
sources: []
---

**Situation & Task**  
At a ride‑hailing startup I led the *Driver‑Push Location* feature that matched drivers to nearby riders in real time. The goal was to reduce “no‑show” rates by 30 % and improve driver utilization from 55 % to 70 %.  

**Action (Design & Implementation)**  
1. **Data ingestion** – Driver GPS streams landed in Kinesis Data Streams, then a Lambda function wrote de‑duplicated coordinates into DynamoDB (partition key: `driver_id`, sort key: `timestamp`).  
2. **Model inference** – A SageMaker endpoint hosted a lightweight XGBoost model that scored each driver for proximity and ETA; the endpoint was autoscaled via Lambda concurrency.  
3. **Matching engine** – An AWS Step Function orchestrated: (a) pull top‑N drivers from DynamoDB, (b) invoke the model, (c) publish matched pairs to SNS, which triggered a downstream notification service in ECS Fargate.  
4. **Observability** – CloudWatch metrics and X-Ray traces tracked latency; alerts were set for >200 ms per match.

**Result**  
- Latency dropped from 1.2 s to <150 ms (95th percentile).  
- Driver utilization rose to 68 % within two weeks, exceeding the target by 3 %.  
- No‑show rate fell by 32 %, saving ~$120K/month in idle driver costs.

**Reflection**  
I owned the full stack, *dive deep* into Lambda throttling issues, and iterated on model thresholds—learning that a simpler model with better feature engineering outperformed a complex one. This cycle exemplifies **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
