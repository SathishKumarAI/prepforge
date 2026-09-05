---
qid: ing_8f6f4302a5__eli5__local
question: 'Explain: Single-Agent Architectures — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 239
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:24:14-05:00'
sources: []
---

Think of a single‑agent architecture like building a smart robot that learns to play a video game on its own. The **agent** is the robot, the **environment** is the game screen and controls, and the agent’s goal is to win (maximise score).  
The agent has three parts:  

1. **Policy** – a recipe telling it which button to press in every situation.  
2. **Value function** – an estimate of how good each situation will be if it follows its policy.  
3. **Learning rule** – a way to update the recipe and value estimates after seeing what happened.

When the agent plays, it watches the screen (state), chooses a move (action) using its policy, gets a score change (reward), and sees the new screen. It then uses the learning rule to tweak its recipe so future moves are better. Over many games the robot’s play improves until it becomes a champion. This simple loop—observe, act, learn—is the core of single‑agent machine‑learning systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
