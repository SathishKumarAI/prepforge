---
qid: ing_9e8bcd8574__aws__local
question: 'Explain: Uber Algorithms — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 539
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:08-05:00'
sources: []
---

**Situation & Task**  
At my previous role as a Machine‑Learning Engineer for a ride‑hailing platform, I was tasked to redesign the *dynamic pricing* engine that drives surge multipliers in real time. The goal was to reduce over‑pricing by 15 % while keeping passenger wait times under 3 min during peak hours.

**Action**  
I championed an end‑to‑end solution on AWS:

1. **Data ingestion** – Kinesis Data Streams collected telemetry (driver location, ETA, demand signals) at 200 k events/s.  
2. **Feature store** – DynamoDB + Glue catalog stored time‑series features; SageMaker Pipelines automated retraining every 30 min.  
3. **Model** – A gradient‑boosted tree ensemble (XGBoost on SageMaker) predicted *price elasticity* per region, trained on a 12‑month dataset (~5 B rows).  
4. **Serving** – Model endpoints deployed in SageMaker RealTimeInference with multi‑AZ deployment; Lambda orchestrated calls via API Gateway, ensuring <200 ms latency.  
5. **Monitoring** – CloudWatch Alarms and Evidently A/B tests tracked MAE and rider churn.

**Result**  
After 3 months of rollout:  

* Surge pricing accuracy improved by **28 %** (MAE dropped from $1.45 to $0.95).  
* Passenger wait times stayed ≤3 min during 90th‑percentile demand spikes.  
* Revenue impact was +$4M/month, while driver utilization rose 7 %.  

**Leadership Principles & Bar‑raiser cues**  
- **Customer Obsession** – Prioritized rider experience and fairness in pricing.  
- **Ownership** – Took full responsibility for the pipeline, from data ingestion to model monitoring.  
- **Dive Deep** – Trained on billions of rows, tuned hyperparameters, and quantified every trade‑off (latency vs. accuracy).  
- **Learned from Failure** – Early A/B tests revealed a 12 % churn spike; I iterated the feature set and re‑trained, turning failure into a data‑driven improvement.

This demonstrates measurable impact, deep technical depth, and an ownership mindset—exactly what Amazon looks for in high‑impact ML roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
