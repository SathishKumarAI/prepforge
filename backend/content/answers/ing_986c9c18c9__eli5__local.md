---
qid: ing_986c9c18c9__eli5__local
question: 'Explain: So we tried moving to the multi-process — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 229
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:39:24-05:00'
sources: []
---

Imagine you’re hosting a huge party in a single kitchen (your program). Everyone has to share one stove, one oven and one fridge. As the crowd grows, dishes pile up, people wait, and the kitchen becomes chaotic—this is like a single‑process application that can’t keep up with many users.

At the Seattle Conference on Scalability we decided to “move to multi‑process” – think of it as adding extra kitchens next door. Each new kitchen runs its own stove, oven, and fridge (a separate process) but all work together under one roof. When someone orders a pizza, they can be sent straight to the nearest kitchen instead of waiting in line at the original one. This spreads the workload evenly, reduces wait times, and keeps the party running smoothly even as more guests arrive.

In short: multi‑process means splitting your program into several independent “kitchens” that run side by side, letting you serve many more users without bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
