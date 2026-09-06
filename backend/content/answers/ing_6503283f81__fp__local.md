---
qid: ing_6503283f81__fp__local
question: What are Agent Skills? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 323
total_tokens: 490
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:39:41-05:00'
sources: []
---

**Agent skills – a principled view**

At its core an *agent* is a system that observes an environment, decides on actions and receives feedback (rewards or penalties). The **skills** it must master are exactly the *functions* that map percepts to optimal actions under uncertainty.  
Why this mapping? Because any useful behavior can be decomposed into three stages:

1. **Perception → belief** – transform raw data into a probabilistic representation of the world (Bayesian inference, deep feature extraction).  
2. **Planning → decision** – choose an action that maximises expected utility given that belief (dynamic programming, reinforcement learning).  
3. **Execution → adaptation** – carry out the action and update beliefs based on the outcome (online learning, policy gradients).

Thus agent skills are *probabilistic inference*, *optimal control*, and *continual learning*. They are not separate modules but intertwined: a better belief model changes the value function; a more accurate policy improves future observations.

**Non‑obvious insight:**  
Many designs treat perception and action as disjoint. In reality, the *policy* can guide perception itself—active sensing. By selecting actions that reduce uncertainty about critical variables (information gain), an agent simultaneously learns faster and acts better. This principle underlies curiosity‑driven exploration and active SLAM, showing that “skill” is not just reaction but a *joint optimization of what to see and how to act*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
