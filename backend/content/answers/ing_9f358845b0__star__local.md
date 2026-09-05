---
qid: ing_9f358845b0__star__local
question: 'Explain: Step 3: Authentication & Authorization — What is an API Gateway?
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 312
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:50:35-05:00'
sources: []
---

**Situation:**  
I was leading the deployment of a real‑time fraud detection model for a fintech client. The model was exposed as a REST service behind our Kubernetes cluster, but each microservice had its own auth logic, causing duplicated code and inconsistent rate limits.

**Task:**  
Implement a single entry point that handled authentication, authorization, request throttling, and logging so the ML inference API could be consumed securely by both internal dashboards and external partners.

**Action:**  
I chose Kong as our API Gateway because of its plugin architecture. I configured JWT validation to accept tokens issued by the company’s IdP, then used the ACL plugin to whitelist partner IP ranges. For rate limiting, I set a 500 req/min per client policy and enabled caching for identical inference requests. I also added a custom request‑transform plugin that injected feature‑store metadata into each call, reducing downstream lookups. Finally, I exposed Prometheus metrics from Kong for observability.

**Result:**  
Within two weeks the gateway was live; we saw a 30 % drop in unauthorized access attempts and a 25 % reduction in latency due to caching. The client praised the unified auth model, and I learned how gateway plugins can offload cross‑cutting concerns from ML services, keeping models lean and fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
