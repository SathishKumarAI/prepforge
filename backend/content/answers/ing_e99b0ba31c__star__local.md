---
qid: ing_e99b0ba31c__star__local
question: 'Explain: Least connection method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 318
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:20-05:00'
sources: []
---

**Situation** – At my previous company we launched a real‑time recommendation engine that served millions of users per day. Our front‑end had four identical Node.js instances behind an NGINX load balancer, but traffic spikes during product launches were causing the “service unavailable” errors for about 12 % of requests.

**Task** – I was tasked with redesigning the load balancing strategy so that each request would be routed to a server with the fewest active connections, thereby smoothing out the sudden influx and keeping latency below 200 ms.

**Action** – I switched NGINX from the default round‑robin to the least‑connection module. I also added a small Lua script to periodically query each backend’s current connection count via the `ngx.var.connections` variable and updated a shared dictionary used by the balancer. To avoid race conditions, I set a 100 ms jitter between probes. I then configured health checks on port 8080 with a 2‑second timeout so that failed nodes were automatically removed from rotation.

**Result** – After deployment, average response time dropped from 280 ms to 165 ms and error rates fell below 1 %. The system handled a 3× traffic spike during the launch without any manual intervention. I learned that coupling least‑connection logic with real‑time metrics can dramatically improve reliability in bursty workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
