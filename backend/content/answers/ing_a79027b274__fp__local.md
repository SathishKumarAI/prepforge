---
qid: ing_a79027b274__fp__local
question: 'Explain: Hard Label Distillation — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 354
total_tokens: 523
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:01:26-05:00'
sources: []
---

**Hard‑label distillation (knowledge distillation)** is a technique for compressing a large, accurate neural network (the *teacher*) into a smaller one (the *student*).  
The fundamental problem it solves is the **model–data mismatch**: training data alone often underconstrains the student, especially when its capacity is limited. By exposing the student to the teacher’s output distribution on every input, we supply an additional source of supervision that reflects the teacher’s internal reasoning.

Why hard labels?  
Instead of passing the full soft probability vector (soft‑label distillation), we convert the teacher’s prediction into a one‑hot vector for its most confident class. The student is then trained to mimic this *hard* target using cross‑entropy loss. This forces the student to learn the same decision boundaries as the teacher without carrying over the entire distribution, which can be noisy or redundant.

The method rests on **information geometry**: the hard label lies at a vertex of the probability simplex, maximizing Kullback–Leibler divergence from the uniform distribution. By driving the student toward that vertex, we implicitly regularise it to agree with the teacher’s decision rule while keeping the loss landscape simple and stable.

**Non‑obvious insight:**  
Hard‑label distillation can actually *improve* generalisation beyond what the teacher achieved on the training set. Because the student ignores the soft probabilities that encode inter‑class similarities, it learns a sharper decision boundary that is less sensitive to label noise in the data—a phenomenon sometimes called “teacher sharpening.” This explains why, paradoxically, discarding probability information can yield better performance on unseen data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
