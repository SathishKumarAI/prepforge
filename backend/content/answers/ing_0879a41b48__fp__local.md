---
qid: ing_0879a41b48__fp__local
question: 'Explain: Key Principles For Monitoring Your ML System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 447
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:23:46-05:00'
sources: []
---

**Why we must monitor an ML system**

A deployed model is a *dynamic mapping* from inputs \(x\) to predictions \(\hat y\).  
During training it learns parameters \(\theta^\*\) that minimize a loss over a fixed distribution \(P_{\text{train}}\).  
Once online, the data stream may drift: \(P_{\text{online}}\neq P_{\text{train}}\), or the underlying concept may change.  
If we ignore this mismatch, error rates grow unboundedly—an optimization problem that never converges.

**Core monitoring principles**

| Principle | What it ensures | How to implement |
|-----------|-----------------|------------------|
| **Data drift detection** | Detect changes in feature distribution \(P(x)\) and joint \((x,y)\). | Online KL‑divergence, Wasserstein distance, or KS tests on sliding windows. |
| **Concept drift detection** | Identify shifts in the target relation \(y\mid x\). | Monitor validation loss, use incremental hypothesis testing (e.g., Page–Hinkley). |
| **Performance metrics** | Track precision/recall, AUC, calibration over time. | Time‑series dashboards; apply statistical process control charts. |
| **Resource & latency monitoring** | Ensure inference meets SLA and resource budgets. | Real‑time profiling of CPU/GPU usage, queue lengths. |
| **Explainability drift** | Verify that feature importance or SHAP values remain stable. | Track distribution of explanation scores. |

**Non‑obvious insight**

*Model stability is a *safety property* rather than just a performance metric.*  
Even if overall accuracy remains high, subtle shifts in the decision boundary can amplify errors on minority subgroups or rare but critical events.  
Thus, monitoring should include **robustness tests** (e.g., adversarial perturbations) and **fairness metrics** as part of the control loop, ensuring that optimization for average loss does not inadvertently violate safety constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
