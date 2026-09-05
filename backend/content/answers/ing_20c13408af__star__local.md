---
qid: ing_20c13408af__star__local
question: 'Explain: Load Balancer — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 357
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:02-05:00'
sources: []
---

**Situation** – In early 2023 I joined the infrastructure team at a fast‑growing URL‑shortening startup, TinyURL. Our traffic spiked from 4 M to 12 M hits per day after a viral marketing campaign, and the single‑instance Flask app was throttling at 200 req/s, causing latency to climb above 300 ms.

**Task** – I had to design a scalable, fault‑tolerant load‑balancing layer that could distribute traffic across multiple stateless microservices while keeping session affinity for analytics. The goal: keep response time under 100 ms and handle 20 k req/s during peak bursts.

**Action** – I implemented an Nginx reverse proxy with HAProxy as the primary LB, using round‑robin plus least‑conn algorithms. I added a sticky‑session cookie backed by Redis to route analytics calls to the same backend instance. To auto‑scale, I hooked Kubernetes Horizontal Pod Autoscaler (HPA) on CPU usage and integrated Prometheus metrics for request latency. For zero‑downtime deployments, I set up canary releases via Istio sidecars, monitoring 5xx rates in real time.

**Result** – Within two weeks the average latency dropped to 75 ms, throughput increased to 25 k req/s, and 99.9% availability was maintained during a 48‑hour traffic spike. I learned that combining stateless design with intelligent session persistence can deliver both performance and resilience in a high‑volume URL service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
