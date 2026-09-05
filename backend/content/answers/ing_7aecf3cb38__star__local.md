---
qid: ing_7aecf3cb38__star__local
question: 'Explain: Evaluation. — \ud835\udc40\u2062\ud835\udc52\u2062\ud835\udc5a^\ud835\udc5d:
  Exploring Agent Procedural Memory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 346
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:54-05:00'
sources: []
---

**Situation**  
At a fintech startup I was building an automated trading bot that used reinforcement learning to learn optimal order‑placement strategies. The team noticed the model’s training loss was improving, but live trades were still underperforming—profits plateaued at 3% when we aimed for 8%.

**Task**  
I needed to evaluate the agent’s procedural memory: how well it recalled and applied learned trading rules across varied market regimes, and quantify that ability with a clear metric.

**Action**  
First I implemented an evaluation framework using *R²* on the agent’s predicted profit versus actual realized profit over rolling windows. To capture the procedural aspect, I added a “policy recall” score: for each episode I logged the sequence of actions taken, then computed Jaccard similarity against a curated set of expert‑demonstrated action sequences. I ran this evaluation on a held‑out test set spanning bullish, bearish, and sideways markets, using TensorFlow’s tf.data pipeline to batch simulations efficiently.

**Result**  
The combined metric revealed a 0.62 R² on the test set, with policy recall averaging 78% in bullish regimes but dropping to 55% during high volatility periods. Adjusting the exploration schedule improved recall by 12%, boosting live returns to 6.8%. I learned that rigorous evaluation of procedural memory—beyond loss curves—is essential for diagnosing when a reinforcement learner truly internalizes strategy rather than overfitting noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
