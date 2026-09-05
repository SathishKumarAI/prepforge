---
qid: ing_adcf74439a__star__local
question: 'Explain: High Availability — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 382
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:19:43-05:00'
sources: []
---

**Situation:**  
During my last role at a fintech startup, we launched a real‑time fraud detection model that processed millions of transactions per day. Two weeks after go‑live, our monitoring dashboards flagged 3 % latency spikes and occasional outages during peak traffic.

**Task:**  
I had to design a high‑availability architecture that would keep the inference service running with <0.5 s latency, even under sudden load surges or node failures, while keeping costs under our $20K/month budget.

**Action:**  
1. Implemented **auto‑scaling** on Kubernetes using custom metrics (CPU + request rate).  
2. Deployed a **gRPC microservice** behind an NGINX ingress with weighted round‑robin and health checks.  
3. Added **caching** of the most frequent feature vectors in Redis, reducing DB hits by 70 %.  
4. Introduced **canary releases** with traffic splitting (5/95) to roll out model updates safely.  
5. Configured **Circuit Breaker** patterns via Hystrix to prevent cascading failures.  
6. Added a **dead‑letter queue** in Kafka for failed predictions, enabling reprocessing without blocking the pipeline.

**Result:**  
Latency dropped from 1.2 s to 0.38 s during peak hours; uptime rose to 99.97 %. The new architecture also cut inference costs by 15 % and gave us a clear audit trail for model rollbacks. I learned that balancing real‑time performance with fault tolerance often means layering simple, proven patterns rather than chasing exotic solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
