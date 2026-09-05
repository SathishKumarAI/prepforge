---
qid: ing_f432b6c09f__star__local
question: 'Explain: Preface — Why DNS Based Global Server Load Balancing (GSLB) Doesn\u2019t
  Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 389
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:36:15-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time recommendation engine that had to serve millions of users worldwide. The product team wanted to use DNS‑based GSLB so that traffic would be routed to the nearest data center and keep latency low.

**Task:**  
I was tasked with evaluating whether DNS GSLB could meet our SLA of 50 ms average response time, while also ensuring high availability and rapid failover for the ML inference cluster.

**Action:**  
I ran a series of load tests with a custom DNS resolver that introduced TTLs of 60 seconds. I measured end‑to‑end latency, request routing consistency, and failure propagation. The tests revealed that once a user’s DNS cache was populated, subsequent requests were stuck at the same data center even when that server became overloaded or failed; failover only occurred after the TTL expired. We also saw 30 % of requests hit distant regions during peak hours because DNS caching couldn’t react to real‑time load changes. I compared this with a software‑defined load balancer (e.g., Envoy + Consul) that could dynamically steer traffic based on health checks and latency metrics, achieving <10 ms variance.

**Result:**  
We migrated to a dynamic routing layer, reducing average latency from 70 ms to 48 ms and eliminating the “sticky” user experience. The experiment proved that DNS GSLB’s static caching and lack of real‑time feedback make it unsuitable for ML inference workloads where traffic patterns shift rapidly. I learned the importance of coupling load balancing with live telemetry rather than relying on coarse DNS mechanisms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
