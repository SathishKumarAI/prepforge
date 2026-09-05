---
qid: ing_e7ccfeaa6f__eli5__local
question: 'Explain: Reinforcement learning — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 278
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:42:40-05:00'
sources: []
---

**Reinforcement learning (RL)** is like training a dog to fetch a ball by rewarding it each time it succeeds.  
In **on‑policy learning**, the dog only practices the exact routine you give it—if you change the route, it learns from that new route right away.

Now imagine you want to share this trick with many other dogs quickly. Instead of sending every dog through the long practice session, you let one “master” dog run many trials (the RL agent). While it’s learning, you watch its decisions and record a simple set of rules—“if the ball is left, go left; if right, go right.” This recording is called **distillation**: turning a complex, experience‑based policy into an easy‑to‑copy recipe.

So on‑policy distillation in RL means:  
1. Let one agent learn by interacting with its environment (on‑policy).  
2. While learning, extract a lightweight “teacher” model that mimics the expert’s decisions.  
3. Use this teacher to quickly train many other agents or deploy it where fast decision‑making is needed.

It’s like having a seasoned trainer create a cheat‑sheet so every dog can fetch in minutes instead of hours.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
