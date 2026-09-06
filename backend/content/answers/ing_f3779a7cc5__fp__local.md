---
qid: ing_f3779a7cc5__fp__local
question: 'Explain: For example, it could reject requests from'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 398
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:36:28-05:00'
sources: []
---

In a supervised learner the **decision rule** is derived by minimizing expected loss  
\(L(a,x)=\mathbb{E}_{y|x}[\,\ell(a,y)\,]\).  
If the cost of *action* “reject” (e.g., abstain from classifying) is
\(c_{\text{rej}}\), then the optimal policy chooses the label \(a^*(x)\) that
minimizes

\[
L_{\text{opt}}(x)=\min_{y}\,\mathbb{E}_{y|x}[\,\ell(y,y')\,] \quad\text{vs.}\quad c_{\text{rej}} .
\]

Thus, **rejection occurs whenever the minimal conditional risk is larger
than \(c_{\text{rej}}\)**.  
Why must this happen?  
1. **Uncertainty**: The posterior \(p(y|x)\) spreads out; no class dominates,
so any prediction carries high expected loss.  
2. **Risk–utility trade‑off**: Rejecting incurs a fixed penalty but avoids
potential misclassification that could be more costly (e.g., medical diagnosis).  
3. **Geometry of decision boundaries**: Points near the boundary of convex hulls
have mixed class support; the Bayes risk there is high, so the learner abstains.

A subtle insight: *rejection can improve overall calibration*.
By learning to refuse ambiguous inputs, a model reduces overconfident errors,
leading to better calibrated posterior probabilities on the accepted set.  
Hence rejection is not merely a safety net but an integral part of optimal
decision theory in probabilistic classification.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
