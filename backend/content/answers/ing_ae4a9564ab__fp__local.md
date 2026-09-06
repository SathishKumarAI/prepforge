---
qid: ing_ae4a9564ab__fp__local
question: 'Explain: Three-Way Decision: Approve / Escalate / Reject'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 474
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:15:11-05:00'
sources: []
---

**Three‑Way Decision (Approve / Escalate / Reject)**  
At its core, the problem is *classification under uncertainty* with asymmetric costs. We observe a feature vector \(x\) and must decide whether an AI‑generated output should be accepted, sent for human review, or discarded.  

Let \(\ell_a,\ell_e,\ell_r>0\) denote the loss of Approve, Escalate, Reject respectively, conditioned on the true class (e.g., correct vs. incorrect). The Bayes decision rule minimises expected loss:  
\[
\text{Decide }d(x)=\arg\min_{d\in\{\!a,e,r\!\}}\sum_y P(y|x)\,\ell_d(y).
\]  
Because the losses are not equal, the optimal policy is *not* a simple threshold on confidence. Instead, we partition the posterior space into three regions defined by two thresholds \(\tau_1<\tau_2\):  
- If \(P(\text{correct}|x)>\tau_2\), Approve (low loss).  
- If \(\tau_1<P(\text{correct}|x)<\tau_2\), Escalate (moderate loss, but we can still correct errors).  
- If \(P(\text{correct}|x)<\tau_1\), Reject (high risk of harm).

These thresholds are derived analytically from the ratio \((\ell_e-\ell_a)/(\ell_r-\ell_e)\) and the prior class probabilities—linking the rule to *optimal transport* in decision space.

**Non‑obvious insight:**  
The middle “escalate” region need not be a single interval; if the loss function has non‑convexities (e.g., due to regulatory penalties), multiple disjoint escalation zones can emerge. This reflects the fact that some low‑confidence predictions are *safe* to accept because they fall into a rare but benign class, while other low‑confidence cases warrant rejection. Thus, a naïve single threshold overlooks nuanced risk profiles inherent in the data distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
