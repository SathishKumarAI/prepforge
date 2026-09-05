---
qid: ing_20e002d36e__star__local
question: 'Explain: Pros of Vertical Scaling — Vertical vs Horizontal Scaling | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 308
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:25-05:00'
sources: []
---

**Situation** – While leading the deployment of a recommendation engine for an e‑commerce startup, we had to move from a proof‑of‑concept model trained on a single GPU to serving predictions at 10k requests per second. The existing cluster was a small set of commodity servers (horizontal scaling), but latency spikes and inconsistent memory availability were hurting user experience.

**Task** – I needed to design an architecture that could deliver sub‑50 ms inference times for the complex neural network while staying within our $2000/month budget.

**Action** – I evaluated vertical scaling: adding a high‑end NVIDIA A100 GPU with 80 GB RAM and a 128‑core CPU to a single machine. I containerized the model with Docker, used TensorRT for engine optimization, and employed NUMA‑aware memory allocation to keep data locality tight. We also implemented a lightweight load balancer that directed traffic to this node, while keeping a secondary “warm” replica ready for failover.

**Result** – Latency dropped from 180 ms to 35 ms on average, throughput doubled, and we reduced operational costs by 30% compared to adding four extra nodes. I learned that vertical scaling can be more cost‑effective for latency‑sensitive ML workloads when the model fits in memory and you can optimize GPU utilization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
