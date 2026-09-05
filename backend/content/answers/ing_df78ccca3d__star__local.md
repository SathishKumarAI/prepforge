---
qid: ing_df78ccca3d__star__local
question: 'Explain: Terminologies/Algorithms — Loadbalancer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 331
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:40-05:00'
sources: []
---

**Situation** – In my last role I was leading a production pipeline for an image‑classification service that had to serve 20 k requests per second during peak hours. Our single GPU node started throttling, and latency spiked from 120 ms to over 800 ms.

**Task** – My goal was to keep inference latency below 200 ms while maintaining high throughput and zero data loss, all without rewriting the model code.

**Action** – I introduced a Kubernetes‑based load balancer using NGINX Ingress with an HTTP/2 backend. I configured session affinity based on user ID to preserve cache locality, set up weighted round‑robin across four GPU nodes, and added health checks that pinged the TensorFlow Serving REST endpoint every 5 s. To avoid over‑provisioning, I scripted auto‑scaling rules: if average latency exceeded 250 ms for two consecutive minutes, a new pod spun up; if it fell below 150 ms for five minutes, a pod was terminated. I also integrated Prometheus alerts to trigger manual review when error rates spiked.

**Result** – Latency dropped to an average of 140 ms and the system handled 35 k RPS during traffic surges with <0.1% error rate. The experience taught me that balancing load in ML inference is as much about smart routing policies and health monitoring as it is about raw compute capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
