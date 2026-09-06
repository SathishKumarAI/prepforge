---
qid: ing_ab6c49ab01__fp__local
question: 'Explain: The Core Concept — Speculative Decoding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 356
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:09:43-05:00'
sources: []
---

**Speculative Decoding – the “look‑ahead” optimizer of language models**

At its heart a transformer generates tokens sequentially: given a prefix *x₁…xᵢ*, it predicts a probability distribution over the next token *xᵢ₊₁*. The naive greedy algorithm picks the most probable one, while beam search keeps several hypotheses. Speculative decoding reframes this as an *online* inference problem on a latent space of “future continuations”.

1. **Fundamental problem** – we want to approximate the posterior over the next token without evaluating the expensive transformer for every candidate.  
2. **Solution principle** – train a lightweight *proxy model* (e.g., a distilled transformer or a simple RNN) that predicts the logits of the full model given only a handful of past tokens.  
3. **Why it works** – the proxy learns to mimic the high‑level decision surface of the large model; its outputs are noisy but correlated. By sampling several candidate continuations from the proxy and then rescoring them with the true model, we reduce the number of full‑model forward passes by an order of magnitude while retaining quality.

A subtle insight: **speculative decoding is essentially a variance‑reduced importance sampler**. The proxy’s distribution serves as an importance function; the expensive model provides the exact weights. This connection explains why speculative decoding can be combined with temperature scaling or top‑k filtering without destabilizing training, and why it scales gracefully to very long contexts—each speculated segment is independent, so parallelism is preserved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
