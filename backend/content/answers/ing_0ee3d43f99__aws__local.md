---
qid: ing_0ee3d43f99__aws__local
question: 'Explain: can reason through by thinking well what'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 397
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:17-05:00'
sources: []
---

**Situation / Task**  
At my previous firm I was asked to build an ML‑driven fraud detection pipeline that could process ~5 M transactions per day while keeping false positives below 2%. The team had no end‑to‑end solution and the existing model drifted after a few weeks.

**Action (Technical)**  
I designed a serverless architecture on AWS:  
- **Data ingestion** – Kinesis Data Streams → Lambda for real‑time feature extraction.  
- **Feature store** – Amazon DynamoDB with TTL to keep the latest 30 days of contextual data, ensuring low‑latency lookups (<5 ms).  
- **Model training** – SageMaker Pipelines scheduled nightly; I used AutoML (SME) to iterate on XGBoost and a small neural net.  
- **Inference** – SageMaker Endpoint behind API Gateway with autoscaling based on CloudWatch metrics.  

I added an A/B‑testing layer using Amazon SageMaker Experiments, logged every prediction score in CloudWatch Logs, and built dashboards in QuickSight to monitor drift. Cost was capped at $3k/month while keeping the latency < 200 ms.

**Result**  
Within three months, false positives dropped from 6% to **1.8%**, a 70% improvement (Customer Obsession). Transaction throughput stayed at 5M/day with 99.9% availability, and we saved ~$800/month compared to a traditional EC2‑based deployment.

**Reflection**  
I owned the full pipeline, dove deep into latency/accuracy trade‑offs, quantified impact with clear KPIs, and iterated fast—exactly what Amazon expects of a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
