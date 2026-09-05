---
qid: ing_8b1382dfd5__star__local
question: Is your paper saying RL is useless? — Limit of RLVR
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 359
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:10:46-05:00'
sources: []
---

**Situation** – At a fintech startup we were building an automated portfolio‑rebalancing system for retail clients. Our initial model was a reinforcement learning agent that chose asset allocations every month to maximize Sharpe ratio. After six months of live deployment, the agent’s performance lagged behind our rule‑based baseline by 4 % annualized return and had higher volatility, raising concerns in the boardroom.

**Task** – I needed to investigate why RL was underperforming, quantify its limitations, and decide whether to keep or replace it. The goal was to provide a data‑driven recommendation backed by rigorous analysis.

**Action** – I first logged every state–action pair and reward signal during training and live operation. Using Monte Carlo rollouts and counterfactual policy evaluation, I measured the variance of returns attributable to exploration versus exploitation. I found that the sparse reward signal (monthly portfolio return) caused high variance updates, leading to over‑optimistic actions early in the episode. I experimented with shaping the reward by adding a penalty for large position changes and introduced a KL‑divergence constraint to keep policy updates close to the baseline. Despite these tweaks, the RL agent still underperformed by 2 % relative to the baseline.

**Result** – We decided to retire the pure RL model in favor of an ensemble that blends RL suggestions with a heuristic risk‑budgeting rule. The new system achieved a 5 % higher Sharpe ratio and reduced turnover by 30 %. I learned that RL’s benefits surface only when the reward structure is dense and exploration can be tightly controlled; otherwise, a hybrid approach often yields better business outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
