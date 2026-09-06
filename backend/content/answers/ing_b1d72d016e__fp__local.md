---
qid: ing_b1d72d016e__fp__local
question: 'Explain: Part 3: Intro to Policy Optimization ¶ — Part 3: Intro to Policy
  Optimization \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 454
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:22:23-05:00'
sources: []
---

**Why policy optimisation is the heart of modern RL**

Reinforcement learning seeks a *policy* \(\pi_\theta(a|s)\) that maximises expected return  
\(J(\theta)=\mathbb{E}_{\tau\sim\pi_\theta}\!\left[\sum_{t} r_t\right]\).  
Unlike supervised learning, the data distribution depends on the very policy we are trying to learn.  This self‑referential loop means that *gradient‑based* optimisation cannot be applied directly; instead we must estimate how a tiny change in \(\theta\) shifts \(J\).

The key insight is that the gradient of \(J\) can be expressed without knowing the environment dynamics:

\[
\nabla_\theta J(\theta)=
\mathbb{E}_{s,a}\!\left[\nabla_\theta\log\pi_\theta(a|s)\,Q^\pi(s,a)\right].
\]

This is the **policy‑gradient theorem**.  It arises from differentiating under the expectation and cancelling the policy’s own probability term—an elegant application of the *likelihood‑ratio trick* in statistics.  The resulting estimator is unbiased but often high‑variance, so practical algorithms (REINFORCE, actor–critic, PPO) introduce baselines, advantage functions, or clipping to stabilize learning.

**Deep principle:** optimisation over a stochastic policy distribution is equivalent to maximising an *expected log‑likelihood* weighted by returns—an information‑theoretic view of “exploit the best actions while preserving exploration”.  The policy’s entropy term naturally emerges as a regulariser that keeps the search space rich.

**Non‑obvious insight:**  
The variance of the gradient estimator is dominated not just by reward noise but by *policy entropy*.  A highly deterministic policy yields low entropy but large variance because small parameter changes produce huge probability shifts.  Conversely, adding a modest entropy bonus reduces variance and improves convergence—an effect that often outweighs its apparent “exploration cost”.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
