---
qid: ing_8a9148c57f__fp__local
question: 'Explain: Week 3 — Generative AI with Large Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 340
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:59:08-05:00'
sources: []
---

**Why Week 3 is the turning‑point of a generative‑AI curriculum**

At its core, generative modeling tackles *inverse probability*: given an observation \(x\), infer a distribution over latent causes \(z\) that could have produced it. Large Language Models (LLMs) solve this by learning the joint distribution \(p(x, z)\) from billions of tokens, so they can sample new \(x'\) that are statistically indistinguishable from real text.

The week’s lectures build on three pillars:

1. **Transformer architecture** – self‑attention gives each token a context‑dependent embedding; mathematically it approximates the posterior \(p(z|x)\) with a tractable neural network.
2. **Pre‑training objectives** – masked language modeling and causal LM training maximize likelihood \(\log p(x)\), directly aligning with maximum‑entropy principles.
3. **Fine‑tuning & prompting** – small adjustments to logits or conditioning on prompts reshape the output distribution without retraining, illustrating *parameter efficiency* via implicit regularization.

A non‑obvious insight: **prompt engineering is essentially a controlled sampling strategy**. By prepending a few tokens, you bias the model’s softmax toward a sub‑manifold of its learned space—akin to steering a probability mass function with a prior. Understanding this gives practitioners a principled handle on *content control* versus *creative freedom*, a trade‑off that underlies everything from chatbots to code generators.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
