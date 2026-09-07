---
qid: ing_ff2377ad31__faang__local
question: 'Explain: KV cache — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 617
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:33:17-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of the *KV‑cache* used in transformer‑based LLMs and why it matters for inference speed and memory usage. I’ll assume we’re talking about a causal (decoder‑only) model where each new token is generated one step at a time, and that the cache stores past key/value pairs from self‑attention layers.

**Approach**  
1. Define keys/values in self‑attention.  
2. Explain how caching avoids recomputing them for every generation step.  
3. Discuss dimensionality, memory layout, and impact on latency.  
4. Touch on trade‑offs (memory vs speed) and practical limits.

**Depth**  
In a transformer decoder, each layer computes queries \(Q_t\), keys \(K_{1:t}\), values \(V_{1:t}\) from hidden states up to time \(t\). The attention output at step \(t\) is  
\( \text{softmax}(Q_t K_{1:t}^\top / \sqrt{d_k}) V_{1:t}\).  
Re‑running the entire stack for every new token would require recomputing all past keys/values, costing \(O(T^2 d)\). The KV‑cache stores \(K\) and \(V\) tensors from previous steps in GPU memory. When a new token arrives, we only compute its \(Q_t\), append the new key/value to the cache, and perform the dot‑product with the cached tensors—an \(O(Td)\) operation per layer instead of \(O(T^2 d)\). This reduces inference latency by roughly a factor of \(T\) (often 5–10×) while keeping memory overhead modest: each key/value pair is \(d_k\) floats, so for a 12‑B model with \(d=4096\), caching 1k tokens uses ~64 MB per layer.

**Edge cases**  
- Very long sequences can exhaust GPU memory; techniques like rotary embeddings or block‑wise KV reuse mitigate this.  
- If the cache is corrupted (e.g., wrong dimensionality), attention will produce NaNs—debug by asserting shapes after each append.  
- In multi‑GPU setups, ensuring synchronized caches across devices is critical.

**Optimize & communicate**  
To further improve throughput, one can pack multiple tokens per kernel launch (batched decoding) and fuse KV concatenation with the softmax. I would explain that while caching boosts speed, it introduces a memory bottleneck; balancing sequence length against available GPU RAM is key. When presenting this to interviewers, emphasize the clear trade‑off diagram: *time ∝ T² without cache vs. time ∝ T with cache*, and note that the cache is the standard industry optimization for real‑time LLM inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
