---
qid: ing_8aaabbcd3b__aws__local
question: 'Explain: Read more — Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 475
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:58-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: My team at a fintech startup needed to deploy an ML‑based fraud detector that could scale from 10 k to 1 M transactions per day without manual re‑training cycles.

*Task*: Build a production‑ready microservice pipeline that ingests raw logs, trains models nightly, and serves predictions with <50 ms latency.

*Action*:  
1. **Data Layer** – Ingested events into Amazon Kinesis Data Streams → persisted in S3 (raw) and Amazon DynamoDB (pre‑processed).  
2. **Training Service** – A containerized Lambda function triggered by CloudWatch Events every 24 h that pulls data from S3, trains a LightGBM model on an EC2 Spot fleet (cost ≈ $0.02/hr), writes the artifact to Amazon SageMaker Model Registry.  
3. **Serving Layer** – Deployed the model as a SageMaker endpoint behind an Application Load Balancer; autoscaling based on CPU usage ensures 99.9 % request latency <50 ms.  
4. **Observability** – CloudWatch metrics + X-Ray tracing exposed model drift, prediction accuracy, and throughput; alerts sent to PagerDuty.

*Result*: Production traffic grew 200× in six months while cost per transaction dropped from $0.15 to $0.04. Accuracy improved by 3 % (precision 92→95%) after automated retraining. I also documented a rollback plan that reduced mean time to recovery from 4 h to 30 min.

**What the bar‑raiser looks for**

- **Ownership**: I owned the end‑to‑end pipeline, including failure scenarios and cost controls.  
- **Dive Deep**: Detailed trade‑offs between Lambda vs EC2 Spot, S3 vs DynamoDB, and SageMaker endpoint sizing.  
- **Quantified Impact**: 200× scale, $0.11/txn savings, 3 % accuracy lift.  
- **Learning from Failure**: Early runs hit cold‑start latency; switching to a provisioned SageMaker endpoint reduced it by 70 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
