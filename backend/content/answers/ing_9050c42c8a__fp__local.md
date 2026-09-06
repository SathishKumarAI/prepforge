---
qid: ing_9050c42c8a__fp__local
question: 'Explain: Soft Label Distillation (Temperature Scaling)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 396
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:11:58-05:00'
sources: []
---

**Soft‑label distillation (temperature scaling)** emerges from the *information bottleneck* between a complex teacher network and a lightweight student.  
Suppose the teacher outputs logits \(z_i\) for class \(i\). The cross‑entropy loss with hard labels forces the student to match only one target probability, discarding most of the teacher’s knowledge about inter‑class similarities. By dividing logits by a temperature \(T>1\),
\[
q_i=\frac{\exp(z_i/T)}{\sum_j \exp(z_j/T)},
\]
we smooth the distribution: probabilities become less peaked and encode richer relational cues (e.g., “dog” and “wolf” are more similar than “dog” and “cat”).  

From an optimization viewpoint, the softened targets enlarge the gradient signal. The loss
\[
L=\sum_i q_i \log p_i
\]
(where \(p_i\) is the student’s softmax output) has a Jacobian proportional to \(q_i-p_i\). When \(T\) is large, all \(q_i\) are non‑zero, so even low‑probability classes contribute gradients that guide the student toward the teacher’s manifold of solutions. This combats over‑confident predictions and reduces variance in the learned representation.

**Non‑obvious insight:** Temperature scaling is not merely a hyperparameter; it implicitly controls the *effective dimensionality* of the learning problem. A high \(T\) projects the logits onto a lower‑dimensional subspace where inter‑class distinctions are softer, making the student’s decision boundary smoother and more generalizable—especially critical when training data are scarce or noisy. Thus, distillation with temperature is an elegant manifestation of *regularization by knowledge transfer* rooted in information theory and convex geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
