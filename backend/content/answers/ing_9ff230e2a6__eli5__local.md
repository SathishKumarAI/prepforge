---
qid: ing_9ff230e2a6__eli5__local
question: 'Explain: You RL-trained an agent against a mocked environment, held-out
  reward improved, and the gains did not show up in production. Diagnose it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 227
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:51:04-05:00'
sources: []
---

Imagine you’re training a dog to fetch a ball using a *toy* house that only has one corner where the ball can be hidden. You reward the dog every time it finds the ball there, so it learns to run straight to that corner and get the treat. When you take the dog into a real home—full of rooms, doors, and moving furniture—it no longer gets the same treats because the ball is now hiding in different spots. The “reward” you used during training didn’t match what actually matters outside.

In RL terms:  
- **Mocked environment** = toy house (simplified, limited states).  
- **Held‑out reward** = treat given only for the corner win (a proxy that works inside the toy).  
- **Production gains missing** = dog can’t generalize to real home.  

The diagnosis is that the training environment and reward signal were too narrow; they didn’t capture the variety of situations the agent will face in reality, so its policy failed to transfer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
