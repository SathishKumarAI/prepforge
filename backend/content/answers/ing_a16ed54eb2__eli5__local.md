---
qid: ing_a16ed54eb2__eli5__local
question: 'Explain: 3.3 Stage I: Learning an Entropy-Regularized Objective'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 228
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:53:53-05:00'
sources: []
---

Imagine you’re training a robot to pick up objects on a cluttered table. The robot’s goal is two‑fold: (1) it must learn a rule that tells it which object to grab next (the “objective”), and (2) it should stay curious enough to try different moves instead of always picking the same one (the “entropy regularizer”).  

In Stage I, we let the robot experiment freely. Every time it tries a move, we reward it if the move leads to a better outcome and also give a tiny bonus for trying something new. This bonus is the entropy term: it keeps the robot’s choices spread out over many possibilities. By balancing the main reward with this curiosity bonus, the robot learns a robust rule that works well while still exploring enough to avoid getting stuck in a bad routine.  

So Stage I is simply “teach the robot by rewarding good moves and encouraging variety,” which sets the foundation for more refined learning later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
