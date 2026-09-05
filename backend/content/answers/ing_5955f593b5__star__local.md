---
qid: ing_5955f593b5__star__local
question: 'Explain: based load balancing and in the layer — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 384
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:32-05:00'
sources: []
---

**Situation** – In my last role as a platform engineer at a ride‑hailing startup, we were hitting 95 % CPU on our dispatch microservice during peak hours (7–9 am and 5–7 pm). The latency spike was driving up cancellations by ~12 %.  
**Task** – I had to design a scalable load‑balancing layer that could route requests based on real‑time vehicle availability, geographic proximity, and user priority while keeping end‑to‑end latency under 120 ms.  
**Action** – I chose Envoy as the edge proxy because of its native support for HTTP/2, rate limiting, and Lua filters. Using Kubernetes’ Ingress controller, I exposed multiple dispatch pods behind a weighted round‑robin load balancer. To achieve geographic routing, I added a custom Envoy filter that queried our Redis cache (populated by a Kafka consumer from the vehicle telemetry stream) to fetch nearest vehicles within 5 km and forwarded only those requests to the closest pod. I also implemented a “hot‑spot” detection algorithm that temporarily spun up additional pods when traffic in a city exceeded 300 RPS, scaling automatically via HPA.  
**Result** – After rollout, CPU utilization dropped from 95 % to 55 %, request latency fell from 250 ms to 80 ms, and cancellation rates decreased by 18 %. I learned that coupling real‑time data stores with edge proxies can turn a monolithic bottleneck into a horizontally scalable, low‑latency service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
