---
qid: ing_6ce5fbb189__aws__local
question: 'Explain: Production Practices — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 425
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:10-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the rollout of a global ML inference platform that served personalized recommendation models to 70 M daily users. The latency requirement was < 200 ms for 99th percentile, and we had to keep cost under $5 M/month. I decided to expose model predictions via a CDN‑backed edge architecture.

**Action / Design**  
1. **Edge Cache & Model Versioning** – I used Amazon CloudFront with Lambda@Edge to inject the correct model version ID into each request, and S3 object tags to store serialized model artifacts (≈ 200 MB).  
2. **Dynamic Inference API** – Origin was an Application Load Balancer pointing to a fleet of ECS Fargate tasks running TensorFlow Serving. Autoscaling was driven by CloudWatch metrics (`CPUUtilization`, `ModelLatency`).  
3. **Cache‑Aside Strategy** – Frequently requested feature vectors were cached in Amazon ElastiCache Redis at the edge (TTL = 5 min) to avoid redundant model calls for cold users.  
4. **Observability & Rollback** – CloudWatch dashboards tracked cache hit ratio, inference latency, and error rate; a simple CI/CD pipeline with Canary deployments allowed instant rollback if latency spiked.

**Result**  
- Latency dropped from 350 ms (origin‑only) to < 120 ms at the edge, improving conversion by **12%**.  
- Cache hit ratio reached **78%**, cutting inference requests by 60 %, saving ~\$1.2 M/month.  
- Deployment time for new model versions shrank from 3 hrs to 15 min (Bias for Action).  

**Learning & Ownership**  
I discovered that mis‑tagging S3 objects caused a sudden cache miss spike; I automated tag validation in the CI pipeline, preventing future regressions. This reinforced my ownership mindset and deep dive into the edge‑to‑origin data flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
