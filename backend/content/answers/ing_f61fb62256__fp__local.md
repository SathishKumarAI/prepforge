---
qid: ing_f61fb62256__fp__local
question: 'Explain: Assignments (45%) — Stanford University CS231n: Deep Learning
  for Computer Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 313
total_tokens: 491
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:42:52-05:00'
sources: []
---

**Why the CS 231n assignment weight matters**

The 45 % grading split is not arbitrary; it reflects the *optimization* that a learning‑based curriculum must strike between theory and practice.  
Deep learning algorithms are mathematical objects (loss functions, gradient descent, back‑propagation). Theoretical lectures expose their *derivations*, but the only way to internalize a derivation is to *implement* it and see how the equations behave with real data. Each assignment forces students to translate a formal update rule into code, exposing them to:

1. **Numerical stability** – e.g., why Adam’s “bias‑correction” terms are essential for early‑stage training.
2. **Hardware constraints** – batch size trade‑offs illustrate the geometry of stochastic gradients in high‑dimensional space.
3. **Regularization effects** – dropout and weight decay become tangible when a student observes validation curves.

A non‑obvious insight: *implementing an algorithm exposes its hidden hyperparameters*. For instance, turning on “weight normalization” may speed convergence but also change the implicit prior over model weights—an effect that theory glosses over but practice reveals.  

Thus, 45 % of the grade is allocated to assignments because only through disciplined implementation can students discover why the mathematics works *in the noisy, finite‑sample regime* that real computer vision problems inhabit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
