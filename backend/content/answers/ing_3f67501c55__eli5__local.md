---
qid: ing_3f67501c55__eli5__local
question: 'Explain: Step 4: Train the Agent with Q-Learning Algorithm'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 276
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:16:24-05:00'
sources: []
---

**Step 4: Train the Agent with Q‑Learning**

Imagine a robot explorer on a maze floor that can turn left or right at every intersection (the *actions*). Each square of the maze is a different *state*. The robot’s goal is to reach the glowing exit, and it gets a small “cheer” (+1) when it steps into the exit and a tiny “buzz” (‑0.01) for each step taken—these are its *rewards*.

The robot keeps a table of numbers called a *Q‑table*. Each entry Q(state,action) estimates how good that action is from that state, based on past experience. The robot tries an action, sees the reward and next state, then updates the corresponding Q value to reflect this new knowledge (the “learning” part). Over many trials, the table fills out so that the robot always chooses actions that lead it most quickly to the exit.

That’s Q‑learning: a simple way for an agent to learn what moves bring the best long‑term reward by repeatedly trying and updating its internal scorebook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
