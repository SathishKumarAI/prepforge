---
qid: ing_3534c89504__aws__local
question: 'Explain: Online Courses and Tutorials — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 414
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:53-05:00'
sources: []
---

**Situation & Task**  
When I joined the AWS AI/ML team, we were asked to build a *Learning‑Agent* that could automatically recommend and enroll users in the newest online courses on our marketplace. The goal was to increase course completion by 15 % while keeping cost per recommendation below $0.02.

**Action (Technical)**  
I scoped the problem as a two‑stage pipeline:  
1. **Feature extraction** – Use Kinesis Data Streams to ingest user interaction logs in real time, then transform them with Glue ETL into feature tables stored in DynamoDB.  
2. **Model inference** – Deploy an XGBoost model on SageMaker Edge Container that runs at the edge of our CDN (CloudFront). Predictions are cached in ElastiCache Redis for 5 min to keep latency <50 ms.

For scalability, the Lambda orchestrator scales with Kinesis shards; for availability, we enable multi‑AZ deployment and auto‑rollback. Cost is controlled by using Spot Instances for training and by pruning features that add <1 % AUC improvement.

**Result (STAR)**  
After a 3‑month pilot:  
- Completion rate rose from **42 % to 58 %** (+16 %), exceeding the target.  
- Per‑recommendation cost dropped to **$0.015**, saving ~$200k annually.  
- Latency stayed under 40 ms for 99.5 % of requests.

**Reflection (Bar‑raiser)**  
I owned the full stack, from data ingestion to inference, and iteratively “dived deep” into feature importance and cost metrics. The biggest learning was that edge inference drastically cut latency but required careful cache invalidation; fixing that reduced error rate by 30 %. This showcases ownership, depth, quantified impact, and a continuous improvement mindset—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
