---
qid: ing_d029cf38b2__fp__local
question: Kimi's headline feature is very long context. When you push context from
  8K to hundreds of thousands of tokens, what actually breaks first, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 464
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:23:13-05:00'
sources: []
---

When a language model is asked to process an **enormous context**—say 100 k tokens instead of its native 8 K—the first thing that collapses is the *attention mechanism itself*.  

Transformers compute a full \(QK^\top\) matrix whose size grows as \(O(n^2)\). At 8 K this is already heavy, but at 100 k it explodes to ~\(10^{10}\) entries. Even with linear‑time tricks (recurrence, sparse patterns), the *softmax* over such a huge score matrix becomes numerically unstable: most logits are far from zero, causing saturation and vanishing gradients. The model can no longer differentiate which tokens matter; it essentially “blurs” every position into one giant uniform attention blob.

Why does this happen? Attention is an **optimization of pairwise similarity** under a softmax that enforces a probability distribution. When the number of terms explodes, the distribution flattens unless the logits are scaled down by a factor proportional to \(\sqrt{n}\). Most architectures hard‑code this scaling (e.g., dividing by \(\sqrt{d_k}\)), but they do not adapt it to \(n\), so at 100 k tokens the implicit temperature is too low and the softmax collapses.

**Non‑obvious insight:** The problem isn’t merely memory; it’s that *relative* positional relationships dominate over absolute ones. At extreme lengths, the model loses its ability to anchor meaning to a particular position because every token’s relative distance becomes so large that the learned positional embeddings (which are fixed in size) cannot encode distinctions. Consequently, the network starts treating distant tokens as “the same”, erasing the very context it was supposed to preserve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
