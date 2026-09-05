---
qid: ing_a4440116a5__star__local
question: 'Explain: System design interview questions with solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 350
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:57-05:00'
sources: []
---

**Situation:**  
During my senior‑year capstone, our team was tasked with building a real‑time recommendation engine for an e‑commerce startup that expected 500 k active users daily. The product manager insisted the system must handle peak traffic without lagging and support A/B testing of different ML models.

**Task:**  
Design a scalable architecture that delivers predictions in under 200 ms, allows rapid model iteration, and can be monitored for drift—all while keeping cost under $5K/month.

**Action:**  
I started by sketching a microservices layout: a REST API gateway (NGINX) feeding into a stateless inference service written in FastAPI, backed by a Redis cache for feature lookups. For model serving I chose TensorFlow Serving, containerized via Docker and orchestrated with Kubernetes; autoscaling was tied to CPU/memory thresholds. To support A/B testing, I added a lightweight “model‑router” that directed traffic based on request headers, storing predictions in PostgreSQL for later analysis. Monitoring came from Prometheus/Grafana dashboards, and drift alerts were triggered by comparing feature distributions against baseline statistics.

**Result:**  
The prototype handled 750 k concurrent requests with <180 ms latency, staying within the budget ($3.8K/month). The A/B framework reduced model rollout time from weeks to days, and we detected a drift event early, preventing a potential revenue dip. I learned that clear separation of concerns—API, caching, inference, monitoring—is key to building maintainable ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
