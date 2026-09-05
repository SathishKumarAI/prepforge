---
qid: ing_d6342d83d9__star__local
question: You're training on tens of thousands of GPUs and hardware fails constantly.
  How do you keep goodput high?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 373
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:37:01-05:00'
sources: []
---

**Situation** – In my last role I led the training of a large transformer model across 50 k GPUs in a mixed‑vendor cluster. Within the first week, we saw a 12% drop in overall throughput because about 3–4% of the nodes were failing due to intermittent power surges and firmware bugs.

**Task** – My goal was to keep the goodput—effective training time per epoch—within 5 % of our baseline while keeping costs under budget. I needed a strategy that could detect failures early, recover quickly, and reallocate work without manual intervention.

**Action** – I introduced a lightweight health‑check daemon on each node that pinged the GPU’s NVML interface every 30 s and reported status to a central Redis queue. The training framework was modified to use elastic data parallelism: when a node failed, its shards were redistributed among healthy workers via a sharding scheduler. I also added checkpointing at every 10 k steps so that any worker could resume from the last global state. To mitigate firmware issues, we deployed a rolling upgrade pipeline that updated drivers on half the cluster while the other half kept training, ensuring continuous availability.

**Result** – Goodput fell by only 3% during the first month of production and then recovered to within 1% of our target after the scheduler was tuned. Training time per epoch decreased from 9 h to 8 h, saving us roughly $15k in GPU hours annually. I learned that combining proactive health monitoring with elastic parallelism is key to sustaining high throughput in large‑scale AI training environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
