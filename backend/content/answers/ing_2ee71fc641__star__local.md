---
qid: ing_2ee71fc641__star__local
question: 'Explain: Reinforcement learning — What is Machine Learning? \u00a0|\u00a0
  Google for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 301
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:02:05-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we were building an automated trading bot that needed to learn optimal buy‑sell strategies from market data in real time. The existing supervised models lagged behind because they couldn’t adapt to sudden volatility spikes.

**Task**  
I had to design a system where the agent could discover profitable actions through trial and error, while ensuring it didn’t take excessive risks or violate regulatory limits.

**Action**  
I implemented a deep Q‑learning framework using PyTorch. The state space consisted of technical indicators (RSI, MACD) and recent price movements; actions were discrete trade decisions (buy, hold, sell). I added an epsilon‑greedy exploration schedule that decayed over 50 k episodes and introduced a reward function combining profit margin and a penalty for large drawdowns. To stabilize training, I employed experience replay buffers of size 100 k and target network updates every 1 000 steps. After each episode, I logged key metrics—average return, Sharpe ratio, and maximum drawdown—to monitor progress.

**Result**  
Within three months the RL agent outperformed our baseline model by 18% annualized returns while keeping maximum drawdown under 5%. The exercise taught me how to balance exploration with risk constraints and reinforced the importance of carefully crafting reward signals in real‑world reinforcement learning deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
