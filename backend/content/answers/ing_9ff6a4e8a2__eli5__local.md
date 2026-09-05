---
qid: ing_9ff6a4e8a2__eli5__local
question: Explain PPO in the RLHF context. Why is there a KL penalty against a reference
  model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 237
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:51:09-05:00'
sources: []
---

Think of training an AI like coaching a new singer to sing in a specific style.  
The **policy** (the AI’s way of choosing actions) is the singer’s current voice; the **reference model** is a master recording you want them to imitate.  

During **PPO‑RLHF** (Proximal Policy Optimization with Reinforcement Learning from Human Feedback), we give the singer rewards for pleasing listeners, but we also keep them from straying too far from the master track.  
The **KL penalty** is like a gentle reminder that says “stay close to the reference melody.” It measures how much the new voice differs from the old one; if it drifts too much, the penalty grows and nudges the singer back.  

So PPO updates the policy in small steps (the “proximal” part), while the KL term keeps those steps grounded in a trusted style. This balance lets the AI learn new tricks without losing its core identity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
