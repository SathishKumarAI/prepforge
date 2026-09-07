---
qid: ing_559855057c__aws__local
question: 'Explain: HTTP Request/Response — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 442
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:39:39-05:00'
sources: []
---

**Situation / Task**  
While interviewing for an ML platform role, I was asked to explain the end‑to‑end flow of a simple HTTP GET and how we would architect it on AWS for high‑traffic ML inference serving.

**Action**  
1. **Client → Edge** – Browser resolves DNS (Route 53) and hits CloudFront CDN, which caches static assets and can short‑circuit for 404/500 errors.  
2. **Edge → API Layer** – CloudFront forwards the request to an Application Load Balancer (ALB) that runs a **Lambda@Edge** function for auth & throttling, then routes to an ECS Fargate cluster hosting a FastAPI service.  
3. **Service → Model Inference** – The container pulls the latest model from S3 via SageMaker Endpoint (`sagemaker-runtime` SDK). For low‑latency inference we keep the endpoint in *RealTime* mode; for batch we use *BatchTransform*.  
4. **Response Path** – Result is streamed back through ALB → CloudFront → browser, with optional caching of identical predictions (Cache-Control headers).

**Result**  
Implemented this pipeline for a recommendation engine:  
- 99.8 % SLA on inference latency (<120 ms).  
- Cost reduced by 35 % using Fargate spot + SageMaker endpoint autoscaling.  
- Traffic spikes handled up to 10× without manual intervention.

**Learnings**  
I discovered that **caching at CloudFront** dramatically cuts backend load, but it requires careful cache‑invalidation logic for model updates—an area I now guard with a CI/CD pipeline that publishes new S3 objects and triggers a Lambda to purge relevant paths.

---

*Leadership Principles:* **Ownership** (I drove the entire stack), **Dive Deep** (dissected each layer’s metrics), **Deliver Results** (measured SLA & cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
