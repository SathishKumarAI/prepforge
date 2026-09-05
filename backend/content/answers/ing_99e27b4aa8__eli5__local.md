---
qid: ing_99e27b4aa8__eli5__local
question: 'Explain: Title: Direct Preference Optimization: Your Language Model is
  Secretly a Reward Model'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 218
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:41:48-05:00'
sources: []
---

**Direct Preference Optimization (DPO)** is like teaching a robot to bake cakes by showing it which ones people actually prefer, instead of telling it the recipe step‑by‑step.

Imagine you have two bakers: one follows a strict cookbook (the usual “reward model” that tells the language model how good a sentence is), and another watches customers taste test and simply copies what they like. DPO skips the cookbook entirely. It gives the model pairs of sentences, then asks which one sounds better to a human. The model learns to score sentences directly from these preferences, so it behaves as if its own internal reward system was built from real human tastes.

**Key terms**
- *Reward model*: a separate program that judges how good an answer is.
- *Preference*: the choice of one sentence over another made by a person.

By learning from direct choices, the language model “secretly” becomes a reward model itself—no extra judge needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
