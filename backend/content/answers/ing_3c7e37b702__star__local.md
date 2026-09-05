---
qid: ing_3c7e37b702__star__local
question: What's the relationship between cross-entropy, KL divergence, and perplexity
  - and why is cross-entropy the training loss for language models?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 354
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:19-05:00'
sources: []
---

**Situation:** At my last internship I was tasked with improving a transformer‑based next‑word predictor that consistently over‑estimated token probabilities for rare words, causing perplexity to hover around 250 on the validation set.

**Task:** My goal was to reduce the model’s perplexity to below 180 while keeping training time manageable. To do this I needed to understand why cross‑entropy was chosen as the loss and how it relates to KL divergence and perplexity.

**Action:** I started by writing out the math: cross‑entropy \(H(p,q)= -\sum p(x)\log q(x)\) measures how well the model distribution \(q\) matches the true distribution \(p\). Subtracting entropy of \(p\) gives the KL divergence \(D_{KL}(p||q)\), which is always non‑negative. Since the entropy term depends only on data, minimizing cross‑entropy is equivalent to minimizing KL divergence—exactly what we want when training a language model. I then added a temperature‑scaled softmax and weight decay, monitoring perplexity ( \(\exp(H(p,q))\) ) as a direct exponentiation of cross‑entropy. This let me see the effect of each tweak numerically.

**Result:** After two weeks of tuning, perplexity dropped to 175, a 30 % improvement. I learned that cross‑entropy is the natural surrogate for KL divergence because it’s convex and differentiable, making backpropagation efficient; perplexity then simply translates loss into an interpretable metric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
