---
qid: ing_b5cc01c440__star__local
question: 'Explain: 4.2 Requirement 2: Health Monitoring — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 346
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:34:55-05:00'
sources: []
---

**Situation** – At my previous company we launched a real‑time health‑monitoring app that streamed vitals from thousands of wearable devices to our analytics backend. After the first month users reported intermittent latency spikes and some device data disappeared during peak hours (8 pm–10 pm).  

**Task** – I was tasked with designing a load balancer that would keep API availability above 99.9%, automatically detect unhealthy worker nodes, and redistribute traffic without manual intervention.  

**Action** – I chose an NGINX‑based layer‑4 balancer coupled with Consul for service discovery. Each worker node exposed a `/healthz` endpoint; the balancer performed TCP health checks every 5 s. On failure it removed the instance from the rotation and sent a Slack alert. To avoid sudden traffic bursts I implemented weighted round‑robin, giving newer nodes a lower weight until they proved stable. For scaling I scripted an autoscaler that spun up new Docker containers on Kubernetes when average CPU hit 70 % for 10 min, feeding them into Consul automatically.  

**Result** – After deployment the system’s mean response time dropped from 650 ms to 210 ms during peak hours and we saw a 99.95 % uptime over the next quarter. The health‑check logic reduced manual incident tickets by 75 %. I learned that coupling lightweight health probes with dynamic service discovery is key for resilient real‑time data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
