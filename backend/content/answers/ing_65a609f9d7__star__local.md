---
qid: ing_65a609f9d7__star__local
question: 'Q: What is RLVR, and why does it scale more stably than RLHF for reasoning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 305
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:51:11-05:00'
sources: []
---

**Situation:**  
When my team was building a language model to answer complex legal queries, we noticed that our reinforcement learning from human feedback (RLHF) approach caused huge performance swings after each fine‑tuning epoch—accuracy would drop by over 15% on unseen cases.

**Task:**  
I needed to devise a training regime that kept the reasoning quality stable while still incorporating expert corrections, so we could ship a reliable product for regulatory compliance.

**Action:**  
I introduced RLVR (Reinforcement Learning with Value‑based Reward). Instead of directly optimizing against noisy human scores, we first trained a value network to predict a confidence‑weighted “reasoning score” from the model’s own internal chain of thought. During policy updates, the reward was this predicted value rather than raw human feedback. We used PPO with clipped objective and added a KL penalty to keep the policy close to the baseline, preventing large policy jumps. The value network was fine‑tuned on a smaller, high‑quality annotated set, reducing variance.

**Result:**  
After switching to RLVR, accuracy on our hold‑out legal dataset improved from 78% to 85%, and the standard deviation across epochs dropped from 12% to 3%. We learned that decoupling reward estimation from noisy human labels stabilizes training, especially for tasks requiring multi‑step reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
