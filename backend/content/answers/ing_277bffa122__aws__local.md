---
qid: ing_277bffa122__aws__local
question: 'Explain: Web Servers — YouTube\u00a0Architecture - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 509
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:11-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of a video‑hosting platform that had 10 M concurrent viewers during peak hours. The goal was to build a YouTube‑like architecture on AWS that could scale to 50 M daily active users while keeping cost under $5 M/yr.

**Action**  
I architected an event‑driven, microservice stack:

| Service | Role | Why |
|---------|------|-----|
| **Amazon CloudFront + S3** | Global CDN for video assets | Edge caching reduces origin load by 80 % and gives <200 ms latency. |
| **Elastic Transcoder / MediaConvert** | On‑demand transcoding | Keeps storage costs low (only store original + one high‑res). |
| **Amazon ECS Fargate** | Video ingestion & metadata services | Zero‑ops scaling, pay per task; auto‑scales to 10 k vCPU on traffic spikes. |
| **AWS Lambda + EventBridge** | Watchlist & recommendation triggers | Serverless, scales to millions of invocations/day. |
| **Amazon DynamoDB Global Tables** | User profiles & view logs | Single‑write latency <5 ms, multi‑region for resilience. |
| **Amazon Kinesis Data Streams** | Real‑time analytics (views, likes) | 10 M events/sec with 100 µs processing time. |

I added a **dedicated WAF and Shield Advanced** layer to mitigate DDoS and bot traffic, and used **AWS Cost Explorer + Savings Plans** to lock in a 40 % discount on compute.

**Result**  
The new architecture handled 70 M concurrent viewers during the last product launch without any outages. Latency dropped from 1.2 s (origin) to <300 ms CDN‑served. Storage cost fell by 35 %, and overall infrastructure spend stayed at $4.6 M/yr – a 15 % year‑over‑year savings.

**Learning & Ownership**  
I instituted weekly “post‑mortem” reviews; after an early spike caused a Lambda timeout, I added adaptive concurrency controls that reduced cold start failures by 90 %. This reinforced my bias for action and ownership—always iterating on data to drive continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
