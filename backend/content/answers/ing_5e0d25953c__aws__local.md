---
qid: ing_5e0d25953c__aws__local
question: 'Explain: Example Response (200 OK) — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 452
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:27-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a lightweight “Spotify‑style” music streaming service for an internal hackathon. The goal: serve 10 k concurrent users in the US with <2 s latency while keeping cost < $5k/month.

**Action – System Design**  
1. **Ingestion & Catalog** – Upload files to **Amazon S3** (object storage, auto‑scaling). Metadata stored in **DynamoDB** (key‑value, single‑digit ms read).  
2. **Streaming Layer** – Use **CloudFront CDN** with Lambda@Edge for dynamic bitrate selection; this offloads 80 % of traffic from origin and guarantees <200 ms edge response.  
3. **Playback API** – Stateless **API Gateway + Lambda** (Node.js) behind an Application Load Balancer; autoscaling keeps cost tight while handling spikes.  
4. **Analytics & Recommendations** – Batch jobs on **AWS Glue** load into **Redshift**, then real‑time recommendation engine runs in **SageMaker Endpoint** (CPU instances).  
5. **Observability** – CloudWatch metrics + X-Ray traces for every request; alerts trigger auto‑scaling.

**Result**  
Simulated 10 k concurrent users: average latency 1.8 s, peak 2.4 s; cost $3,800/month (≈$0.38/user). Post‑launch A/B test showed a 12 % lift in session length and a 7 % increase in user retention.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Designed for sub‑2 s latency and adaptive bitrate to match user bandwidth.  
- **Ownership & Dive Deep** – Chose services that align cost, scalability, and resilience; iterated on the CDN configuration after profiling bottlenecks.  

Bar‑raiser cues: clear ownership of cost vs performance trade‑offs, data‑driven validation, and iterative learning from simulated load tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
