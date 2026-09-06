---
qid: ing_755558916c__fp__local
question: 'Explain: What is a Language Model — The Illustrated GPT-2 (Visualizing
  Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning
  one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 442
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:14:39-05:00'
sources: []
---

**Language models as probabilistic sequence compressors**

At its core, a language model (LM) solves the *compression* problem: given an input sentence, it assigns the highest probability to the most plausible continuation. Formally, for tokens \(w_1,\dots,w_T\),

\[
P(w_{t+1}\mid w_{\le t})=\frac{P(w_{\le t+1})}{P(w_{\le t})}.
\]

The LM must learn this conditional distribution from data alone; it cannot rely on a fixed dictionary of rules. Thus the model is an *information‑theoretic* device: the lower its cross‑entropy, the better it compresses language.

**Why Transformers?**

Transformers replace recurrent recurrence with self‑attention, allowing each token to attend to every other token in parallel. This yields two key properties:

1. **Global context** – attention scores \(a_{ij}\) are computed from query–key pairs \((q_i,k_j)\), enabling a token’s representation to depend on the entire history, not just the last hidden state.
2. **Parallelism & scalability** – the quadratic‑time self‑attention matrix can be batched across GPUs, letting models like GPT‑2 process long contexts efficiently.

The decoder architecture (masked multi‑head attention + feed‑forward layers) is a stack of *autoregressive* blocks that enforce causality: each block’s output at position \(i\) depends only on positions \(\le i\).

**Non‑obvious insight**

While GPT‑2 appears to “memorize” text, its success stems from learning *latent structure*: the attention heads implicitly discover syntactic and semantic patterns (e.g., subject–verb agreement, coreference). Visualizing these heads shows that some focus on local n‑grams while others capture long‑range dependencies. This duality explains why GPT‑2 can generate fluent continuations even for unseen prompts—its internal representation is a compressed, probabilistic map of linguistic structure rather than a literal copy of training data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
