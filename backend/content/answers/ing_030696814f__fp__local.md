---
qid: ing_030696814f__fp__local
question: 'Explain: Percy Liang — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 424
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:11:24-05:00'
sources: []
---

**Percy Liang – CS 324 (Machine‑Learning)**  
The course website is a living laboratory for the *design* of machine‑learning systems, not merely an archive of lecture notes. At its core it tackles the problem: **how to turn data into reliable predictive models while keeping the learning process transparent and controllable**.

1. **Fundamental problem** – In supervised learning we observe \((x_i,y_i)\) pairs and wish to approximate a function \(f\). The *bias–variance trade‑off* tells us that overly flexible models overfit, while overly rigid ones underfit. CS 324 frames this as an optimization over a space of *structured hypotheses*, where the learner must choose both a model family (e.g., neural nets, kernel methods) and regularization hyper‑parameters.

2. **Why it works** – The site’s modules interleave theory with hands‑on coding, enforcing that every derivation be immediately testable. This mirrors the principle of *algorithmic reproducibility*: if you can’t code the math, you don’t understand it.

3. **Deeper connection** – The course constantly refers to *information‑theoretic* limits (e.g., VC dimension, Rademacher complexity) as guarantees that a learning algorithm will generalize. Geometry enters via convex optimization and kernel tricks; probability appears in PAC bounds and Bayesian priors.

4. **Non‑obvious insight** – Many students assume the “best” model is simply the one with lowest training error. CS 324 stresses that *model interpretability*—the ability to explain why a prediction was made—is itself an optimization objective. By treating explanations as constraints, we obtain models that are both accurate and trustworthy, a subtlety often overlooked in standard curricula.

In short, Percy Liang’s CS 324 page is not just a syllabus; it’s a blueprint for building learning systems that respect the theoretical limits of generalization while remaining practically deployable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
