---
qid: ing_3335c2ae34__fp__local
question: 'Explain: Plot any metric — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 429
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:53:47-05:00'
sources: []
---

**Why we plot a metric first**

When an AI agent is evaluated we ask two things:

1. *How good is it?* – A single scalar (accuracy, reward, F‑score) answers this.
2. *How confident are we in that number?* – Without uncertainty the point estimate is meaningless.

A metric alone is insufficient because its value depends on the data distribution, sample size, and randomness of training/evaluation. By plotting the metric against a *controlled variable* (e.g., training epochs, model size, or hyper‑parameter) we observe how performance changes with effort—exactly what optimisation theory demands: a function whose gradient tells us where to improve.

**Derivation from first principles**

Let \(M(\theta)\) be the expected performance of an agent parameterised by \(\theta\). We want to estimate \(M\) empirically. For each experiment we obtain a sample \(m_i\) and compute its mean \(\bar m\) and variance \(\hat\sigma^2/m\). Plotting \(\bar m\) with error bars gives a visual *confidence interval*—the statistical analogue of a derivative’s uncertainty.

If multiple metrics matter (e.g., accuracy vs. latency), we treat them as a vector \(M=(m_1,\dots,m_k)\). Plotting each component on the same axes or using a Pareto frontier exposes trade‑offs that optimisation theory guarantees must exist when objectives conflict.

**Non‑obvious insight**

Most people plot only the mean and ignore *distribution shape*. A metric can be high because a few outliers dominate; visualising the full empirical distribution (boxplot, violin) reveals whether performance is stable or volatile. Stability is often more valuable than raw score in real deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
