---
qid: ing_5010e9b20d__fp__local
question: Why do LLMs use subword tokenization instead of whole words or raw characters?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 417
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:55:29-05:00'
sources: []
---

**Why sub‑word tokenization is the natural choice for large language models**

At its core, a language model learns a probability distribution over *sequences* that best predicts the next unit (token). The training objective—maximize likelihood—does not care whether the unit is a word, character or sub‑word; it only cares about two competing forces:

| Force | Effect |
|-------|--------|
| **Data sparsity** | Whole words explode combinatorially. A single misspelling or rare morphology can create an unseen token, forcing the model to treat it as “unknown.” |
| **Expressive coverage** | Raw characters give maximal granularity but require many more steps for context; the model must learn long‑range dependencies across dozens of tokens to recover semantics. |

Sub‑words sit exactly in between these extremes: they are *large enough* that common morphemes (prefixes, suffixes, roots) share statistical patterns, yet *small enough* that rare or novel forms can be reconstructed from known pieces. This balances **parameter efficiency** and **generalisation**.

From an information‑theoretic standpoint, the entropy of a language is lower when measured over sub‑words than raw characters, because sub‑word units capture regularities (e.g., “ing” appears in many words). Consequently, fewer parameters are needed to model the distribution to the same predictive quality.

A subtle but powerful insight: *sub‑word tokenization implicitly implements a hierarchical Bayesian prior.* By breaking words into morphemes, the model learns priors over sub‑word compositions that generalise across languages and domains. This is why multilingual models trained with shared sub‑word vocabularies can transfer knowledge between related scripts or even between unrelated ones—an effect that would be impossible with word‑level tokenization.

In short, sub‑words solve the “curse of dimensionality” while preserving linguistic structure, making them the optimal unit for scalable, high‑performance language modeling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
