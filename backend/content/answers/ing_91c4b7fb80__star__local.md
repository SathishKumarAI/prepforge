---
qid: ing_91c4b7fb80__star__local
question: 'Explain: with one server that is probably this — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 345
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:13-05:00'
sources: []
---

**Situation:**  
At my previous company we had to build an on‑demand delivery platform similar to Uber Eats. The product team required real‑time matching between riders and customers with 99% availability, while keeping latency under 150 ms.

**Task:**  
Design a scalable architecture that handles millions of requests per day, supports dynamic pricing, and can roll out new ML models for demand forecasting without downtime.

**Action:**  
I chose a microservices stack: API Gateway (NGINX) → Node.js routing service → Kafka queue → Go‑based matchmaker. For state I used Redis for session caching and PostgreSQL for durable orders. Demand prediction was served by a TensorFlow model hosted on Kubernetes, updated nightly via an A/B testing pipeline. To ensure zero‑downtime deployments, I implemented canary releases with Istio sidecar proxies, monitoring latency through Prometheus and alerting in Grafana.

**Result:**  
The system handled 3 M requests/day with <140 ms average latency; rider‑to‑customer matching accuracy improved by 12% thanks to the ML model. Uptime hit 99.97%, and we reduced server cost by 18% by auto‑scaling Kafka consumers based on queue depth. I learned that marrying real‑time streaming with containerized ML inference is key for high‑scale ride‑hailing services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
