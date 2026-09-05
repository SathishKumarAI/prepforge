---
qid: ing_47e3d25ee1__star__local
question: 'Explain: Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 344
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:13-05:00'
sources: []
---

**Situation** – In my last role, our e‑commerce platform was hitting a traffic spike of ~120k requests per second during flash sales, and the single application server started to time out, causing cart abandonment rates to jump from 2% to 9%.  
**Task** – I needed to design a highly available, low‑latency load balancer that could evenly distribute traffic across our stateless microservices, support sticky sessions for checkout, and provide health checks without adding significant overhead.  
**Action** – I chose a hybrid approach: an NGINX front‑end with HAProxy in the background. NGINX handled TLS termination and initial routing; HAProxy performed weighted round‑robin distribution based on real‑time CPU/memory metrics exposed via Prometheus. For sticky sessions, I implemented consistent hashing on the user ID stored in a signed JWT, ensuring users stayed on the same backend during checkout. I added a health‑check endpoint (`/healthz`) that returned 200 only when all dependent services were up, and configured HAProxy to remove unhealthy nodes after three consecutive failures. We also set up a circuit breaker in Go to back‑off under sustained overload.  
**Result** – After deployment, request latency dropped from 350 ms to 80 ms during peak periods, the cart abandonment rate fell back below 3%, and we saw a 40% reduction in server CPU usage. I learned that combining TLS offloading, dynamic weight balancing, and consistent hashing gives both performance and resilience without over‑engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
