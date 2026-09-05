---
qid: ing_72cb272ecf__star__local
question: 'Explain: Step 4: Scale the design — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 409
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:17:18-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with redesigning our recommendation engine for a social media app that had just hit 10 million daily active users. The existing prototype, built in a single‑node Flask service, could only serve about 500 requests per second before the latency spiked past 300 ms.

**Task**  
I needed to scale the system so it could handle 50 k RPS with sub‑200 ms latency while keeping cost under $5k/month and ensuring easy rollbacks for new model versions.

**Action**  
1. **Micro‑service decomposition** – split the monolith into three services: ingestion, feature store, and inference, each containerized with Docker and orchestrated by Kubernetes.  
2. **Stateless inference pods** – deployed using a GPU‑enabled node pool; added an autoscaler that spun up to 20 replicas based on CPU > 70% or request queue length > 200.  
3. **Feature cache layer** – used Redis with TTL of 10 s for high‑frequency user attributes, reducing database hits by 80%.  
4. **Model versioning pipeline** – built a CI/CD flow that pushed new TensorFlow models to S3 and automatically updated the inference service via sidecar containers, allowing blue/green deployments.  
5. **Observability & throttling** – instrumented with Prometheus/Grafana for latency metrics and implemented request‑rate limiting per user ID to prevent abuse.

**Result**  
The system now handles 70 k RPS with average latency of 140 ms under peak load, a 14× increase in throughput. Monthly cloud spend dropped from $12k to $4.5k thanks to efficient autoscaling and cache usage. I learned that early decomposition into stateless services and aggressive caching are key to scaling ML inference at social‑media scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
