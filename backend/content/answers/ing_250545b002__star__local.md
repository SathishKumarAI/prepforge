---
qid: ing_250545b002__star__local
question: 'Explain: When to Choose Vertical vs Horizontal Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 370
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:56-05:00'
sources: []
---

**Situation** – In late 2022 I was leading the rollout of a recommendation engine for an e‑commerce platform that had just hit 5 M daily active users. Our latency SLA was 150 ms, and the traffic pattern showed sudden spikes during flash sales.

**Task** – I needed to decide whether to scale our inference cluster vertically (more powerful GPUs) or horizontally (add more nodes), while keeping cost and maintenance manageable.

**Action** – First, I profiled a typical request: it used 1 GB of GPU memory, had a 40 ms compute core time, and 30 ms for data shuffling. I ran benchmarks on a single high‑end A100 versus a pool of 8 consumer‑grade V100s. The A100 gave 2× speed but consumed 80% more power and cost 3× the per‑hour rate. Next, I evaluated a horizontal strategy: using Kubernetes autoscaler to spin up pods only during peak windows, with shared model cache via Redis. This reduced average GPU utilization from 30% to 70%, cut energy usage by 45%, and kept latency below SLA even under a 3× traffic surge.

**Result** – We chose horizontal scaling: load‑balanced inference nodes behind a FastAPI gateway, auto‑scaling on CPU/GPU metrics. Monthly spend dropped 38 %, while mean inference time stayed at 140 ms and peak latency never exceeded 170 ms. I learned that the decision hinges on workload characteristics (memory vs compute), cost elasticity, and operational overhead—vertical scaling is great for tightly coupled workloads, but horizontal offers resilience and better cost‑efficiency for bursty traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
