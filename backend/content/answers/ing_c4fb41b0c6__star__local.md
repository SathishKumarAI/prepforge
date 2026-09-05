---
qid: ing_c4fb41b0c6__star__local
question: 'Explain: Load Balancer — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 396
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:03:50-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with revamping a legacy URL‑shortening service that had started to choke under traffic spikes during product launches. Users were reporting latency over 400 ms and occasional timeouts.

**Task:**  
I needed to design an elastic, fault‑tolerant system that could handle up to 5 M requests per minute while keeping the average response below 120 ms and ensuring data consistency for redirect mappings.

**Action:**  
1. **Stateless API layer** – Built a Kubernetes deployment of lightweight Go microservices behind an NGINX ingress controller, enabling horizontal scaling via HPA based on CPU/memory metrics.  
2. **Global load balancing** – Deployed AWS Global Accelerator with health checks; it routes traffic to the nearest edge location and automatically retries failed endpoints.  
3. **Cache‑first redirects** – Integrated Redis Cluster (cluster mode) as a read‑through cache for 90 % of short URLs, reducing DB round trips.  
4. **Eventual consistency** – Used Kafka to publish “create” events; a downstream consumer writes to DynamoDB and updates the cache, ensuring durability without blocking reads.  
5. **Health & observability** – Instrumented Prometheus/Grafana dashboards; set up alerts for latency >200 ms or error rate >1%.

**Result:**  
Post‑deployment, average latency dropped from 380 ms to 95 ms, 99th percentile under 150 ms, and uptime hit 99.999%. The system handled a sudden 10× traffic surge during a marketing campaign with zero downtime. I learned that coupling stateless services with edge‑level load balancing and a cache‑first strategy is key for high‑throughput URL shorteners.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
