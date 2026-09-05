---
qid: ing_625add6186__star__local
question: 'Explain: 4.2 Requirement 2: URL Redirection — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 358
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:49-05:00'
sources: []
---

**Situation:**  
In my previous role at a SaaS analytics startup, we launched a marketing campaign that required a custom branded URL shortener for our partners. The traffic spike exceeded 10 k requests per second and the existing third‑party service was cost‑prohibitive.

**Task:**  
I had to design an in‑house URL shortener that could handle high request rates, guarantee 99.9% uptime, keep latency under 20 ms, and support custom aliases while preventing abuse (spam, DDoS).

**Action:**  
I chose a distributed key‑value store (Cassandra) for persistence and Redis as an in‑memory cache to hit hot URLs. The short ID was generated with a base‑62 encoder of a UUIDv4 hash, ensuring uniqueness and minimal collision risk. I added rate limiting per IP via token bucket, and integrated a CAPTCHA step after 5 failed redirects to mitigate bot abuse. For routing, I used NGINX with Lua scripts that first checked Redis, then fell back to Cassandra if miss, updating the cache on every hit. Load balancing was handled by Kubernetes Horizontal Pod Autoscaler based on CPU/memory metrics.

**Result:**  
The system handled 15 k RPS with <18 ms latency and sustained 99.97% uptime during a two‑week campaign. Custom alias usage grew by 35%, and the in‑house cost dropped from $2,500/month to under $300. I learned how trade‑offs between cache hit ratio and consistency affect real‑time redirect performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
