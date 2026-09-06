---
qid: ing_666ed132ea__fp__local
question: Define pass@k. Why is the naive way of computing it problematic, and what's
  the fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 615
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:42:56-05:00'
sources: []
---

### From first principles

When an AI system produces a ranked list of candidates, the **fundamental question** is whether *any* correct item appears early enough to be useful.  
Formally, for each query let \(R\) be the rank (1‑based) of the nearest correct answer.  
The metric  

\[
\text{pass@}k \;=\;\Pr(R\le k)
\]

is the probability that a random query is “passed” by having at least one true item in its top‑\(k\) list.

---

### Why the naïve estimator fails

A common estimate is  
\[
\widehat{\text{pass@}k}= \frac{1}{N}\sum_{i=1}^{N}\mathbf 1_{\{R_i\le k\}},
\]
where \(N\) queries are evaluated once.  
This suffers from **sampling bias**:

* If the model’s ranking is noisy, a single evaluation may misplace a correct item just outside the threshold, yet the probability that *any* of many plausible answers falls inside remains high.
* The estimator conflates two sources of randomness: (i) the stochasticity of the test set and (ii) the random ranking produced by the model.  
  Averaging over one draw ignores the second source, leading to a **high‑variance, biased estimate** that can even exceed the true pass@k when the model is well calibrated.

---

### The fix

Treat each query as an *independent Bernoulli trial* with success probability \(p_k=\Pr(R\le k)\).  
Estimate \(p_k\) by drawing **multiple independent rankings per query** (e.g., via temperature‑controlled sampling or Monte Carlo dropout), then compute the empirical mean across all draws.  
Equivalently, use a *bootstrap* over queries and over ranking samples to obtain confidence intervals.

---

### Non‑obvious insight

Pass@k is essentially a **cumulative distribution function** of the rank variable \(R\).  
Thus, improving pass@k is equivalent to shifting mass leftward in the rank distribution—an optimization problem that can be tackled by *learning to rank* objectives (e.g., listwise NDCG) rather than pointwise losses.  Recognizing this link explains why calibration‑focused methods (like temperature scaling) often yield disproportionate gains in pass@k.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
