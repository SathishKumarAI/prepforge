---
qid: ing_77e66be98c__aws__local
question: 'Explain: Step 1 - Cassandra — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 376
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:30-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I was tasked with exposing a high‑throughput recommendation API for a mobile shopping app that had to serve 200 k concurrent users during peak sales. The data store was Cassandra; the service needed <50 ms latency and 99.9 % availability.

**Action (A)**  
I rewrote the Go microservice using **gocql v2**, added connection pooling, and implemented a read‑through cache with **Redis** to hit hot keys first. To guarantee consistency I used Cassandra’s lightweight transactions for writes and introduced a **materialized view** for denormalised lookup tables. For scaling I deployed the service on **AWS Fargate** behind an Application Load Balancer, auto‑scaling based on CPU/memory thresholds. Monitoring was handled by CloudWatch + Prometheus; alerts were set for latency >45 ms.

**Result (R)**  
After deployment we saw:
- Latency drop from 120 ms to **35 ms average** (≈70 % improvement).  
- Throughput increased from 5 k rps to **12 k rps** without additional nodes.  
- Cost savings of ~30 % by leveraging Fargate’s pay‑per‑second model versus EC2.

**Learning & Ownership**  
I documented the design in an internal “Cassandra Best Practices” whitepaper and mentored two junior engineers, which reduced onboarding time by 40 %. The experience reinforced that **Ownership + Dive Deep**—understanding both Cassandra internals and Go concurrency—drives measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
