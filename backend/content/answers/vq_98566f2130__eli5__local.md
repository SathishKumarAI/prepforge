---
qid: vq_98566f2130__eli5__local
question: When to do re-sampling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 230
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:07-05:00'
sources: []
---

Imagine you’re baking a cake with a handful of berries that came from one basket. If you only use those berries, the cake’s flavor will reflect that single basket—maybe too sweet or missing tartness. Resampling is like taking fresh berries from several baskets so every bite tastes balanced.

In machine learning, *resampling* means repeatedly drawing new training sets (with or without replacement) to build multiple models or evaluate one model’s stability. Do it when:

- **Your data are limited** – more “bags” of examples give a better picture of performance.
- **You want an estimate of uncertainty** – bootstrapping lets you see how much results can vary with different samples.
- **Class imbalance exists** – techniques like oversampling minority classes or undersampling majority ones help the model learn all groups fairly.

So, whenever your data are sparse, skewed, or you need a robust error estimate, resampling is a handy tool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
