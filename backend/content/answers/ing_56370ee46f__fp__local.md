---
qid: ing_56370ee46f__fp__local
question: Explain speculative decoding. Why doesn't it change the model's output distribution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 454
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:08:01-05:00'
sources: []
---

**Speculative decoding** tackles the *latency bottleneck* of autoregressive language models: every new token requires a full forward pass through a large transformer, which dominates inference time.  
The core idea is to **pre‑compute** many candidate tokens with a cheaper surrogate model (e.g., a distilled or quantized decoder) and then **accept or reject** them against the true model’s logits.  

1. **Why it works** – The surrogate generates a *proposal distribution* \(q(x)\). For each proposal, we compute an acceptance probability  
\[
a = \min\!\left(1,\frac{p_{\text{true}}(x)}{C\,q(x)}\right),
\]  
where \(C\) is a normalizing constant that upper‑bounds the ratio. This is exactly the Metropolis–Hastings acceptance rule, guaranteeing that the resulting chain has stationary distribution \(p_{\text{true}}\).  
2. **Why the output distribution stays unchanged** – The rejection step corrects any bias introduced by the cheaper model. Even if \(q(x)\) over‑or under‑samples certain tokens, the acceptance probability reweights them to match \(p_{\text{true}}\). Thus every accepted token is distributed exactly as it would be if we had queried the full model directly.  
3. **Non‑obvious insight** – Speculative decoding is not merely a speed hack; it is an *exact* importance sampler in disguise. By batching many proposals, we amortize the cost of the expensive forward pass across several token candidates, turning what would be a sequential bottleneck into a parallel one without compromising fidelity. This principle extends beyond language models to any autoregressive setting where a cheaper proxy can approximate the true distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
