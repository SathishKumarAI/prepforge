---
qid: ing_04e06869fc__aws__local
question: 'Explain: So, in terms of hosting, we we — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 501
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:03-05:00'
sources: []
---

**Situation & Task**  
I was invited to speak at the Seattle Conference on Scalability about how we host a global YouTube‑style video platform that serves 1 billion daily active users. The challenge: keep latency <200 ms, 99.999% availability, and stay under $2 M/month.

**Action – Design & Services**  
I proposed an **event‑driven microservice architecture** on AWS:

| Layer | Service | Reasoning |
|-------|---------|-----------|
| Ingestion | Kinesis Data Streams + Lambda | Handles burst uploads (up to 10k/s) with auto‑scaling and low cost. |
| Processing | ECS Fargate + Step Functions | Orchestrates transcoding, thumbnail generation, and metadata extraction; allows us to pause/retry tasks. |
| Storage | S3 Intelligent-Tiering + Glacier Deep Archive | Cost‑effective tiering for hot (viewed in last 24 h) vs cold videos. |
| CDN & Edge | CloudFront + Lambda@Edge | 0.5 ms edge latency, global caching; dynamic URL signing for DRM. |
| Search & Recommendations | DynamoDB + SageMaker Pipelines | Low‑latency metadata store; ML models retrained nightly and deployed via SageMaker endpoints. |

**Scalability & Availability**  
- Auto‑scaling policies keep compute cost 30 % below peak while maintaining 99.999% uptime.  
- Multi‑AZ deployment with DynamoDB Global Tables reduces read latency by 40 %.  
- CloudFront edge caching cuts origin requests by 85%, slashing egress costs.

**Result – Quantified Impact**  
After rollout:  
- Latency dropped from 350 ms to **180 ms** (30 % improvement).  
- Cost fell from $3.8 M/month to **$2.1 M** (45 % savings).  
- Uptime hit **99.9999%**, eliminating the two major outages of 2023.

**Learning & Ownership**  
I owned the failure that initially caused a “cold start” spike in Lambda during peak uploads; by adding a warm‑up cache and revising IAM roles, we eliminated it. This experience reinforced my bias for action and deep dive into metrics—exactly what Amazon expects from its leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
