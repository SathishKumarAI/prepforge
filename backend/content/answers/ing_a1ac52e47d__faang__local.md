---
qid: ing_a1ac52e47d__faang__local
question: 'Explain: Underfitting and overfitting machine learning models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 487
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:00:31-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *under‑fitting* vs *over‑fitting* in supervised ML, including why they matter for generalization and how we detect/mitigate them.

---

**Approach**  
1. Define each term with intuition.  
2. Explain the bias–variance trade‑off that governs both.  
3. Mention practical diagnostics (training vs validation curves).  
4. List mitigation tactics.  

---

**Depth**  
- **Under‑fitting**: The hypothesis space is too limited; model has high *bias* and cannot capture patterns in the training data. Training error remains large. Typical causes: too few features, overly simple models (e.g., linear regression on nonlinear data), or excessive regularization.  
- **Over‑fitting**: The model captures noise; it has low bias but high *variance*. Training error is near zero while validation/test error spikes. Causes: too many parameters, insufficient training samples, lack of regularization, or noisy labels.  

The bias–variance trade‑off formalizes this: as model complexity ↑ → bias ↓, variance ↑. The goal is to find the sweet spot minimizing expected test error.

**Diagnostics**  
- Plot learning curves: training loss vs epochs and validation loss.  
- High gap between train & val indicates over‑fit; both high indicates under‑fit.  

**Mitigation**  
- Under‑fit: add features, increase model capacity (deepening network), reduce regularization.  
- Over‑fit: use dropout, L1/L2 penalties, early stopping, cross‑validation, gather more data, simplify architecture.

---

**Edge Cases**  
- Small datasets with complex models → inevitable over‑fit unless we apply strong regularization or transfer learning.  
- Extremely noisy labels can cause a model to learn noise even if under‑fitting seems absent; robust loss functions help.  

---

**Optimize & Communicate**  
Explain that the ultimate metric is *generalization error* on unseen data, not training performance. Emphasize iterative experimentation: start simple, monitor curves, then incrementally add capacity or regularization while keeping an eye on validation loss. This systematic approach mirrors production ML pipelines and demonstrates clear reasoning to FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
