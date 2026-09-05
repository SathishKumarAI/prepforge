---
qid: ing_8548439bad__star__local
question: 'Explain: Endpoint: POST /backends — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 384
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:59:43-05:00'
sources: []
---

**Situation** – At my previous startup we exposed a single REST endpoint `/backends` that accepted large JSON payloads describing new machine‑learning models to deploy. During beta testing the API hit 10 k RPS and every request had to spin up an inference container, leading to 400 ms tail latency spikes and a 7% SLA breach.

**Task** – I was asked to design a scalable load balancer that could evenly distribute POST traffic across our pool of model‑hosting nodes, keep stateful sessions for long‑running training jobs, and provide fail‑over without data loss.

**Action** – I chose NGINX Plus as the edge proxy because it supports sticky sessions via hash on `client_ip` and can perform health checks on HTTP 200/503 responses. I defined an upstream group with round‑robin + least‑conn balancing and added a custom Lua script to inspect the request body size; if >1 MB it was redirected to a “big‑payload” pool that had larger workers. For persistence, I integrated Redis as a session store so that a node failure would re‑route the job to another worker without restarting training. I also set up Prometheus exporters on each backend and Grafana dashboards to monitor per‑node queue depth.

**Result** – After rollout we saw 60 % reduction in average latency (from 400 ms to 160 ms) and eliminated tail spikes; SLA improved from 93 % to 99.8 %. I learned that coupling a lightweight load balancer with an external state store can give you both high throughput and graceful fail‑over for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
