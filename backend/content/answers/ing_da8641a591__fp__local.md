---
qid: ing_da8641a591__fp__local
question: 'Explain: Will a 3B-parameter model run on your users'' phones? Do the maths.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 414
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:44:07-05:00'
sources: []
---

A **3‑billion‑parameter** transformer is essentially a 3 × 10⁹ matrix of floating‑point weights.  
At the *standard* precision (32‑bit float) each weight occupies 4 bytes, so

\[
3\times10^9 \text{ params}\times 4\text{ B/param}=12\,\text{GB}.
\]

Modern smartphones rarely have that free RAM; even a flagship with 16 GB would need to keep the entire model in memory for inference, which is impractical.  

If we halve precision (float‑16), the size drops to **6 GB**—still too large.  
Quantizing to 8‑bit integers cuts it further to **3 GB**, but most phones cannot load a 3‑GB tensor without paging, causing thrashing and latency.

Beyond memory, inference cost scales with multiply‑accumulate operations (MACs). A single forward pass of a transformer layer requires roughly \(4\) MACs per parameter. For 3B params that’s ~12 billion MACs; at 1 GFLOP/s a phone would need **≈12 seconds** per inference, far too slow for real‑time use.

Thus, **without compression**, a 3‑B model cannot run efficiently on consumer devices. The deeper principle is *information bottleneck*: you must trade off precision or sparsity to fit the model into the device’s capacity while keeping latency acceptable.  

A non‑obvious insight: even if you compress the weights enough to fit, the *activation tensors* (intermediate results) still dominate memory and power consumption. Therefore, practical mobile deployment relies on *architectural changes* (e.g., sparse attention or kernel‑wise pruning), not merely on parameter quantization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
