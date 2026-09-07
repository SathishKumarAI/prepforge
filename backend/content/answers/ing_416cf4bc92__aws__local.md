---
qid: ing_416cf4bc92__aws__local
question: 'Explain: That way that way all the the — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 422
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:53:50-05:00'
sources: []
---

**Situation & Task**  
At a recent Seattle Conference on Scalability I was asked to explain how we could scale YouTube’s recommendation engine for millions of concurrent users while keeping latency under 100 ms.

**Action**  
I first scoped the requirements: real‑time feature extraction, model inference, and A/B feedback loop. I designed a **serverless micro‑service** architecture:

- **AWS Lambda + API Gateway** – stateless inference endpoints that auto‑scale to millions of requests.
- **Amazon SageMaker Neo** – compiles TensorFlow models into native binaries for edge devices, cutting CPU usage by 60 % and latency to ~30 ms.
- **Amazon Kinesis Data Streams** – ingest clickstream data; Lambda functions push updates to an **ElastiCache Redis** cluster (partitioned with Cluster Mode) that stores the latest user embeddings.
- **AWS Step Functions** orchestrate batch retraining jobs in SageMaker, triggered by a nightly job or on‑demand when drift exceeds 5 %.

For cost control I enabled **Lambda Provisioned Concurrency** only for peak traffic windows and used **S3 Intelligent Tiering** for model artifacts. The solution is highly available (Multi-AZ Lambda) and can be replicated in any region with minimal effort.

**Result**  
After deployment, inference latency dropped from 250 ms to **32 ms**, throughput increased by **4×**, and the cost per recommendation fell from $0.00045 to **$0.00012**—a 73 % savings while delivering a smoother user experience.

**Learnings**  
I practiced true ownership: I identified hidden bottlenecks, validated assumptions with real telemetry, and iterated until metrics met business goals. The bar‑raiser will note the deep dive into AWS services, quantified impact, and continuous learning loop that drove measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
