---
qid: ing_878e99e230__star__local
question: 'Explain: Components in Parallel — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 346
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:03:40-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the user‑profile service that had a 99% uptime SLA. The existing single instance behind a basic reverse proxy kept crashing under load spikes, causing 15 min outages per incident.

**Task** – Build a highly available architecture that could sustain traffic spikes of up to 5× normal volume while keeping latency below 120 ms and ensuring zero data loss during fail‑over.

**Action** – I split the service into stateless API workers behind an Nginx load balancer, deployed across three availability zones. Each worker ran in a Docker container orchestrated by Kubernetes with liveness/readiness probes that checked health every second. I added an external cache layer (Redis Cluster) for session data and enabled auto‑scaling rules based on CPU usage thresholds of 70 %/30 %. To guarantee consistency, I introduced a lightweight distributed lock using etcd during critical write paths. For monitoring, I set up Prometheus alerts that triggered an automated rollback if any zone’s latency exceeded 150 ms.

**Result** – Post‑deployment, the service achieved 99.98% uptime over a 6‑month period, handled peak loads of 30k RPS without degradation, and reduced recovery time from minutes to under 15 seconds. I learned that true availability comes from combining horizontal scaling, health checks, and real‑time monitoring rather than just adding more instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
