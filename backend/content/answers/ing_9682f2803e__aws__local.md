---
qid: ing_9682f2803e__aws__local
question: 'Explain: time we have a slightly more complicated'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 414
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:17-05:00'
sources: []
---

**Situation (S)** – While leading a fraud‑detection ML pipeline for our credit‑card platform, we discovered that the new “velocity” feature—transactions per minute per card—was highly correlated with false positives in our existing model. The data was noisy and required a more sophisticated approach.

**Task (T)** – Redesign the feature extraction and retraining process to reduce false positives by at least 15 % while keeping latency < 200 ms for real‑time scoring.

**Action (A)**  
1. **Dive Deep & Ownership** – I assembled a cross‑functional squad, mapped data flows in Glue, and profiled the feature with Athena queries.  
2. **Design** – Built an incremental ETL job in AWS Lambda + Step Functions that aggregates per‑card velocity over sliding windows, then feeds the result to SageMaker Pipelines.  
3. **AWS Services** – S3 for raw logs, Glue for cataloging, DynamoDB for per‑card state, SageMaker for model training, and Amazon Kinesis Data Streams for real‑time inference.  
4. **Bias for Action** – Deployed a canary release in 10 % of traffic; monitored confusion matrix via CloudWatch metrics.

**Result (R)** – After two weeks of iterative tuning, false positives dropped from 12.8 % to 9.1 % (≈ 29 % relative reduction), saving ~$2M annually in manual review costs. The solution ran at < 180 ms latency and was fully automated, meeting our SLA.

**Bar‑raiser takeaways** – Demonstrated ownership by leading the entire cycle, deep technical dive into data patterns, quantified impact with real numbers, and learned to iterate quickly when initial assumptions failed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
