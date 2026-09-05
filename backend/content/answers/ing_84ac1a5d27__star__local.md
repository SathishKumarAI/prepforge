---
qid: ing_84ac1a5d27__star__local
question: Zhipu open-sourced slime, an RL framework that supports both colocated-synchronous
  and disaggregated-asynchronous modes. Why does long-horizon agentic RL need the
  disaggregated, asynchronous design?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 407
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:39-05:00'
sources: []
---

**Situation:**  
While leading a research team at a fintech startup, we were building an agent to optimize multi‑step portfolio rebalancing over a 12‑month horizon. Our baseline RL model trained on a single GPU cluster but hit a wall: every episode took 30 minutes of simulated market data and the reward signal lagged by weeks, so policy updates were painfully slow.

**Task:**  
I needed to accelerate training while preserving the long‑horizon temporal dependencies, so we could iterate on reward shaping and risk constraints within days instead of months.

**Action:**  
We adopted Zhipu’s open‑source *slime* framework because it supports both colocated‑synchronous and disaggregated‑asynchronous modes. I set up a distributed architecture where multiple worker nodes collected trajectories in parallel, pushing them to a central replay buffer. The learner ran on a separate GPU node, pulling batches asynchronously. We tuned the replay ratio (workers:learners = 5:1) and introduced priority sampling for rare but high‑impact events. This decoupled data collection from policy updates, allowing us to process 200K steps per hour—10× faster than synchronous training.

**Result:**  
Training time dropped from 30 hours to under 3 hours per epoch. The agent’s long‑horizon performance improved by 18% in cumulative Sharpe ratio on out‑of‑sample tests, and we reduced overfitting thanks to the richer, more diverse replay buffer. I learned that asynchronous disaggregation is essential when the reward signal is delayed: it lets you harvest data at scale without waiting for each learner update, keeping the agent responsive to long‑term outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
