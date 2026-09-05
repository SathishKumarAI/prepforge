---
qid: ing_fe8f161b56__star__local
question: 'Explain: Types of Reinforcements — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 329
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:45-05:00'
sources: []
---

**Situation** – At my last internship I was tasked with improving a recommendation engine for an e‑commerce platform that had seen a 12 % drop in click‑through rate over the past quarter. The product team wanted a system that could adapt to user feedback in real time rather than rely on batch training.

**Task** – My goal was to implement a reinforcement learning (RL) framework that could learn from both explicit rewards (purchases, add‑to‑cart) and implicit signals (time spent viewing). I needed to decide which type of reinforcement—positive, negative, or sparse—and how to structure the reward function to balance exploration and exploitation.

**Action** – I chose a policy‑gradient approach using Proximal Policy Optimization (PPO) in PyTorch. For positive reinforcement I used purchase revenue as a dense reward; for negative reinforcement I penalized cart abandonments and timeouts with small negative values. To handle sparse feedback, I incorporated shaped rewards by adding click signals scaled by user dwell time. I also introduced an epsilon‑greedy exploration schedule that decayed from 0.3 to 0.05 over two weeks.

**Result** – After a month of deployment, the system lifted the click‑through rate by 18 % and increased average order value by 7 %. The experience taught me how different reinforcement signals interact in practice and how careful reward shaping can turn sparse feedback into actionable learning signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
