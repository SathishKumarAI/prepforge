---
qid: ing_9050c42c8a__faang__local
question: 'Explain: Soft Label Distillation (Temperature Scaling)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 501
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:19:52-05:00'
sources: []
---

**Clarify**  
You’re asking how *soft‑label distillation* works when you add a temperature parameter to the softmax. I’ll assume we’re training a student network from a pre‑trained teacher and that the goal is to transfer knowledge in a way that preserves class similarities.

**Approach**  
1. Compute teacher logits, scale by temperature \(T>1\).  
2. Apply softmax → obtain *soft labels* (probability distribution over classes).  
3. Train student with cross‑entropy against these soft labels, optionally mixing with hard one‑hot targets.  

**Depth**  
The softened probabilities expose inter‑class relationships: logits \(\mathbf{z}\) become \(\mathbf{z}/T\), so the output distribution \(q_i=\frac{\exp(z_i/T)}{\sum_j\exp(z_j/T)}\). A higher \(T\) flattens the distribution, reducing confidence on the true class and increasing probabilities for near‑neighbors. The student learns not just the hard target but also “how wrong” it can be in a relative sense. Loss:  
\[
L = \alpha\,H(\text{student}, y_{\text{hard}}) + (1-\alpha)\,T^2\,H(\text{student}, q_{\text{teacher}})
\]
The \(T^2\) factor balances gradients because the soft targets become less sharp.

**Edge Cases**  
- Too low \(T\): distribution nearly one‑hot → no benefit.  
- Too high \(T\): overly uniform → student learns nothing beyond entropy minimization.  
- Teacher with overconfident logits may dominate if \(\alpha\) is small.  
Testing involves varying \(T\) and \(\alpha\), monitoring validation accuracy and calibration.

**Optimize & Communicate**  
Start with a modest temperature (e.g., 2–5) and gradually tune. Use mixed loss to keep the student anchored to true labels, then shift weight to soft targets as training progresses. Explain that distillation is essentially a form of regularization: it injects knowledge about class similarity, improves generalization, and can reduce overfitting. This concise explanation shows clear problem framing, method, math, edge handling, and practical tuning—all key signals for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
