---
qid: ing_d61a9d1e51__eli5__local
question: 'Explain: Reinforcement Learning — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 225
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:13:42-05:00'
sources: []
---

**Reinforcement learning (RL)** is a way for a computer to learn by trial and error, just like how you might learn to ride a bike.

*Think of the computer as a **learner** in a maze.  
*The **environment** is the maze itself.  
*At each step, the learner chooses an **action** (turn left, go straight).  
*After acting, the environment gives a **reward**: a small positive bump for getting closer to the exit, or a penalty if it hits a wall.

Over many rounds, the learner records which actions earned more rewards. It then builds a **policy**—a rule that says “when I’m in this part of the maze, do this action.” The goal is to maximize the total reward, which means reaching the exit as quickly and safely as possible.

In short, RL teaches a system by rewarding good choices and discouraging bad ones, without needing explicit instructions for every move.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
