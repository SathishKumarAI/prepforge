---
qid: ing_a9a42b85f5__fp__local
question: 'Explain: Recap ¶ — Part 3: Intro to Policy Optimization \u2014 Spinning
  Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 437
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:05:55-05:00'
sources: []
---

**Recap ¶ – Part 3: Intro to Policy Optimization (Spinning‑Up)**  

Policy optimisation tackles the *control* part of reinforcement learning: we seek a stochastic mapping  
\(\pi_{\theta}(a|s)\) that maximises expected return \(J(\theta)=\mathbb{E}_{\tau}\!\left[\sum_{t} \gamma^{t}r(s_t,a_t)\right]\).  
The Spinning‑Up text frames this as an **objective‑gradient problem**: we treat \(J(\theta)\) as a differentiable function of the policy parameters and move in its ascent direction.  

1. **Why gradients?**  The environment is a black box; direct enumeration of actions is impossible, but the *policy gradient theorem* guarantees  
\[
\nabla_{\theta} J(\theta)=\mathbb{E}_{s,a}\!\left[\nabla_{\theta}\log \pi_{\theta}(a|s)\,Q^{\pi}(s,a)\right],
\]
linking local policy changes to global returns.  
2. **Why stochasticity?**  A deterministic policy would collapse exploration; the log‑probability term naturally injects variance that can be reduced with baselines (e.g., value functions).  
3. **Why surrogate objectives?**  In practice we cannot evaluate \(J(\theta)\) exactly, so we maximise a *surrogate* built from sampled trajectories and a critic estimate, leading to algorithms like REINFORCE, Actor‑Critic, PPO, etc.

A non‑obvious insight: the *entropy bonus* is not merely a curiosity—its gradient term actually regularises the policy distribution, preventing premature collapse to deterministic actions. In high‑dimensional action spaces this subtle bias can be the difference between learning and stagnation.  

Spinning‑Up therefore presents policy optimisation as an elegant application of stochastic optimisation in the presence of noisy, delayed rewards, grounding each algorithm in a clear mathematical objective while emphasising practical tricks that make training stable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
