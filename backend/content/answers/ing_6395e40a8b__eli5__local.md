---
qid: ing_6395e40a8b__eli5__local
question: 'Explain: Deriving the Simplest Policy Gradient ¶ — Part 3: Intro to Policy
  Optimization \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 293
total_tokens: 469
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:13:53-05:00'
sources: []
---

Imagine a robot learning to play a simple game—say, catching a ball that drops at random spots on a table. The robot doesn’t know the best way to move its arm yet, so it tries many different “hand‑shake” moves (actions) each time a ball falls. After each try, it receives a reward: +1 if it catches the ball, 0 otherwise.

**Policy** = the robot’s recipe for choosing an action given the current situation (where the ball is).  
**Gradient** = a direction that tells us how to tweak this recipe so rewards get larger on average.  

The simplest policy gradient works like this:  
1. Let the robot run many trials, recording which actions it chose and whether they succeeded.  
2. For each trial, multiply the “probability” of having chosen that action by the reward received (here, 1 or 0).  
3. Add up all these products across trials. This sum points in a direction that makes good actions more likely next time.

Think of it as giving each move a score: moves that led to success get higher scores, and the robot adjusts its recipe to favor those moves. Over many iterations, the robot’s policy gradually improves—its arm swings become better at catching the ball. This is the essence of deriving the simplest policy gradient in reinforcement learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
