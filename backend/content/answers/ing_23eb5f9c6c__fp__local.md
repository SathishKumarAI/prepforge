---
qid: ing_23eb5f9c6c__fp__local
question: 'Explain: F7: Judge model deprecation — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 482
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:21:55-05:00'
sources: []
---

**F7: Judge Model Deprecation – Evaluation‑Gated CI/CD**

When a deployed ML model is *deprecated*, the core problem is that its predictive surface \(f_{\theta}\) no longer satisfies the current service constraints (accuracy, drift, regulatory compliance).  
To decide whether to retire or roll back \(f_{\theta}\), we must compare it against an alternative \(f_{\phi}\) under a *gated* continuous‑integration/continuous‑deployment (CI/CD) workflow.  

1. **Formulate the decision as an optimization problem**  
   \[
   \min_{\text{action}\in\{\text{retain},\text{replace}\}} \mathbb{E}_{x}\bigl[L(f_{\theta}(x),y)-L(f_{\phi}(x),y)\bigr] + \lambda\,C(\text{action})
   \]
   where \(L\) is the loss, and \(C\) captures operational cost (downtime, retraining effort).  
   The expectation is estimated on a *fresh* validation stream that mirrors production.

2. **Gating via statistical hypothesis testing**  
   The CI pipeline runs an online test: null hypothesis \(H_0:\mathbb{E}[L_{\theta}]\le \mathbb{E}[L_{\phi}]+ \epsilon\). Rejecting \(H_0\) triggers a mandatory rollback; otherwise, the new model passes the gate.  
   This ensures that only statistically significant improvements survive.

3. **Why this works**  
   *Optimization* guarantees we pick the action with lowest expected loss plus cost.  
   *Information theory* tells us that the test’s power equals the mutual information between performance differences and the chosen action; thus, richer validation data directly increases gate reliability.  

**Non‑obvious insight:** The gate should be *adaptive*: as drift statistics change, so must \(\epsilon\) and \(\lambda\). A fixed threshold leads to either premature rollbacks (high false positives) or missed degradations (false negatives). By tying the gate parameters to real‑time monitoring of concept drift, we maintain a constant expected regret bound across deployment cycles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
