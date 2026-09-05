---
qid: ing_9b810256a8__eli5__local
question: 'Explain: RLHF: The Foundation — Rlhf And Dpo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 228
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:44:03-05:00'
sources: []
---

Imagine you’re teaching a robot how to play chess by watching human games, but instead of just copying moves, the robot asks you every time it’s unsure: “Did I do well?” You give thumbs‑up or thumbs‑down for each move. **Reinforcement Learning from Human Feedback (RLHF)** is that process in a nutshell. The robot first learns from example games (pre‑training), then plays its own games and receives human ratings as rewards, gradually improving its strategy.

**Direct Preference Optimization (DPO)** takes the same idea one step further: instead of giving a single score for each move, you compare two whole game transcripts and say which is better. The robot learns directly from these pairwise preferences, adjusting its policy to favor moves that lead to the “better” games. Think of it as a coach who not only tells you “good” or “bad,” but also says, “I’d rather see this version of the play than that one.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
