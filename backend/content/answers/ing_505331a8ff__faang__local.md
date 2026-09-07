---
qid: ing_505331a8ff__faang__local
question: 'Explain: Sampling, the Law of Large Numbers, and the Central Limit Theorem'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 486
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:51:22-05:00'
sources: []
---

**Clarify**

You’re asking how *sampling* relates to two foundational probability results: the **Law of Large Numbers (LLN)** and the **Central Limit Theorem (CLT)**.  
Assumptions I’d confirm: we’re drawing i.i.d. samples from a distribution with finite mean μ and variance σ²; we care about sample averages or sums.

**Approach**

1. Define sampling and its goal (estimate population moments).  
2. State LLN – convergence of the sample mean to μ.  
3. State CLT – distribution of properly scaled deviations is approximately normal.  
4. Connect them to practical inference (confidence intervals, hypothesis tests).

**Depth**

- **Sampling**: pick n observations X₁,…,Xₙ; compute \(\bar{X}_n = (1/n)\sum X_i\).  
- **LLN** (weak): For any ε>0, \(P(|\bar{X}_n - μ| > ε) → 0\) as n→∞. Guarantees that larger samples give more reliable estimates. Complexity: O(n).  
- **CLT**: \(\sqrt{n}(\bar{X}_n - μ)/σ → N(0,1)\). Even if the underlying distribution is skewed, for moderate to large n the sampling distribution of \(\bar{X}_n\) is bell‑shaped. Enables z‑tests and t‑intervals (when σ unknown).

**Edge Cases**

- Heavy‑tailed data with infinite variance → CLT fails; use robust estimators or bootstrap.  
- Small n: LLN guarantees are weak; sampling distribution may be far from normal, so non‑parametric methods are safer.

**Optimize & Communicate**

Explain that LLN justifies *why* we sample at all—larger samples reduce variance. CLT explains *how* to build statistical procedures once we have a large enough n. In practice, check the effective sample size; if it’s low, consider variance‑reduction techniques (stratified sampling, importance sampling). This narrative shows clear reasoning, technical depth, and practical implications—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
