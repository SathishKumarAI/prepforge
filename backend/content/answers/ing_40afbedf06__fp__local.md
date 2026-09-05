---
qid: ing_40afbedf06__fp__local
question: You want to detect a 3-point improvement in pass rate. How many eval examples
  do you need, and how do you get that number down?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 994
total_tokens: 1183
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:22:12-05:00'
sources: []
---

**From first principles**

We want to test  
\(H_0:p\le p_0 \) vs \(H_a:p=p_0+0.03\).  
The fundamental problem is estimating a binomial proportion with enough precision that a 3‑point shift is statistically significant.  
For two independent samples the optimal (minimum‑variance) estimator of \(p\) has variance  
\(\operatorname{Var}(\hat p)=p(1-p)/n\).  
To detect \(\Delta=0.03\) with significance level \(\alpha\) and power \(1-\beta\), a Wald‑type test gives the classic sample‑size formula  

\[
n=\frac{(z_{\alpha/2}+z_\beta)^2\,[p_0(1-p_0)+(p_0+\Delta)(1-p_0-\Delta)]}{\Delta^2}\,.
\]

Assuming a baseline \(p_0=0.50\), \(\alpha=0.05\) (two‑sided) and 80 % power (\(z_{\alpha/2}=1.96,\; z_\beta=0.84\)),

\[
n=\frac{(2.8)^2[0.25+0.2491]}{0.0009}\approx 4\,340
\]

per group, i.e. about **8 700 evaluation examples** in total.

---

### How to shrink that number

| Strategy | Why it helps |
|----------|--------------|
| **One‑sided test** (if improvement is the only plausible direction) | \(z_{\alpha}\) drops from 1.96 to 1.64, saving ~25 % of n. |
| **Paired / matched evaluation** | Use the same 3‑point instances before/after; variance reduces roughly by a factor \((1-\rho)\), where \(\rho\) is the correlation between paired scores. Even modest \(\rho=0.2\) cuts n by ~30 %. |
| **Sequential / adaptive testing** | Stop early when evidence reaches threshold, often halving the average cost. |
| **Bayesian shrinkage** | Incorporate prior knowledge of \(p_0\); posterior variance shrinks faster than frequentist variance, especially with many small batches. |
| **Increase baseline p** | Since \(\operatorname{Var}\) is maximized at 0.5, if the true pass rate is higher (e.g., 0.70), fewer samples are needed for the same Δ. |

---

#### Non‑obvious insight

The *effective* sample size is not simply \(n\); it is modulated by the **intraclass correlation** among evaluation instances. When you reuse the same prompts across multiple runs or compare models on identical test sets, the covariance between outcomes can be substantial. Accounting for this correlation in a mixed‑effects model (or by explicitly reducing the number of unique prompts) often yields a 15–25 % reduction in required evaluations—an effect many overlook when planning experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
