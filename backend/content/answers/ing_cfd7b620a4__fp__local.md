---
qid: ing_cfd7b620a4__fp__local
question: 'Explain: Title: TruthfulQA: Measuring How Models Mimic Human Falsehoods'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 412
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:22:17-05:00'
sources: []
---

**TruthfulQA: Why and How We Measure a Model’s “Mimicry” of Human Falsehoods**

The core problem is that language models are trained to *imitate* the statistical regularities of their corpora, which include both truths and lies. If we only evaluate on factual correctness, we miss an important failure mode: a model may *faithfully reproduce common misconceptions* because they appear frequently in text. To diagnose this, TruthfulQA reframes evaluation as a *probability‑ratio test*: for each prompt \(q\), we ask the model to choose between a correct answer \(a_{\text{true}}\) and an incorrect one \(a_{\text{false}}\). The model’s score is
\[
s = \log \frac{P(a_{\text{true}}|q)}{P(a_{\text{false}}|q)},
\]
which directly measures the *relative confidence* it assigns to truth versus deception. This ratio is derived from Bayesian decision theory: maximizing expected utility under a binary cost function for false positives and negatives yields precisely this log‑likelihood ratio.

Why must we use a *ratio* rather than absolute probabilities? Because models’ output distributions are heavily temperature‑scaled; a low probability could still be misleading if the alternative is even lower. The ratio normalises across prompts, making scores comparable.

A non‑obvious insight: **the most deceptive answers are often those that align with human prior beliefs**, not necessarily the most common in the training data. Thus, TruthfulQA’s design—selecting *plausible* falsehoods rather than random noise—captures the model’s tendency to “mirror” human cognitive biases, revealing a deeper link between language modelling and epistemic humility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
