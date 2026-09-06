---
qid: ing_97355206e3__fp__local
question: 'Explain: Testing — GitHub - ai-evals-course/judgy: Python package for estimating
  a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 344
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:27:07-05:00'
sources: []
---

**Why we need CI‑aware evaluation of “LLM‑as‑Judges”**

When a language model (LM) is used as a judge, its output is a noisy estimate of an underlying metric \(m\). The LM’s stochastic decoding turns each prompt into a random variable \(Y\), and the empirical mean \(\hat m=\frac1n\sum Y_i\) is only a point estimate. Classical statistics tells us that to make any inference we must quantify uncertainty: a confidence interval (CI) around \(\hat m\).

The *ai‑evals* package solves this by treating each LLM judgment as an independent sample from the same distribution and applying **bootstrap** or **t‑interval** techniques. The bootstrap resamples the \(Y_i\)’s, recomputes \(\hat m^*\), and uses the empirical distribution of \(\hat m^*\) to derive a percentile CI. This is nonparametric: it does not assume normality, which is crucial because LLM outputs often have heavy tails or multimodalities.

A subtle point many overlook: **variance scales with the number of prompt–output pairs**, not just the model size. Because each pair can differ dramatically in difficulty, the package automatically stratifies by prompt type and aggregates variances per stratum, yielding a *stratified bootstrap* that respects heteroskedasticity.

In short, `judgy` turns the messy, stochastic judgment of an LM into a statistically principled estimate with a CI, enabling rigorous comparison between models or prompting strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
