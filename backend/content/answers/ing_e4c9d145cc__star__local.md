---
qid: ing_e4c9d145cc__star__local
question: 'Explain: How CDN Routing Works — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 398
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:05:16-05:00'
sources: []
---

**Situation:**  
When I joined a startup building a video‑on‑demand platform, our latency was 350 ms on average in Europe and 600 ms in Asia. The engineering lead asked me to design a CDN routing layer that could route user requests to the nearest edge server while respecting regional compliance rules.

**Task:**  
I had to create a dynamic routing service that resolved domain names to IPs, selected optimal edge nodes based on geolocation, latency, and load, and updated DNS records within seconds without manual intervention. The system also needed to support failover and handle 1 M RPS during peak hours.

**Action:**  
I implemented a lightweight microservice in Go that queried an internal KV store (Redis) for node metadata—IP, region, health status, and current traffic. It used the MaxMind GeoIP database to map client IPs to regions and ran a round‑robin weighted algorithm per region. For DNS updates I leveraged AWS Route 53’s “health checks” and “weighted routing” API, pushing TTL‑1 records so changes propagated within seconds. To keep latency low, the service cached lookups in a local LRU cache and refreshed every 10 s. I added health‑check probes that marked nodes unhealthy after three consecutive failures, triggering automatic rerouting.

**Result:**  
After deployment, average end‑to‑end latency dropped to 120 ms globally, and we saw a 30 % reduction in server load spikes during peak times. The system handled 1.2 M RPS with <0.5 % error rate. I learned that combining geolocation with real‑time health metrics and low‑TTL DNS is key for resilient CDN routing at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
