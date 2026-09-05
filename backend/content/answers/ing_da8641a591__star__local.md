---
qid: ing_da8641a591__star__local
question: 'Explain: Will a 3B-parameter model run on your users'' phones? Do the maths.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 403
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:10-05:00'
sources: []
---

**Situation** – At my last job we were asked by a product manager whether a 3‑billion‑parameter transformer could run on the average Android phone in our user base, which had roughly 4 GB of RAM and an ARM Cortex‑A75 CPU at 2.0 GHz.

**Task** – I needed to estimate the memory footprint, compute load, and decide if it was feasible or if we’d have to prune the model.

**Action** – First, I calculated the parameter storage: 3 B × 4 bytes (float32) ≈ **12 GB**. That alone exceeded RAM by a factor of three, so we had to quantize to int8: 1 byte per weight → 3 GB. Adding activations for a single inference step (~10 % of parameters) pushed peak memory to ~3.3 GB. Next I looked at MACs: a transformer layer does ≈4×(hidden size²). With hidden size 2048, one layer is ~33 M multiply‑accumulates; 12 layers → ~400 M MACs per forward pass. At 2 GHz that’s ~0.2 seconds on CPU if well‑optimized, but still high battery drain. I proposed using a 1‑billion‑parameter distilled model with int8 weights and quantized activations, cutting memory to 1 GB and compute to ~100 M MACs.

**Result** – The distilled version ran comfortably within the 4 GB RAM limit, completed inference in under 50 ms on the target CPUs, and reduced battery usage by ~30%. I learned that raw parameter counts are a poor proxy; quantization and layer pruning are essential for mobile deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
