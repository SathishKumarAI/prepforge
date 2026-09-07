---
qid: ing_c952d5f580__faang__local
question: 'Explain: Attention Complexity — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 528
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:27:57-05:00'
sources: []
---

**Attention Complexity – LLM Internals**

| Step | What to do |
|------|------------|
| **Clarify** | *Problem:* Quantify the cost of self‑attention in a transformer layer. <br>*Assumptions:* Sequence length `n`, hidden size `d`, number of heads `h`. All tensors are dense; no sparse or rotary tricks yet. |
| **Approach** | 1. Write out the operations: Q,K,V projections, dot‑product attention, softmax, weighted sum. <br>2. Count FLOPs for each stage and combine. <br>3. Discuss how `n`, `d`, `h` affect memory & compute, and why it’s quadratic in `n`. |
| **Depth** | • Q/K/V: `3 * n * d * (d/h)` ≈ `O(n·d²)`.  <br>• Attention scores: `n × n` matrix → `n² · (d/h)` multiplications.  <br>• Softmax per row: `O(n²)` additions & exponentials.  <br>• Weighted sum: `n² · (d/h)` again.  <br>Total FLOPs ≈ **4 · n² · (d/h)** + lower‑order terms → **Θ(n² d)**.  <br>Memory: `O(n²)` for scores + `O(n·d)` activations. |
| **Edge Cases** | • Very long sequences (`n` > 10k) blow up memory; test with sparse/linear attention. <br>• Small `h` (e.g., 1) increases per‑head width → more FLOPs per head. <br>• Mixed precision changes constant factors but not asymptotics. |
| **Optimize & Communicate** | • Use *kernel fusion* to reduce memory traffic. <br>• Replace softmax with `logits` scaling + dropout for speed. <br>• For inference, cache key/value tensors per layer (KV caching).  Explain trade‑off: reduced runtime vs extra storage.  Summarize that attention’s quadratic bottleneck drives modern research into sparse/linear alternatives. |

*Key takeaway:* In a vanilla transformer, self‑attention scales as **Θ(n² d)** in compute and memory, making long‑sequence modeling the main performance challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
