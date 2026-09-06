---
qid: ing_bdfe5060ac__fp__local
question: 'Explain: Input Encoding — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 373
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:47:32-05:00'
sources: []
---

**Input Encoding in GPT‑2: A First‑Principles View**

At the heart of every language model is the *mapping* from raw symbols (letters, sub‑words) to numerical vectors that a neural network can process. This mapping must satisfy three constraints:

1. **Discriminative power** – each token should be distinguishable in vector space so the model can learn context‑dependent relationships.
2. **Compression** – the representation should capture semantic similarity: words like *“run”* and *“ran”* should lie close, whereas *“cat”* and *“bicycle”* should not.
3. **Efficient training** – the encoding must allow gradients to flow without exploding or vanishing.

GPT‑2 satisfies these by **byte‑pair‑encoding (BPE)** combined with a learned embedding matrix. BPE iteratively merges frequent character pairs, yielding sub‑word units that balance granularity and vocabulary size. Each token \(t\) receives an embedding vector \(\mathbf{e}_t\). These vectors are not arbitrary; they form the *basis* for the transformer’s attention mechanism: the dot product between query and key embeddings yields similarity scores.

A non‑obvious insight: **the embedding space is implicitly regularized by the attention mechanism**. Because attention weighs tokens based on their inner products, embeddings that differ only slightly can drastically alter downstream predictions. Thus, training forces the model to spread semantically distinct tokens apart while keeping synonyms close—an emergent form of metric learning without explicit constraints.

In short, GPT‑2’s input encoding is a carefully engineered bridge from discrete language to continuous geometry, ensuring both expressive power and tractable optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
