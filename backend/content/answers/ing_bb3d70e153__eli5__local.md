---
qid: ing_bb3d70e153__eli5__local
question: 'Explain: NullAway — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 180
total_tokens: 347
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:34:00-05:00'
sources: []
---

Imagine you’re building a robot that can walk through a maze of doors, but every time it opens a door it must know whether there’s something behind it—an object or just empty space. If the robot blindly assumes a door is always safe, it could bump into walls and crash. NullAway works like a smart safety guard for code: when you write a program that talks to the outside world (like reading data from a database or an API), the guard checks every “door” (variable) to make sure it’s never left empty—never *null*. If a door could be empty, the guard warns you before the robot ever tries to use it. This prevents runtime crashes and makes your code as safe and reliable as a well‑guarded hallway.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
