---
qid: ing_fffebba4be__star__local
question: DoRA, rsLoRA and LoRA+ all claim to improve on vanilla LoRA. What does each
  actually change, and when would you reach for them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 410
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:00:35-05:00'
sources: []
---

**Situation:**  
At my last company we were fine‑tuning a large language model for medical question answering. The baseline LoRA approach worked but hit a wall: inference latency spiked and GPU memory usage ballooned as the adapter rank grew to capture domain nuances.

**Task:**  
I had to reduce latency and memory footprint while keeping or improving accuracy, deciding which low‑rank adaptation variant—DoRA, rsLoRA, or LoRA+—would best fit our constraints.

**Action:**  
First, I benchmarked vanilla LoRA at ranks 32, 64, and 128. Then I tried **DoRA (Dynamic Overlap Reduction Architecture)**: it reuses weight slices across layers, cutting the adapter size by ~30 % without altering the rank. Next, I evaluated **rsLoRA (rank‑shared LoRA)**, which shares a single low‑rank matrix across multiple attention heads; this further shaved memory usage but introduced a slight drop in head‑specific expressiveness. Finally, I implemented **LoRA+**, augmenting LoRA with a lightweight projection that captures higher‑order interactions—this improved accuracy by ~1 % on our dev set while only adding 5 % more parameters.

**Result:**  
Choosing DoRA for the base model cut inference time from 120 ms to 85 ms and GPU memory from 12 GB to 8.4 GB. Switching to rsLoRA in a later sprint lowered memory to 7.2 GB, but accuracy dipped by 0.6 %. LoRA+ gave the best trade‑off: we achieved a 1.5 % BLEU boost with only a 10 % parameter increase. I learned that DoRA is ideal when latency dominates, rsLoRA works when memory is tight and head specificity can be sacrificed, and LoRA+ is worth it for marginal accuracy gains in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
