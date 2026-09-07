---
qid: ing_ab627122c3__aws__local
question: 'Explain: Then how do you actually calculate the — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 521
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:53:48-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to build a real‑time traffic prediction engine for an on‑demand navigation app (similar to Google Maps). The goal was to deliver a 95 % accurate traffic delay estimate within 3 s for every route request, while keeping cost < $0.05 per request.

**Action & Design**  
I architected a **serverless ML pipeline** on AWS:

| Component | Service | Why |
|-----------|---------|-----|
| Data ingestion (vehicle GPS, road sensors) | Kinesis Data Streams + Lambda | Low latency, auto‑scaling |
| Feature store | DynamoDB + DAX cache | Sub‑millisecond read for 10M concurrent users |
| Training | SageMaker Pipelines + Spot Instances | Cost‑effective batch jobs; versioned artifacts in S3 |
| Model inference | SageMaker Endpoint (Multi‑model) + API Gateway | Zero‑downtime rollouts, 99.9 % availability |
| Real‑time scoring | Lambda@Edge on CloudFront | Edge execution reduces 50 ms latency |

I used a **gradient‑boosted tree** model (XGBoost) trained nightly on the last 30 days of data, then incrementally updated with online learning via SageMaker Neo for edge inference. To hit the 3 s SLA I added a fallback rule‑based engine that returns a cached estimate when inference latency spikes.

**Result**  
After deployment:

- **Accuracy:** 97 % correct delay predictions (measured against ground truth from traffic cameras).  
- **Latency:** Median inference time 1.8 s, 99th percentile < 3.2 s.  
- **Cost:** $0.035 per request vs the target $0.05.  
- **Scalability:** Handled 50k concurrent route requests during peak hours with zero throttling.

**Learning & Ownership**  
I took ownership of every failure point: when the first inference pipeline hit a cold‑start, I implemented warm‑up Lambda functions and adjusted instance types. I *dive deep* into CloudWatch metrics to identify the 0.5 s bottleneck in data retrieval and replaced DynamoDB with DAX, cutting latency by 30 %. This iterative loop of measuring, adjusting, and documenting is what I bring to every ML system design challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
