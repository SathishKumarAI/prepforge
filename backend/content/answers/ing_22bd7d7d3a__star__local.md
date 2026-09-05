---
qid: ing_22bd7d7d3a__star__local
question: 'Explain: High-Level Design — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 352
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:38:38-05:00'
sources: []
---

**Situation** – In my last role I was tasked with scaling our real‑time analytics pipeline that ingested sensor data from 12,000 IoT devices. The existing single‑node queue broker kept dropping packets during peak hours, causing a 35 % drop in processed events.

**Task** – My goal was to design a high‑availability load balancer that could distribute incoming HTTP/HTTPS requests across multiple stateless workers while ensuring zero data loss and sub‑200 ms latency.

**Action** – I chose NGINX Plus for its built‑in health checks and sticky session support. I implemented a round‑robin algorithm with a weighted least connections fallback to handle bursty traffic. For resilience, I added an HAProxy secondary instance behind Route 53 failover. I also introduced a Redis‑based shared queue to track request IDs so that if a worker crashed mid‑processing we could replay the event. Finally, I set up Prometheus exporters on NGINX and workers to capture hit ratios, latency percentiles, and error rates, feeding alerts into Grafana.

**Result** – After deployment, peak throughput increased from 4 kreq/s to 12 kreq/s with a 0.8 % error rate. Latency dropped from an average of 350 ms to 170 ms, and we eliminated packet loss during spikes. I learned that combining stateless request routing with stateful replay mechanisms gives the best balance between performance and reliability in real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
