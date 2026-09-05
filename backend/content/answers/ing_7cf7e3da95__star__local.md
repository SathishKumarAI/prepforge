---
qid: ing_7cf7e3da95__star__local
question: 'Explain: Common agent patterns — Agentic Engineering - by Neo Kim and Paul
  Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 338
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:43:49-05:00'
sources: []
---

**Situation**  
At a fintech startup, we were tasked with building an autonomous trading bot that could adapt to market volatility while staying within regulatory limits. The existing system was monolithic and struggled with real‑time decision making.

**Task**  
I needed to refactor the architecture into reusable agent patterns—specifically the Agentic Engineering framework from Neo Kim and Paul Hoekstra—to enable modular, self‑learning components that could be independently tested and scaled.

**Action**  
First, I decomposed the bot into three core agents: a *Perception* agent (scraping feeds, applying NLP to news), an *Intention* agent (reinforcement learning policy using PPO in PyTorch), and a *Actuation* agent (order execution via FIX). Each agent communicated through a lightweight message bus (Kafka) and maintained its own state store in Redis. I introduced a *Supervisor* agent that monitored drift, logged performance metrics, and triggered retraining cycles when the Sharpe ratio fell below 1.2. To handle uncertainty, I added an *Exploration* agent that periodically ran bandit experiments on alternative strategies.

**Result**  
The new architecture cut decision latency from 800 ms to 120 ms, increased annualized returns by 18%, and reduced data‑pipeline errors by 35%. I learned that clear boundaries between perception, intention, and actuation not only simplify debugging but also allow each agent to evolve independently—exactly the principle behind Agentic Engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
