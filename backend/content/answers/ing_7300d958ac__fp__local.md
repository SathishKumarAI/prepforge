---
qid: ing_7300d958ac__fp__local
question: 'Explain: Other Forms of the Policy Gradient ¶ — Part 3: Intro to Policy
  Optimization \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 532
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:09:15-05:00'
sources: []
---

**Other Forms of the Policy Gradient – Part 3: Intro to Policy Optimization**

At its core a reinforcement‑learning agent seeks a mapping  
\(\pi_\theta(a|s)\) that maximises expected return  
\(J(\theta)=\mathbb{E}_{\tau\sim\pi_\theta}\!\big[\sum_t r_t\big]\).  
Differentiating \(J\) w.r.t. \(\theta\) yields the *policy‑gradient theorem*:

\[
\nabla_{\!θ}J(\theta)
  =\mathbb{E}_{s,a\sim\pi_\theta}\!\Big[
      \nabla_{\!θ}\log\pi_\theta(a|s)\;Q^{π}(s,a)\Big].
\]

The term \(Q^π(s,a)=\mathbb{E}[\sum_{t'≥0}r_{t'}\,|\,s_t=s,a_t=a]\) is the *action‑value* function.  
Since \(Q^π\) is unknown, we replace it with an unbiased estimator:
- **Monte‑Carlo returns**: sum of future rewards from a sampled trajectory (high variance).
- **Advantage functions** \(A(s,a)=Q^π(s,a)-V^π(s)\): cancel common state value terms, reducing variance.
- **Generalised Advantage Estimation (GAE)**: exponentially weighted sums of temporal‑difference residuals; it bridges bias–variance trade‑offs.

Why must the gradient take this form?  
1. **Score function identity** (\(\nabla_\theta\pi = \pi\nabla_\theta\log\pi\)) lets us pull the policy out of an expectation over trajectories.  
2. The *likelihood ratio* trick ensures we only need samples from \(\pi_\theta\), not the unknown environment dynamics.  

A subtle insight: **policy gradients are inherently unbiased regardless of how we estimate \(Q^π\)**, provided the estimator’s expectation equals \(Q^π\). This means we can plug in *any* critic (even a learned value network) and still preserve correctness—only variance changes. Recognising this flexibility unlocks modern algorithms like PPO or TRPO that combine policy‑gradient theory with sophisticated trust‑region constraints for stable, efficient learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
