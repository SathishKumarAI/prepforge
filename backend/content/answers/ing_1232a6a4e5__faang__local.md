---
qid: ing_1232a6a4e5__faang__local
question: 'Explain: Rate limiters and load shedders — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 458
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:08-05:00'
sources: []
---

**Clarify**  
We’re asked how to keep an ML‑model‑served API responsive when traffic spikes: *rate limiters* throttle requests per client, while *load shedders* drop or defer work when system resources are low. Key assumptions:  
- Stateless request handling (e.g., REST/GRPC).  
- Predictable inference latency & memory use.  
- Ability to instrument metrics and set thresholds.

**Approach**  
1. **Rate limiting layer** – per‑client or per‑IP token bucket / leaky bucket, enforced at the ingress (API gateway).  
2. **Load shedding logic** – monitor CPU/memory/queue depth; when a threshold is crossed, return 503 or enqueue with back‑off.  
3. **Graceful degradation** – cache popular predictions or switch to a lower‑accuracy model temporarily.

**Depth**  
- *Rate limiter*: Token bucket with burst size `B` and refill rate `R`. Complexity O(1) per request; storage O(N_clients).  
- *Load shedder*: Use Prometheus metrics → if CPU > 80% or queue > Q, return 503. Optional “safety‑net” – a small fast path cache.  
- *Back‑pressure*: HTTP/2 push or client‑side retry with exponential back‑off.  
Trade‑offs: stricter limits reduce over‑provisioning but hurt throughput; aggressive shedding frees resources but increases error rate.

**Edge Cases**  
- Sudden flash crowds → burst bucket may overflow; set a hard cap per IP.  
- Distributed denial of service (DDoS) → use shared rate limiter at edge CDN.  
- Model update downtime → cache fallback predictions to avoid 503 spikes.

**Optimize & Communicate**  
Start with baseline metrics, iterate thresholds in A/B tests, and document the SLA impact. Explain that a well‑tuned token bucket + dynamic load shedder keeps latency under target while preventing resource exhaustion, meeting the core FAANG expectation of balanced reliability and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
