---
qid: ing_dbb2cfb2a7__eli5__local
question: 'Explain: DPO: Direct Preference Optimization — Rlhf And Dpo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 269
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:21:55-05:00'
sources: []
---

**Direct Preference Optimization (DPO)** is a way to teach an AI by showing it what people *really* like, instead of guessing from rules.

Imagine you’re training a dog to fetch the right ball.  
With **RLHF** (Reinforcement Learning from Human Feedback), you first let the dog try many balls and then give a thumbs‑up or down for each one. The system turns those thumbs into a score and tries to pick actions that would earn more thumbs in the future.

DPO skips the extra step of turning thumbs into a complicated “reward function.” It looks directly at pairs of AI answers, asks which one a human prefers, and trains the model to choose that preferred answer every time.  
So it’s like teaching the dog to always pick the ball the owner actually chose as best, without making up its own reward system.  

**Key terms**  
- **RLHF**: Learning from humans who rate or rank AI outputs.  
- **Reward function**: A hidden score that tells the AI how good an action is.  
- **Preference pair**: Two model answers compared side‑by‑side for which one humans like more.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
