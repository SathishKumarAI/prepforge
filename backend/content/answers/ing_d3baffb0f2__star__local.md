---
qid: ing_d3baffb0f2__star__local
question: 'Explain: Pattern 1: Load Balancer with Multiple Backends'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 307
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:03-05:00'
sources: []
---

**Situation** – At my last company we had a web‑app that served both public API calls and internal microservices. The traffic was spiking during product launches, and our single backend server kept hitting 95 % CPU, causing latency to double.

**Task** – I needed to design a scalable, fault‑tolerant architecture that could absorb sudden load surges while keeping response times under 200 ms for 99 % of requests.

**Action** – I introduced an NGINX/HAProxy load balancer in front of three identical backend instances. The LB used least‑connections routing and health‑checks on `/healthz`. We also added sticky sessions via cookies for stateful flows and set up a rolling deployment pipeline so new code could be pushed to one instance at a time without downtime. To monitor, I wired Prometheus metrics into Grafana dashboards, alerting when any backend’s response time exceeded 300 ms.

**Result** – After launch, traffic hit 10k requests per second with no single‑point bottlenecks; CPU averaged 45 % across instances and latency stayed below 180 ms for 99.5 % of calls. I learned that a simple LB + replicated backends can solve scaling problems if paired with health checks, sticky sessions, and real‑time observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
