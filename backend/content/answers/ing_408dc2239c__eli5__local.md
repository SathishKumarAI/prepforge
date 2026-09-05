---
qid: ing_408dc2239c__eli5__local
question: 'Explain: Know whether agents actually complete the job'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 239
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:18:23-05:00'
sources: []
---

Imagine you’re a coach watching a robot in a kitchen that’s supposed to bake cookies. The *agent* is the robot, and the *job* is “make ten chocolate‑chip cookies.” To know whether it actually completes the job, you need a clear rule: if at least one cookie emerges from the oven and meets the taste test, the task is done; otherwise it’s not.

In machine learning this idea is called **task completion** or **success rate**. The agent (a model) follows a policy—like following a recipe—to produce outputs. We measure success by comparing its output to a target: if the output matches the desired result within an acceptable margin, we say the agent has *completed* the job.

So, just as you’d check the cookie tray for finished cookies, in ML we run the model on test data and count how many times it hits the goal. This gives us a simple, concrete way to see if the learning system is actually doing what it was trained to do.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
