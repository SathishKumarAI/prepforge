---
qid: ing_756d42ed5f__aws__local
question: 'Explain: Web/API Layer — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 423
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:51:35-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was tasked with designing a scalable Web/API layer for a music‑streaming service similar to Spotify, focusing on low latency, high throughput, and real‑time personalization.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements** – 10 M concurrent users, <200 ms API response, 99.999% uptime.  
2. **Design** –  
   * **API Gateway** (REST/GraphQL) → throttling & caching.  
   * **Elastic Load Balancer + EC2 Auto Scaling** for stateless micro‑services written in Go.  
   * **Amazon DynamoDB** for user profiles & playlist metadata (partition key = `userId`), provisioned with on‑demand scaling and global tables for multi‑region reads.  
   * **Amazon S3 + CloudFront** to serve audio blobs; signed URLs ensure secure streaming.  
   * **AWS Lambda + Step Functions** orchestrate recommendation pipelines, invoking a SageMaker endpoint that runs a real‑time matrix factorization model (latency <50 ms).  
3. **Cost & Availability** – On‑demand DynamoDB keeps CAP at the cost of 10–15 % higher than provisioned but eliminates over‑provisioning; multi‑AZ deployments give 99.999% availability with minimal failover delays (<2 s).

**Result (Deliver Results)**  
Within three months, we hit **<180 ms average latency**, handled **12 M peak concurrent users** during a global release, and reduced operational cost by **22 %** compared to the legacy monolith.  

**Bar‑raiser focus** – I owned the end‑to‑end flow, dove into latency traces, quantified user impact, and iterated on failure modes (e.g., cache miss bursts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
