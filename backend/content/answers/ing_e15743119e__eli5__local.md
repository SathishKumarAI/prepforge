---
qid: ing_e15743119e__eli5__local
question: 'Explain: How Signal found two hidden retry loops in our production agent
  Alyx'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 202
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:32:33-05:00'
sources: []
---

Imagine your production agent **Alyx** is like a smart robot that’s supposed to pick up items and put them on a conveyor belt. It has a “retry” button—if something goes wrong, it tries again until the job succeeds.

While we were watching Alyx in action (the *signal*), we noticed two places where the robot kept pressing its own retry button without us telling it to. These are **hidden retry loops**: small sections of code that keep looping “try again” forever when they hit a particular error, like a broken sensor.

Think of it as a child who, after spilling juice, keeps reaching for the cup over and over instead of moving on. The signal (our monitoring tools) caught these loops because the robot’s actions stopped progressing and kept repeating the same step—so we could see that something was stuck in an endless “try‑again” cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
