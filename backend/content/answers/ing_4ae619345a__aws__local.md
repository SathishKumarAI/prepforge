---
qid: ing_4ae619345a__aws__local
question: 'Explain: High Level Architecture — Zuluapigateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 456
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:14:34-05:00'
sources: []
---

**Situation & Task**  
In my last role I owned the end‑to‑end ML inference platform for a fintech product that needed to serve 200k concurrent requests per day with <50 ms latency. The team had no dedicated API layer, so we built **ZuluAPI Gateway**—a lightweight, serverless gateway that routes traffic to multiple SageMaker endpoints and caches results.

**Action & Design**  
* **Front‑end** – Amazon API Gateway (REST) with custom authorizers (JWT).  
* **Routing** – AWS Lambda@Edge checks the `model_type` header and forwards to the correct SageMaker endpoint via the Runtime API.  
* **Caching** – ElastiCache‑Redis (cluster mode) stores the last 10k predictions, reducing SageMaker invocations by ~70 %.  
* **Observability** – CloudWatch metrics (`Latency`, `ErrorRate`) feed into a Grafana dashboard; alerts trigger auto‑scaling of Lambda concurrency.  
* **Cost/Scalability** – Serverless eliminates idle capacity; we hit $0.02 per 1,000 invocations vs. $0.12 for dedicated EC2 inference nodes.  

**Result**  
Latency dropped from 180 ms to 42 ms (70 % improvement). Traffic grew 150 % in six months while keeping cost <15 % of the legacy architecture. The platform now supports multi‑model routing with zero downtime deployments.

**Leadership Principles Highlighted**  
* **Ownership** – Took full responsibility for reliability and cost.  
* **Dive Deep** – Analyzed CloudWatch traces to pinpoint latency bottlenecks; iterated on cache size until hitting sweet spot.  

Bar‑raiser focus: clear ownership, data‑driven impact, deep technical reasoning, and learning loop (e.g., moving from EC2 to serverless after profiling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
