---
qid: ing_612a06cd85__eli5__local
question: 'Explain: Pipe — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 219
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:10:23-05:00'
sources: []
---

Imagine two chefs in separate kitchens who need to pass ingredients back and forth without stepping into each other’s space. In Linux, a *pipe* is like an invisible hallway that lets one chef (process) hand a bowl of soup (data) directly to the next chef without touching the outside world.

A pipe is created by the operating system as a pair of connected endpoints: **write** and **read**. The first process writes bytes into its end; the second process reads those same bytes from its end, exactly in the order they were written. Think of it as a one‑way conveyor belt that carries only the items you put on it—no extra labeling or routing needed.

Because pipes are *anonymous* (they exist only while both ends stay open) and *unidirectional*, they’re perfect for quick, temporary communication between programs running side by side. Just like chefs passing bowls along a hallway, data flows smoothly from one process to the next, keeping everything tidy and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
