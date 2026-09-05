---
qid: ing_17fa6e3743__star__local
question: 'Explain: Sustainability — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 350
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:16:41-05:00'
sources: []
---

**Situation** – At my last company we were tasked with reducing the carbon footprint of our recommendation engine that ran on a 2 TB dataset. The model training pipeline was consuming ~15 kWh per epoch, and our sustainability dashboard flagged it as an “energy hotspot.”  

**Task** – I had to redesign the workflow so we could cut energy usage by at least 30 % without hurting accuracy (≤1 % drop in F1).  

**Action** – First, I introduced **model pruning**: I used a structured sparsity regularizer during training with PyTorch, which trimmed ~40 % of weights while keeping the loss stable. Next, I switched from our on‑prem GPU cluster to an **Azure Spot VM** pool, leveraging lower‑cost, preemptible instances that reduce data center load. I also rewrote the feature extraction stage in Apache Spark, enabling **data pipeline parallelism** and eliminating redundant computations. Finally, I added a **dynamic batching** layer that adjusts batch size based on real‑time GPU utilisation, ensuring we never under‑utilise hardware.  

**Result** – The new pipeline cut energy consumption to 10 kWh per epoch (a 33 % reduction) while the model’s F1 score stayed at 0.87 vs. the previous 0.88. The sustainability dashboard now reports a 30 % lower carbon footprint, and I presented the approach in our quarterly green‑tech summit, inspiring other teams to adopt similar pruning and spot‑instance strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
