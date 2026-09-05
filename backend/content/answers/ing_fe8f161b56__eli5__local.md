---
qid: ing_fe8f161b56__eli5__local
question: 'Explain: Types of Reinforcements — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 224
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:18:01-05:00'
sources: []
---

Imagine a dog learning tricks with treats. The “dog” is an algorithm that must decide what action to take (sit, roll over, fetch). A **reinforcement learner** gets a *score* after each action—positive if the treat arrives, negative if it doesn’t. Over time it learns which actions earn the most treats.

There are two main ways the dog can get its score:  

1. **Immediate reinforcement** – the treat comes right away (like a “reward signal” in learning).  
2. **Delayed reinforcement** – the treat is given later, after a chain of good actions (this is called *discounted reward*).

The algorithm’s job is to pick actions that maximize the total treats it will receive, even if some rewards are far off. That’s the essence of reinforcement learning: learn by trial‑and‑error guided by a simple feedback loop—treats or no treat.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
