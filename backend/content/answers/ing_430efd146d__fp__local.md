---
qid: ing_430efd146d__fp__local
question: 'Explain: Entropy and Entropy Gap. — Rethinking On-Policy Distillation of
  Large Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 422
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:27:24-05:00'
sources: []
---

### Entropy & Entropy Gap in On‑Policy Distillation  

**Problem:**  
When a student language model (LM) learns from a teacher LM via on‑policy rollouts, the student’s action distribution must mimic the teacher’s *policy* while also being *sample‑efficient*. The core obstacle is that the teacher’s policy can be highly peaked yet still carry uncertainty about future tokens—this is captured by **entropy**.  

**Why entropy matters:**  
Entropy \(H(p)= -\sum_{a} p(a)\log p(a)\) measures the expected surprise of sampling from distribution \(p\). In language, a high‑entropy token choice indicates many plausible continuations; a low‑entropy choice signals strong confidence. Distillation objectives that merely minimize KL divergence ignore the *gap* between teacher and student entropies:  

- If the student’s entropy is **lower** than the teacher’s (over‑confident), it will overcommit to wrong tokens, hurting generalization.  
- If the student’s entropy is **higher**, it remains uncertain and fails to match the teacher’s sharp predictions.  

**Entropy Gap:**  
Define \(\Delta H = H_{\text{teacher}} - H_{\text{student}}\). Minimizing \(|\Delta H|\) aligns the *confidence* profiles of both models, ensuring that the student not only reproduces token probabilities but also their uncertainty structure. This is crucial for on‑policy rollouts where future predictions feed back into current decisions—an error in entropy propagates exponentially.  

**Non‑obvious insight:**  
Entropy gap control implicitly regularizes *information flow* through the network: by matching entropies, we enforce that the student’s hidden representations preserve the teacher’s *mutual information* with future tokens. This yields better sample efficiency and reduces catastrophic forgetting in continual distillation settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
