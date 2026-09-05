---
qid: ing_fe4f8117b7__eli5__local
question: 'Explain: Evolution of AI Agents (2020-2025) — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 292
total_tokens: 457
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:17:50-05:00'
sources: []
---

Imagine building a robot that learns to play a video game.  
In 2020, the robot was mostly a *rule‑based* player—human designers wrote every move it could make.  
By 2021, we started letting the robot learn from data: it watched many games and tried to predict the best next action. That’s **supervised learning** – the agent gets examples of good moves and copies them.

In 2022, the robot began experimenting on its own. It played thousands of games against itself, getting rewarded when it won. This is **reinforcement learning**—the agent learns a *policy* (a map from game states to actions) that maximizes future rewards.

From 2023 onward, we added two new tricks:

1. **Transfer learning** – the robot first learns general skills on one game and then adapts them quickly to another.
2. **Self‑supervised pretraining** – before any reward is given, the robot predicts missing parts of its own experience, building a rich internal representation.

By 2025, most AI agents are hybrids: they start with self‑supervised knowledge, fine‑tune through reinforcement learning, and can transfer those skills to new tasks almost instantly. This evolution turns a simple rule‑based toy into a flexible learner that keeps improving on its own.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
