---
qid: ing_a31de835af__fp__local
question: 'Explain: Part 3: Intro to Policy Optimization — Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 538
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:52:33-05:00'
sources: []
---

**Why a policy must be *optimized* in RL**

In supervised learning we minimize a loss over labeled data; the optimum is unique because the objective is convex (or at least well‑behaved).  
Reinforcement learning has no fixed targets: the return \(R_t=\sum_{k=0}^{\infty}\gamma^k r_{t+k}\) depends on the *policy* \(\pi_\theta(a|s)\) that generates actions.  Thus, to improve performance we must search in a space where the objective itself changes as we move—an **implicit functional optimization** problem.

**From the Bellman equation to a gradient**

The policy‑gradient theorem shows that
\[
\nabla_{\theta}J(\pi_\theta)=\mathbb{E}_{s,a}\!\left[\nabla_{\theta}\log \pi_\theta(a|s)\,Q^\pi(s,a)\right].
\]
Here \(Q^\pi\) is the *value* of taking action \(a\) in state \(s\).  Intuitively, we push parameters toward actions that yield higher return, weighted by how likely the policy already is to choose them.  The expectation over states and actions is estimated from trajectories—hence a Monte‑Carlo or bootstrapped sample.

**Why “policy optimization” rather than value‑iteration**

Policy methods sidestep the curse of dimensionality in the action space: we directly parameterize \(\pi_\theta\) (e.g., Gaussian networks for continuous actions).  Value iteration would require a lookup over all actions, which is infeasible when actions are high‑dimensional.  Policy gradients therefore *implicitly* solve the Bellman optimality condition while remaining tractable.

**A non‑obvious insight**

The gradient estimator contains \(\nabla_{\theta}\log\pi_\theta(a|s)\), a *score function*.  Because this term is zero-mean under \(\pi_\theta\), multiplying it by any constant (a baseline) does not change the expected update.  Many people overlook that choosing a good baseline—e.g., an estimate of \(V^\pi(s)\)—reduces variance dramatically, enabling stable learning even with sparse rewards.  This “baseline trick” is the bridge between pure policy gradients and actor‑critic algorithms, turning a naïve gradient into a practical, low‑variance learner.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
