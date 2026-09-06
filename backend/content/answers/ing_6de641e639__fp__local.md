---
qid: ing_6de641e639__fp__local
question: Does RL Add Capability or Sharpen Sampling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 348
total_tokens: 516
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:58:07-05:00'
sources: []
---

**Does reinforcement learning (RL) add capability or sharpen sampling?**  
From first principles, RL solves the *exploration–exploitation* dilemma by maximizing an expected return \(J(\pi)=\mathbb{E}_{\tau\sim \pi}\!\left[\sum_{t} r_t\right]\). The policy \(\pi_\theta(a|s)\) is a parametric distribution over actions; learning updates \(\theta\) to increase the probability of trajectories with high cumulative reward.  

Because the objective is *expected* rather than *optimal* in a single trajectory, RL does not strictly add new actions—it reshapes the sampling distribution so that **high‑value regions are visited more often**. In other words, it *sharpens* the sampler: the policy’s entropy \(\mathcal{H}[\pi]\) is reduced as learning proceeds, concentrating probability mass on rewarding behaviors while still retaining stochasticity for exploration.

A non‑obvious insight: **the degree of sharpening is controlled by the trade‑off between reward and entropy in the objective**. Introducing an explicit entropy bonus,
\[
J_\alpha(\pi)=\mathbb{E}\!\left[\sum_t r_t + \alpha\,\mathcal{H}[\pi(s_t)]\right],
\]
creates a *continuous spectrum* from pure capability (high reward, low entropy) to pure sampling (high entropy). Thus RL’s true power lies in *adaptive concentration*: it learns not just new skills but an efficient sampler that balances exploration with exploitation according to the problem’s structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
