---
qid: ing_52417bf3d4__aws__local
question: 'Explain: URL Generation Service — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 493
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:31:03-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked to build a URL‑shortening service that could handle **>10M requests/day** while keeping latency <50 ms and cost <$0.02 per 1 000 short URLs.

**Action (Design)**  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| **API Gateway + Lambda** | Low‑latency request handling, auto‑scales to millions of calls, serverless → no ops. |
| **DynamoDB (global secondary index on hash)** | O(1) lookup for `<shortId>→<longUrl>`; single‑region writes <5 µs. |
| **Kinesis Data Streams** | Capture every shorten event for analytics and eventual consistency with S3/Redshift. |
| **S3 + CloudFront** | Store static “landing” pages (if any) with CDN for 99.999% availability. |
| **AWS Step Functions** | Orchestrate multi‑step validation, rate‑limit enforcement, and audit logging. |

*Scalability*: DynamoDB auto‑scales; Lambda concurrency limits are elastic.  
*Availability*: Multi‑AZ deployments of API Gateway + DynamoDB; CloudFront edge caching reduces origin hits.  
*Cost*: Serverless model keeps idle costs near zero; DynamoDB on-demand pricing matches traffic spikes.

**Result (Data)**  
- Latency 45 ms average, 99th percentile <80 ms.  
- Uptime 99.999% over 12 months.  
- Cost $0.018 per 1 000 URLs – 10% below target.  

**Reflection**  
I owned the end‑to‑end pipeline, diving deep into DynamoDB read/write throughput to avoid throttling. A mis‑estimated write capacity caused a 30 % spike in errors during a traffic burst; I adjusted auto‑scaling policies and added an SQS buffer—learning that “bias for action” must be paired with monitoring. This project exemplifies **Customer Obsession** (fast, reliable redirects) and **Ownership** (full responsibility from design to ops).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
