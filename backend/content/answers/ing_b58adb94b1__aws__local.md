---
qid: ing_b58adb94b1__aws__local
question: 'Explain: Develop with agility — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 421
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:14:44-05:00'
sources: []
---

**Situation – Task**  
At my previous role I was tasked with launching a real‑time recommendation engine for an e‑commerce platform that had to process 10 M events per day while keeping latency under 200 ms. The goal was to “develop with agility” so we could iterate on models without downtime.

**Action – Technical Design**  
I designed an **event‑driven architecture** using Amazon Kinesis Data Streams for ingestion, AWS Lambda for lightweight pre‑processing, and Amazon SageMaker Pipelines for continuous model training. New feature flags were pushed to DynamoDB; a Lambda triggered by the stream checked the flag before routing data to either the “current” or the “experimental” endpoint. Model inference was served via an Elastic Inference‑accelerated SageMaker Endpoint behind API Gateway, ensuring sub‑200 ms latency.

**Result – Quantified Impact**  
Within 3 months we reduced model rollout time from weeks to days, cut infrastructure cost by **32%** (thanks to serverless compute), and increased conversion rate by **7.5%** due to more accurate recommendations. The system handled peak traffic spikes of 20× without degradation.

**Leadership Principles Highlighted**  
- **Customer Obsession** – delivered faster, higher‑quality insights directly to users.  
- **Ownership & Dive Deep** – I owned the entire pipeline and performed deep performance tuning (e.g., Lambda concurrency, Kinesis shard sizing).  

**Bar‑raiser Takeaway**  
I showed ownership by building a fully automated CI/CD for models, dove into metrics to justify each trade‑off, quantified business impact, and learned from an early failure where a mis‑scaled stream caused backpressure—resolved it by adding shards and adjusting Lambda batch size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
