---
qid: ing_7d55ec78d0__eli5__local
question: 'Explain: Sarvam-M ships a hybrid "think" and "non-think" mode and was post-trained
  with SFT then RLVR. Explain how you would build that, and why RLVR over vanilla
  RLHF.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 358
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:55:30-05:00'
sources: []
---

Imagine a robot chef who can either *think* (plan the recipe) or *not think* (just follow a pre‑written menu).  
**Sarvam‑M** is built like that: it has two “modes” – a *thinking* mode that uses a big language model to generate ideas, and a *non‑thinking* mode that just outputs what it was told.  

1. **Hybrid architecture** – we attach a small “decision layer” on top of the main model so it can switch between the two modes depending on the task.  
2. **SFT (Supervised Fine‑Tuning)** – first we feed the model many examples of correct answers, just as a chef learns recipes from a cookbook.  
3. **RLVR (Reinforcement Learning with Value‑Based Reward)** – after that we let the model play “games” against itself: it tries different responses, gets a score from a value network that estimates how good each answer is, and updates its policy to maximize that score.

Why RLVR instead of vanilla RLHF?  
- **No human labeler needed at every step** – the value network replaces a live judge.  
- **More stable learning** – the reward comes from a learned estimate rather than noisy human feedback.  
- **Scalable** – you can run thousands of simulated conversations without hiring people.

So, Sarvam‑M learns like a chef who first reads recipes (SFT), then practices cooking by judging his own dishes with an internal critic (RLVR). This hybrid design lets it choose when to think and when to follow instructions, giving it flexibility while staying efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
