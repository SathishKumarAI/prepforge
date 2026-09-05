---
qid: vq_840d3c068b__fp__local
question: What does it mean to have high and low p-values?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 464
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:43:57-05:00'
sources: []
---

### From the Problem to the P‑Value

When we test a claim (the *null hypothesis* \(H_0\)), we observe data \(X\).  
The fundamental question is: **how surprising would \(X\) be if \(H_0\) were true?**  
If \(X\) lies in a region that is unlikely under the null distribution, we suspect \(H_0\) is wrong.

Formally, the *p‑value* is  

\[
p = P_{H_0}\bigl(T(X)\ge T(x_{\text{obs}})\bigr),
\]

where \(T(\cdot)\) is a test statistic (e.g., mean difference).  
It is the tail probability of observing a statistic at least as extreme as the one we actually saw, assuming \(H_0\).

### High vs. Low

* **Low p‑value** (< α, e.g., 0.05): the observed data are in an unlikely tail; we reject \(H_0\).  
* **High p‑value**: the data fall in a typical region of the null distribution; we do *not* reject.

The p‑value is not “probability that \(H_0\) is true”; it’s probability of the data under \(H_0\).

### Deeper Insight

A p‑value is essentially an **information‑theoretic score**: it measures how much the observed evidence shifts us from the prior assumption that \(H_0\) holds.  
Low values indicate a substantial *entropy reduction* in our belief about the hypothesis, while high values preserve entropy.

#### Non‑obvious Point

Because p‑values are tail probabilities, **they are invariant under monotone transformations of the test statistic**.  
Thus, any re‑scaling that preserves order (e.g., converting a z‑score to a t‑score) leaves the p‑value unchanged—a fact often overlooked when comparing tests across different scales.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
