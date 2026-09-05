---
qid: vq_a6a020d2fd__fp__local
question: In statistics, how are missing data treated?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 494
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:49:58-05:00'
sources: []
---

**Missing data in statistical modelling**

When a variable is unobserved for some units, the fundamental problem is that we lose information about the joint distribution \(p(Y,Z)\) of observed (\(Y\)) and missing (\(Z\)).  
To make inference tractable we must *model* how the missingness mechanism interacts with the data. This leads to three canonical assumptions:

1. **Missing Completely at Random (MCAR)** – \(P(R=1|Y,Z)=P(R=1)\).  The probability of a record being observed does not depend on its value, so the sample is an unbiased subset.  
2. **Missing at Random (MAR)** – \(P(R=1|Y,Z)=P(R=1|Y)\).  Missingness may depend on observed variables but not on the unobserved part; we can condition on \(Y\) to recover consistency.  
3. **Not Missing at Random (NMAR)** – the missingness depends on \(Z\); inference requires explicit modelling of the joint mechanism.

Under MAR, the *likelihood* factorises as  
\[
L(\theta)=\prod_{i}\int p(Y_i,Z_i|\theta)p(R_i=1|Y_i)\,dZ_i,
\]
which is maximised by **Expectation–Maximisation (EM)** or multiple imputation. EM alternates between estimating the expected complete‑data log‑likelihood (E‑step) and updating \(\theta\) to maximise it (M‑step). Multiple imputation draws plausible values from the posterior predictive distribution of \(Z\), yielding several completed datasets whose results are pooled via Rubin’s rules, preserving uncertainty.

**Non‑obvious insight:**  
The *information loss* due to missingness is governed by *Fisher information*. Even under MAR, if the missingness pattern is highly skewed (e.g., almost all high‑value observations missing), the effective sample size can drop precipitously—often more than suggested by a simple count of observed cases. Thus, practitioners should examine the *missing‑data matrix* and perform sensitivity analyses to assess how much Fisher information is lost before choosing an imputation strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
