---
qid: ing_79253a7a8f__aws__local
question: 'Explain: Common Layers and Services — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 511
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:07-05:00'
sources: []
---

**Situation – Task**  
I led a project to expose our ML inference pipeline as a *client‑server* API for the mobile app team. The goal was 99.9 % uptime and <200 ms latency while keeping costs under $2k/month.

**Action – Design & Execution**  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **Client SDK (iOS/Android)** | AWS Amplify + Cognito | Auth, lightweight REST/GraphQL client |
| **API Gateway** | Amazon API Gateway (REST) | Throttling, caching, built‑in security |
| **Compute** | Lambda + SageMaker Endpoint | Serverless for burst traffic; dedicated endpoint for heavy inference |
| **Model Storage** | S3 + EFS (for temp data) | Durable model artifacts, fast read |
| **Orchestration** | Step Functions | Handles multi‑step inference: preprocess → predict → postprocess |
| **Observability** | CloudWatch + X-Ray | Latency traces, error metrics |

*Scalability*: API Gateway auto‑scales; Lambda scales to 10k concurrent invocations. SageMaker endpoint uses *Multi‑Model* hosting with 2 GPU instances (p3.2xlarge) for high throughput.

*Availability*: Deploy endpoints in two AZs, use Route 53 health checks + failover. Use S3’s cross‑region replication for model redundancy.

*Cost*: With 1M invocations/month and 5 GB inference data, projected bill ≈ $1,750/month—below target.

**Result – Impact**  
Latency dropped from 1.2 s to **0.18 s** (90% reduction). Uptime hit **99.97 %**, surpassing SLA. Mobile adoption grew by **35 %** in Q4, driving $120k incremental revenue.

**Reflection – Bar‑raiser Insight**  
I owned the end‑to‑end pipeline, *dive deep* into cold‑start latency (identified Lambda init as bottleneck), and iterated with A/B tests. Learned that prewarming Lambdas via scheduled invocations cuts start‑up time—added this to CI/CD. This experience reinforced **Ownership** and **Dive Deep**, aligning perfectly with Amazon’s culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
