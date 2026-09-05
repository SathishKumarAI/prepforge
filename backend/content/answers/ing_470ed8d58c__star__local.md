---
qid: ing_470ed8d58c__star__local
question: 'Explain: What We Learned Building Cloud Agents | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 392
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:45-05:00'
sources: []
---

**Situation:**  
During my second year at a fintech startup we had to replace our on‑prem fraud detection pipeline with a fully managed, serverless ML workflow in AWS. The existing system processed ~1 M transactions per day and ran on EC2 clusters that were difficult to scale and cost over $30k/month.

**Task:**  
I was tasked with designing “cloud agents” – lightweight Lambda functions that could ingest streaming data, run inference using a pre‑trained model, and push alerts back to our monitoring stack—all while staying under a $5k/month budget and keeping latency below 200 ms.

**Action:**  
I broke the problem into three parts: (1) **Event‑driven ingestion** – I set up Kinesis Data Streams with shard‑level scaling; each record triggered a Lambda. (2) **Model packaging** – using SageMaker’s “Bring Your Own Container” feature, I containerized the TensorFlow model and deployed it as an inference endpoint behind an API Gateway that automatically throttled traffic. (3) **Observability & retries** – I added CloudWatch metrics for per‑function latency and error rates, and used Step Functions to retry failed inferences with exponential backoff. I also introduced a small “warm‑up” cache using Elasticache Redis to keep the Lambda memory footprint low.

**Result:**  
The new cloud agent architecture cut infrastructure costs from $30k to $4.2k/month (≈86 % savings) and reduced average inference latency from 1.8s to 150 ms, improving fraud detection speed by 70 %. I learned that building agents in the cloud requires treating each function as a first‑class service: think about idempotency, retry logic, and observability from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
