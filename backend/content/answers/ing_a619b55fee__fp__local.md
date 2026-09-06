---
qid: ing_a619b55fee__fp__local
question: 'Explain: Summary Statistics — ai-engineering-field-guide/interview/01-interview-process.md
  at main \u00b7 alexeygrigorev/ai-engineering-field-guide \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 294
total_tokens: 497
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:58:54-05:00'
sources: []
---

**Why “Summary Statistics” matters for AI interviews**

The interview process is a *noisy channel* that must transmit the candidate’s true skill level to hiring managers. The only observable signals are limited: resume, portfolio, coding test, and the interview itself. Because each signal is noisy (biases, time pressure, random luck), we need a compact representation that captures **expected performance** while quantifying its *confidence*.  

Summary statistics do exactly this: they reduce a multi‑dimensional evaluation into mean, variance, skewness, etc., turning raw scores into a probabilistic estimate of the candidate’s latent ability. This mirrors Bayesian inference—our prior (e.g., industry norms) is updated with evidence (interview scores), yielding a posterior distribution over competence.

A non‑obvious insight: **variance matters more than mean** when comparing candidates. Two applicants with identical average scores but different score spreads signal different risk profiles. A low‑variance candidate consistently meets expectations, whereas a high‑variance one may excel or fail depending on context—information critical for roles requiring reliability under pressure.

In short, summary statistics transform chaotic interview data into a principled, decision‑friendly metric that balances performance and uncertainty, aligning hiring with the underlying optimization problem of selecting the best fit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
