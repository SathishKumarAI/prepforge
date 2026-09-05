---
qid: ing_b8261a0483__star__local
question: 'What is Service Discovery? — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 314
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:45-05:00'
sources: []
---

**Situation** – In a recent project I led the migration of our recommendation engine from a monolith to a micro‑service architecture on Kubernetes. The system had to serve millions of users per day, but each user’s profile was built by dozens of independent services (feature extraction, model inference, A/B testing).  

**Task** – I needed to ensure that every service could reliably locate and communicate with the others without hard‑coding endpoints, while still maintaining high availability during rolling upgrades.  

**Action** – I introduced a lightweight service discovery layer using Consul for DNS‑based resolution combined with Istio’s sidecar proxy for traffic management. Each micro‑service registered itself with Consul on startup, publishing health checks and version tags. In the codebase we replaced static URLs with `consul.service-name:port` patterns; the sidecar handled retries, circuit breaking, and weighted load balancing. We also added a fallback cache in each service to handle brief Consul outages, preventing cascading failures.  

**Result** – After deployment, inter‑service latency dropped by 27 % (from 350 ms to 255 ms) and the system’s uptime improved from 99.6 % to 99.98 %. I learned that combining a robust discovery mechanism with traffic management can dramatically increase resilience in large ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
