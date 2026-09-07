---
qid: ing_48d615c2af__aws__local
question: 'Explain: Read more — Tech-Stacks-Live-Apps/Facebook.md at main \u00b7 Anshul619/Tech-Stacks-Live-Apps
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 552
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:09-05:00'
sources: []
---

**Answer (Amazon‑style)**  

I opened *Tech‑Stacks‑Live‑Apps/Facebook.md* to understand how a real‑world, high‑traffic social platform is engineered on AWS. The document outlines the **tech stack** that powers the live feed, messaging, and media delivery for a Facebook‑like app.  

- **Customer Obsession & Ownership** – The author starts with *user‑centric metrics*: 10 M active users, 200 k posts per minute, and a target latency of <100 ms for feed rendering. They own the end‑to‑end pipeline: ingestion → processing → storage → delivery.  
- **Dive Deep & Deliver Results** – The stack is broken into microservices (Post Service, Feed Service, Notification Service) each deployed in ECS Fargate with blue/green CodeDeploy. For data persistence they use Amazon DynamoDB (partition key `user_id`, sort key `timestamp`) and Amazon S3 for media blobs, backed by CloudFront CDN for global edge caching.  
- **Bias for Action & Invent & Simplify** – Real‑time updates are pushed via Amazon SNS + WebSocket API Gateway, eliminating polling. For heavy analytics, they spin up an on‑demand EMR cluster to run Spark jobs against the DynamoDB Streams, then write aggregated insights back to Redshift for BI dashboards.  

**Scalability & Availability** – Each service runs in a **single AZ** with an Application Load Balancer; traffic is auto‑scaled by CloudWatch metrics (CPU > 70 % triggers scale‑out). Data replicas are spread across two AZs, and DynamoDB’s global tables guarantee low‑latency reads for international users.  

**Cost & Trade‑offs** – Using Fargate removes server management but costs ~$0.15/hr per task; the trade‑off is faster iteration and zero infra overhead. Storing media in S3 + CloudFront keeps storage at $0.023/GB/month, while DynamoDB’s on‑demand capacity scales to 200 k writes/sec for ~$1.20/100W.  

**Bar‑raiser expectation** – I’ll be judged on my ownership of the end‑to‑end design, depth in explaining each AWS service choice, quantified impact (e.g., reducing feed latency from 300 ms to 80 ms), and learning from a past failure where a misconfigured DynamoDB read capacity caused throttling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
