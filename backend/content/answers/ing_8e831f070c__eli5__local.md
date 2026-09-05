---
qid: ing_8e831f070c__eli5__local
question: 'Explain: Don’t Let the Past Distract You ¶ — Part 3: Intro to Policy Optimization
  \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 246
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:22:37-05:00'
sources: []
---

Imagine you’re training a robot dog to fetch a ball in a park that keeps changing: sometimes the grass is slippery, other times it’s muddy. The dog doesn’t remember every single patch of ground it has walked before; instead, it learns a *policy*—a simple rule like “if the ground feels wet, take a cautious step.” In machine learning, a policy is just a recipe that tells an agent what action to take given its current situation.

Policy optimization is the process of tweaking that recipe so the dog gets more treats (rewards). Think of each tweak as a tiny adjustment to the dog’s habit. We evaluate how well a particular policy does by letting it play in many park scenarios, then use *gradient descent*—a method that nudges the policy toward better performance—much like gently correcting a habit after seeing its outcome.

So, instead of getting lost in every past detail, we focus on improving the rule (policy) that maps present observations to actions, using rewards as our compass.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
