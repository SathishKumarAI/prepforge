---
qid: ing_3837a4f014__star__local
question: 'Explain: Self-Hosting & GPU Cloud Arbitrage — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 391
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:47-05:00'
sources: []
---

**Situation** – In early 2024 I was leading the launch of a new recommendation engine for an e‑commerce client. The model required 8 TB of training data and nightly inference on 16 GPUs to meet a 2 second latency SLA, but our budget capped total GPU spend at $12k/month.

**Task** – My goal was to keep the inference pipeline under budget while maintaining performance. I had to decide between self‑hosting on an in‑house cluster or leveraging GPU cloud arbitrage (spot instances, reserved capacity) and calculate the break‑even point for each option.

**Action** – I first profiled the workload: 4 GPU-hours per day at peak, with idle periods during off‑peak hours. I built a cost model that included on‑prem power, cooling, maintenance, and cloud instance prices (AWS G5, Azure NDv2, GCP A100). Using an automated scheduler, I shifted non‑critical inference jobs to spot instances when price dropped below $0.10 per GPU‑hour. For peak hours I reserved 4 GPUs at a fixed rate of $1.20 per hour. I also added a small buffer of on‑prem GPUs (2 units) for latency spikes and as a fallback during cloud outages.

**Result** – The hybrid strategy cut our monthly GPU spend by 35% ($7,800 vs $12k). Latency stayed below the SLA 99.9% of the time, and we avoided any downtime from spot instance preemption thanks to the on‑prem buffer. I learned that dynamic pricing models combined with a small on‑prem safety net can deliver both cost efficiency and reliability in GPU‑heavy AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
