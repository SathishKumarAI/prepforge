---
qid: ing_e39b8af5fa__faang__local
question: A customer says "the model got worse" after you upgraded model versions
  in their deployment. How do you verify and respond?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 403
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:28:17-05:00'
sources: []
---

**Clarify**  
> *Problem*: After deploying a newer model version, the customer reports degraded performance.  
> *Assumptions to confirm* – (1) What metric(s) are they observing? (2) Which dataset or user‑segment shows the drop? (3) Was there any change in data preprocessing or feature engineering during the upgrade?  

**Approach**  
1. **Reproduce locally**: Load the same test set and run both old and new models to compare metrics.  
2. **Audit deployment pipeline**: Verify that the exact weights, hyper‑parameters, and environment (Python/pytorch versions) match what was tested.  
3. **Data drift check**: Compare feature distributions between training data and current input; a shift can explain apparent degradation.  

**Depth**  
- Compute key metrics (accuracy/F1, AUC, latency) for both models on identical data – O(n).  
- If the new model truly underperforms on the same data, roll back or revert to a “canary” deployment.  
- If performance is similar locally but worse in production, investigate post‑processing or inference pipeline (e.g., quantization errors, GPU vs CPU differences).  

**Edge Cases**  
- *Sample size*: small test set may hide variance; use bootstrap confidence intervals.  
- *Concept drift*: real user data diverging from training distribution.  
- *Deployment bugs*: missing feature columns or wrong mapping.  

**Optimize & Communicate**  
Explain the systematic check, present metric tables, and outline next steps: rollback if regression confirmed, otherwise investigate data drift or pipeline issues. Emphasize that continuous monitoring (A/B tests, canary releases) will catch such regressions early. This structured approach demonstrates clear problem framing, rigorous validation, and transparent communication—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
