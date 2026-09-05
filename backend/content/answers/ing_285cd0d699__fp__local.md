---
qid: ing_285cd0d699__fp__local
question: 'Explain: Our serving cost is dominated by KV cache, not weights. Get it
  down by an order of magnitude and tell me what you give up.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 505
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:31:04-05:00'
sources: []
---

**Why the KV cache dominates inference cost**

When a transformer runs, each token requires two matrix‑multiplications:

1. **Weight‑based attention** – \(QK^T\) and \(V\) are multiplied by fixed model weights.  
2. **Key/Value (KV) cache lookup** – previously computed keys and values are reused for every new token.

The cost of the first term is proportional to the *model size* (\(O(d^2)\)). The second grows with the *sequence length* (\(O(Ld)\)), because every past token contributes a fresh key/value pair. In production, long prompts or streaming queries mean \(L\) can be several thousand tokens, far exceeding the number of parameters in most modern models (e.g., 10 B vs. 200 M). Thus the KV cache dominates wall‑clock time and GPU memory.

**Getting it down by an order of magnitude**

- **KV compression**: encode keys/values with lower precision or quantized hash buckets; reduces memory traffic and bandwidth.  
- **Cache pruning**: drop the oldest entries or use a sliding window; eliminates \(O(L)\) growth.  
- **Sparse attention**: only attend to a subset of past tokens (e.g., locality‑aware windows); cuts down the matrix size.

**What you give up**

1. **Contextual fidelity** – pruning removes long‑range dependencies, harming tasks that need global coherence.  
2. **Exactness of attention** – compression introduces quantization noise; models may require fine‑tuning to tolerate it.  
3. **Model flexibility** – hard‑coded windows limit the ability to adapt to arbitrary prompt lengths without retraining.

*Non‑obvious insight*: Compression does not merely reduce memory; it reshapes the *information geometry* of the attention space. By forcing keys/values into a lower‑dimensional manifold, you implicitly impose a prior that nearby tokens are more similar—exactly what locality‑aware windows already assume. Thus, cache pruning and KV compression can be viewed as two sides of the same regularization coin: they both bias the model toward local coherence, which is why their combined effect can yield dramatic speedups with surprisingly modest accuracy loss when tuned correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
