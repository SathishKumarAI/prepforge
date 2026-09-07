---
qid: ing_472550bc87__faang__local
question: 'Explain: Q115: Your team''s eval scores keep improving but production complaints
  are flat. Diagnose the eval gaming problem and redesign the eval system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 443
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:29:32-05:00'
sources: []
---

**Clarify**  
We’re seeing higher test‑set metrics (e.g., accuracy, BLEU) but user complaints stay constant. Likely the model is overfitting to our evaluation benchmark while ignoring real‑world signals. I’d confirm:  

- What metric drives the “eval score”?  
- How are production complaints collected and labeled?  
- Does the test set reflect production data distribution (domain shift, noise, edge cases)?

**Approach**  
1. **Audit data alignment** – compare feature distributions between eval set and live traffic.  
2. **Introduce adversarial / noisy examples** to the eval set.  
3. **Add downstream signals**: latency, user engagement, A/B test results.  
4. **Use a multi‑objective loss** that penalizes over‑confidence on eval‑only patterns.  
5. **Continuous monitoring pipeline** – automatic drift alerts and rollback triggers.

**Depth**  
- *Data shift detection*: use KS‑test or MMD to flag distribution gaps.  
- *Adversarial augmentation*: generate paraphrases, add typos, simulate user errors (≈ 10% of eval samples).  
- *Multi‑objective loss*: λ₁*task_loss + λ₂*domain_penalty where domain_penalty = KL(pred_eval‖pred_prod).  
- Complexity: O(n) per batch for additional loss; memory overhead negligible.  

**Edge Cases**  
- Rare but critical user intents may still slip through if not represented in eval.  
- Over‑penalizing could degrade true positives; need to tune λ₂.  
- Drift detection must avoid false positives from temporary traffic spikes.

**Optimize & Communicate**  
Explain that the new system balances **statistical fidelity** (better alignment) with **business impact** (user satisfaction). Show a diagram of the feedback loop: Production → Drift Detector → Augmented Eval → Model Update. Highlight expected outcome: reduced complaint churn while maintaining or improving test metrics, and faster detection of future misalignments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
