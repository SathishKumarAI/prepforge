---
qid: ing_c5900a1c2b__aws__local
question: 'Explain: Now let''s say if you want to — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 466
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:46-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to design a *real‑time traffic prediction engine* for an on‑boarding project at Amazon’s Transportation division—essentially the ML core of Google Maps. The goal: deliver per‑segment congestion scores with < 2 s latency while scaling to 1 billion daily users.

**Action (A)**  
- **Data ingestion** – Use Kinesis Data Streams for live GPS & vehicle telemetry, and S3 + Glue for batch historical data.  
- **Feature store** – Store pre‑computed features in DynamoDB (latency < 10 ms) and augment on the fly with SageMaker Feature Store.  
- **Model training** – Train a gradient‑boosted tree ensemble on SageMaker Pipelines, retraining nightly from the latest 30 days of data; deploy via SageMaker Endpoint with multi‑AZ autoscaling (CPU + GPU).  
- **Inference** – Route inference requests through an API Gateway → Lambda that pulls features and queries the endpoint; results cached in ElastiCache Redis for repeat segment lookups.  
- **Observability** – CloudWatch metrics, X-Ray tracing, and a custom Dashboards to monitor latency, error rates, and model drift.

**Result (R)**  
- Reduced prediction latency from 8 s to < 2 s, improving user satisfaction by 35% (A/B test).  
- Cut inference cost by 42% through intelligent caching and spot instances.  
- Achieved 99.9% uptime over six months of production.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Fast, accurate traffic info directly enhances driver experience.  
- **Ownership & Dive Deep** – I owned the entire ML pipeline, from data prep to deployment, and iterated on performance based on real metrics.

**Bar‑raiser Takeaway**  
They expect clear ownership, deep technical justification (AWS services, scalability trade‑offs), and concrete impact numbers—exactly what this design delivers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
