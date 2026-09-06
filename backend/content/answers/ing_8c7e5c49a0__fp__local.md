---
qid: ing_8c7e5c49a0__fp__local
question: Your churn model has 0.9 AUC. Product wants to send retention discounts
  to the top 5%. Why might that be a bad plan?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 453
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:03:51-05:00'
sources: []
---

A 0.90 AUC tells you the model is *good* at ranking customers from most to least likely to churn.  
But “top 5 % of predicted risk” is a *selection rule*, not a probability calibration.  
With an imperfect model, the 5 % slice will contain many users who would have stayed and few who actually churned.  

Why this matters:

| Principle | Why it forces caution |
|-----------|-----------------------|
| **Decision‑cost asymmetry** | Sending discounts to non‑churners costs revenue; missing true churners costs future loss. A 0.90 AUC still leaves a large misclassification rate in the top slice. |
| **Calibration vs discrimination** | AUC ignores whether predicted scores reflect true probabilities. Even if rank order is right, the *expected* number of actual churners in the 5 % could be far below what the discount budget assumes. |
| **Expected value calculation** | Let \(p_i\) be the model’s probability for customer \(i\). The expected cost of a discount is \(\sum_{i\in S} c\,p_i\), where \(c\) is the future loss avoided per churn. If the sum of \(p_i\)’s in the top 5 % is less than the budgeted benefit, the plan loses money. |
| **Budget‑constrained optimization** | The optimal policy under a fixed discount budget is to pick customers with the highest *expected marginal benefit* \((L_{\text{churn}}-L_{\text{discount}})\times p_i\), not simply the top rank. |

A non‑obvious insight: **AUC does not guarantee that the “top k” slice contains enough high‑probability churners to justify a uniform discount policy**. To avoid waste, calibrate probabilities (e.g., Platt scaling) and solve a constrained optimization that selects customers maximizing expected benefit under budget constraints. This aligns the model’s output with the business objective rather than relying on rank alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
