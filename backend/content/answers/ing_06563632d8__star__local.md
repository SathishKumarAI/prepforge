---
qid: ing_06563632d8__star__local
question: 'Explain: Summary: — Load Balancing Algorithms Explained with Code (and
  Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 372
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:41:26-05:00'
sources: []
---

**Situation** – In my last role as a backend engineer at a fintech startup, our real‑time transaction API was hitting a 70 % error rate during peak hours (3–5 pm). The traffic spike exceeded the capacity of our single‑node setup and we needed to distribute requests across three new microservice instances without downtime.  

**Task** – I had to design an in‑house load balancer that could route HTTP POSTs to the healthiest instance, maintain session affinity for retryable transactions, and expose metrics for Ops. The goal was to drop error rates below 5 % while keeping latency under 120 ms.  

**Action** – I implemented a round‑robin scheduler in Go using `net/http`’s reverse proxy, augmented with a health‑check goroutine that pinged each instance’s `/healthz`. For session stickiness I hashed the customer ID into a cookie (`X-Client-ID`) and used it as the key for an LRU cache mapping to instances. I also added Prometheus metrics (`lb_requests_total`, `lb_errors_total`) and visualized them with Grafana dashboards. The code was kept lightweight so we could swap in a more sophisticated algorithm later if needed.  

**Result** – After deployment, error rates fell to 2 % and average latency dropped to 95 ms. Ops praised the clear metrics, and we were able to add a fourth node without touching the load‑balancer code. I learned how simple algorithms, when coupled with observability, can solve production bottlenecks quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
