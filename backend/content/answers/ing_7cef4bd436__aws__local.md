---
qid: ing_7cef4bd436__aws__local
question: 'Explain: Building Software Systems At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 392
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:49-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a cross‑functional team that migrated a monolithic recommendation engine from on‑prem to **AWS**. The goal was to reduce latency by 30 % and support a projected 4× user growth while keeping cost under $1 M/yr.

**Action (Dive Deep & Ownership)**  
I scoped the architecture in three layers: ingestion, feature store, inference.  
- **Kinesis Data Streams** → **Glue** for ETL into an **Amazon SageMaker Feature Store**.  
- Models were built with **SageMaker Pipelines**, trained on spot instances and deployed to **ECR + ECS Fargate** behind a **ALB**.  
- Real‑time scoring used **AWS Lambda** (≤ 200 ms) and caching via **ElastiCache Redis**.  

I wrote end‑to‑end integration tests in Python, automated CI/CD with **CodePipeline**, and set up CloudWatch dashboards to track A/B test metrics.

**Result (Deliver Results)**  
- Latency dropped from 650 ms to **420 ms** (≈ 35 % improvement).  
- Cost fell from $1.8 M/yr to **$0.9 M/yr**.  
- Production traffic grew to 2.5 M requests/day without any outages.

**Reflection & Learning**  
I realized early that **feature‑store consistency** was a hidden bottleneck; adding an **SQS FIFO queue** for feature refreshes resolved staleness issues, a lesson I’ll bring to future ML pipelines. This experience underscores my ownership mindset and data‑driven focus—key traits Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
