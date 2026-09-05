---
qid: ing_6c3afb23b0__eli5__local
question: 'Explain: Core Components — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 229
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:27:15-05:00'
sources: []
---

Think of a robot learning to play a video game.  
**Agent** = the robot that makes moves.  
**Environment** = the game world it interacts with.  
When the agent takes an action (jump, run), the environment reacts and gives back two things:  

* **State** – a snapshot of what’s happening right now (the positions of enemies, the score).  
* **Reward** – a tiny hint that tells the agent how good or bad its move was (e.g., +10 for killing an enemy, –5 for falling into a pit).

The agent keeps doing this over many rounds. It builds a **policy**, a rule‑book that says “when in this state, do this action.”  
It also learns a **value function** that estimates how good each state will be in the long run.  
By repeatedly updating its policy to chase higher rewards, the agent gradually becomes better at the game—just like a student practicing until they master a skill.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
