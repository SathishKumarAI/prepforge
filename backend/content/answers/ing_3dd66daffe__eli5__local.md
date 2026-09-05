---
qid: ing_3dd66daffe__eli5__local
question: 'Explain: Agent Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 151
output_tokens: 246
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:13:57-05:00'
sources: []
---

Think of an **agent pattern** as a reusable recipe for how a software “agent” (a little helper program) behaves and talks to the world.  
Imagine you’re building a robot that can play chess, drive a car, or manage your calendar. Each of those jobs needs a set of basic moves: *decide what to do*, *get new information*, *act on it*, and *learn from mistakes*. An agent pattern is like a common instruction sheet that tells the robot exactly how to perform these steps in any job.

For example, the **“Perception–Decision–Action”** pattern says:
1. **Perceive**: look at the board or read your phone’s calendar.
2. **Decide**: choose the best move or next meeting slot.
3. **Act**: make a move on the board or send an email.

The same recipe can be applied to different robots by swapping out the “look” and “act” parts, while keeping the core logic intact. That’s why patterns help developers build many kinds of intelligent agents quickly and reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
