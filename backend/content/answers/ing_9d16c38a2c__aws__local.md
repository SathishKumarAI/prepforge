---
qid: ing_9d16c38a2c__aws__local
question: 'Explain: have a subscriber service that is called'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 413
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:20:04-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of a real‑time *subscriber engagement* microservice that fed into our recommendation engine. The old polling‑based system hit 20 % CPU saturation during peak traffic (≈ 120k requests/second) and had an SLA drift of 4 s, hurting conversion rates.

**Action**  
I owned the solution:  
1. **Dive Deep** – instrumented with CloudWatch metrics, identified a hot spot in the data enrichment pipeline.  
2. Designed an event‑driven architecture using **Amazon Kinesis Data Streams** to buffer subscriber updates and **AWS Lambda** for stateless enrichment.  
3. Deployed **Amazon DynamoDB** (global tables) as a fast, scalable cache for user preferences, eliminating the blocking DB call.  
4. Added **Amazon SageMaker Endpoint** that scores each update in real time; predictions are cached in ElastiCache Redis for 5 s to reduce latency.  
5. Implemented *Feature Flag* toggles via AWS AppConfig so we could roll out the new flow gradually.

**Result**  
- Latency dropped from 4 s to **0.9 s** (90 % improvement).  
- CPU utilization fell below 15 %, freeing resources for other services.  
- Conversion rate rose by **12 %**, translating to an additional $1.8M/month in revenue.  
- Cost of the new stack was 18 % lower than the legacy monolith due to serverless compute and auto‑scaling.

**Reflection**  
I learned that *ownership* means iterating on every layer, not just the surface. By quantifying impact (latency, CPU, revenue) I could persuade stakeholders to invest in a more scalable, cost‑effective solution—exactly what AWS leadership expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
