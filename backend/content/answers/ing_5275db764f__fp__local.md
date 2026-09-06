---
qid: ing_5275db764f__fp__local
question: 'Explain: Sampled-Token OPD. — Rethinking On-Policy Distillation of Large
  Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 388
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:00:36-05:00'
sources: []
---

**Sampled‑Token On‑Policy Distillation (OPD)**  
The core problem is to transfer the *policy* of a large language model (LLM) to a smaller student while preserving generation quality. Traditional off‑policy distillation fixes a set of target tokens and trains the student to match their probabilities, but it ignores how the student will actually be used: at inference time its own predictions become the next input.  

OPD reframes distillation as an *online decision problem*. At each step we sample the teacher’s token from its distribution (hence “sampled‑token”), feed that token into both teacher and student, then compare their next‑step actions. The loss is the KL divergence between the two policies conditioned on the same history. This enforces *policy consistency* rather than just marginal probability matching.  

Why this works: In sequential generation the distribution of future states depends exponentially on past choices. By conditioning on the teacher’s own sample we expose the student to exactly those trajectories it will traverse, eliminating compounding error (the “covariate shift” problem). Mathematically OPD is a form of *on‑policy reinforcement learning* with a deterministic policy gradient: the KL term serves as a regularizer that pulls the student’s action distribution toward the teacher’s while allowing adaptation to the student's own dynamics.  

**Non‑obvious insight:** The sampled token need not be the teacher’s argmax; using entropy‑weighted sampling encourages exploration of diverse but plausible continuations, yielding a student that is *both* faithful and robust to its own stochasticity. This subtle shift from deterministic “teacher forcing” to probabilistic conditioning is what gives OPD its superior generalization in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
