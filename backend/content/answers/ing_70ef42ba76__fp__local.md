---
qid: ing_70ef42ba76__fp__local
question: 'Explain: Issue 2: Inconsistent Tokenization — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 415
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:04:37-05:00'
sources: []
---

**Inconsistent Tokenization – The Root of “Semantic Drift”**

At its core, a language model maps *sequences* of tokens to probability distributions over the next token.  
If the same word is split into different sub‑tokens across contexts (e.g., “running” → `run`, `##ning` vs. “runner” → `run`, `##ner`), the model learns two separate embeddings that are only loosely related by shared prefixes. Because training optimizes *next‑token likelihood*, the model never explicitly aligns these sub‑tokens; it merely memorizes statistical co‑occurrence patterns.

This mismatch breaks a fundamental principle of **information preservation**: a tokenization scheme should be a bijection between surface forms and internal symbols so that no semantic content is lost or duplicated. When the mapping becomes many‑to‑one (different surface words map to overlapping sub‑token sets), the model’s latent space fragments, leading to:

1. **Unstable representations** – the same concept is encoded by different vectors depending on context.
2. **Poor transfer** – fine‑tuning on a domain with a distinct token set yields catastrophic forgetting because the shared sub‑tokens no longer capture the same semantics.

A deeper insight: *tokenization consistency is essentially an implicit regularizer for compositionality*. By forcing each word to decompose into a fixed sequence of sub‑units, we guarantee that the model can reconstruct any surface form from its internal representation. When this property fails, the model’s ability to generalize across unseen combinations collapses—an effect invisible until downstream tasks degrade.

**Bottom line:** Consistent tokenization preserves a one‑to‑one mapping between language and latent space, ensuring that optimization over next‑token probabilities truly reflects underlying semantics rather than artefacts of arbitrary sub‑token splits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
