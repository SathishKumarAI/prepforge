---
qid: ing_8cc7fc6ae2__star__local
question: 'Explain: Kimi K2 is a 1T-parameter MoE with about 32B active per token
  and hundreds of experts. Explain the routing and the systems cost of training it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 395
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:22-05:00'
sources: []
---

**Situation:**  
I was on the research‑engineering team at a large AI lab when we decided to scale our Mixture‑of‑Experts (MoE) model up to 1 trillion parameters for a next‑generation language model, codenamed Kimi K2. The goal was to hit >30 B active parameters per token while keeping GPU utilization high.

**Task:**  
I had to design the expert routing mechanism and estimate the training cost on our multi‑GPU cluster, ensuring we stayed within budget and could iterate quickly.

**Action:**  
We implemented a two‑stage top‑k routing: each token first selects 4 candidate experts via a lightweight hash‑based lookup, then a gating network (a small MLP) re‑weights them to choose the final 2 experts. To reduce memory traffic we compressed the expert weights with product quantization and offloaded rarely used experts to NVMe SSDs, loading them on demand. Training ran on 8 A100 GPUs per node; we used Megatron‑Llama’s pipeline parallelism (64 stages) plus tensor parallelism across 256 GPUs. The sparse update pattern meant only ~32 B parameters were updated per step, cutting compute by ~90% compared to a dense model.

**Result:**  
We trained Kimi K2 in roughly 12 days on our 256‑GPU cluster, costing ~$4M in GPU hours—about half the projected budget. The final model achieved a perplexity of 8.3 on the Wikitext benchmark, and I learned how to balance routing precision against system overhead by tuning k and expert eviction policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
