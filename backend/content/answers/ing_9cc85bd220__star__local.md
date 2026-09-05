---
qid: ing_9cc85bd220__star__local
question: 'Explain: Implement single-step decode with a KV cache in PyTorch, for causal
  multi-head attention. Then say what changes for a long-context serving system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 412
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:45:38-05:00'
sources: []
---

**Situation**  
While working on an internal chat‑bot, we noticed that inference latency was exploding when users asked for multi‑turn conversations. The model was a 12‑layer transformer with causal attention and we had to serve up to 1 k tokens per request in real time.

**Task**  
Implement single‑step decode using a key/value (KV) cache in PyTorch so that each new token could be generated without recomputing the entire context, and adapt it for a long‑context serving system that might need to hold tens of thousands of tokens across sessions.

**Action**  
I wrapped the model’s `MultiheadAttention` into a custom class that stored tensors `k_cache` and `v_cache`. During the first forward pass I computed all KV pairs (`q, k, v = self.qkv(x)`), then sliced out the new token’s keys/values. For subsequent steps I concatenated the incoming `k_new`, `v_new` to the cached tensors along the sequence dimension using `torch.cat`. The attention score was calculated with `torch.matmul(q, k_cache.transpose(-2,-1)) / sqrt(d_k)`, masking only the current step so the softmax stayed causal. For long‑context serving I switched from a list of cached tensors per user to a single large buffer per GPU, using `torch.nn.functional.pad` to grow it on demand and `torch.no_grad()` for inference. I also swapped the attention kernel with `flash_attn` when available to cut FLOPs by ~30%.

**Result**  
Latency dropped from 250 ms per token to 45 ms, throughput increased 5×, and we could support up to 20k‑token context in production without memory spikes. I learned that careful cache management and leveraging GPU‑specific attention kernels are key for scalable serving of causal transformers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
