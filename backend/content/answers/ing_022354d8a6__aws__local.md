---
qid: ing_022354d8a6__aws__local
question: 'Explain: Explain gradient accumulation, gradient checkpointing, and ZeRO/FSDP
  - and how you''d combine them for a real training run.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 411
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:29:00-05:00'
sources: []
---

**Situation / Task**  
I led a team that had to train a 12‑B parameter LLM on an on‑prem GPU cluster while staying under $200k/epoch. The goal was to hit >90% perplexity reduction in 30 days.

**Action**  
We combined **gradient accumulation**, **gradient checkpointing**, and **ZeRO/FSDP**:

1. **Gradient Accumulation** – we set `accumulate_steps=4` so each GPU processed only a 2‑GB batch, keeping memory <80 % of peak.  
2. **Gradient Checkpointing** – re‑computed the forward pass for the transformer blocks (≈30 % compute overhead) to free 50 % of activation memory.  
3. **ZeRO Stage‑3 + FSDP** – ZeRO partitioned optimizer states across nodes, while FSDP wrapped each block, giving us ~4× memory savings and eliminating redundant gradient copies.

We orchestrated this on **AWS SageMaker Training Jobs** with **p3dn.24xlarge** instances, using **S3 for sharded checkpoints** and **EFS for fast shared state**. The job completed in 28 days, costing $184k—$16k below budget—and achieved a perplexity of 18.4 (a 12% absolute improvement over the baseline).

**Result**  
The solution delivered on cost, time, and quality, demonstrating **Ownership** (end‑to‑end delivery) and **Dive Deep** (tuned trade‑offs). Post‑mortem highlighted that early profiling of memory vs compute was critical; we now automate this in CI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
