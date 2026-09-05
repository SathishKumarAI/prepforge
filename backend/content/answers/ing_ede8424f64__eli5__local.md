---
qid: ing_ede8424f64__eli5__local
question: 'Explain: the speed at which the cab is — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 206
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:58-05:00'
sources: []
---

Imagine a city’s traffic lights are all connected to a giant brain called the **dispatch system**. When you tap “Call a ride,” that brain instantly looks at three things: (1) how many cars are near you (**availability**), (2) how fast each car can get there (**speed**), and (3) how long it will take for all drivers to reach you if they’re already busy (**queue time**).  

The *speed* of a cab is simply the average distance a driver travels per minute. The dispatch brain uses recent GPS data from every driver to estimate this speed, then picks the closest one that can arrive quickest. Think of it like a librarian who knows how fast each book travels on its shelf and chooses the fastest route to hand you the right copy. This keeps rides arriving faster and reduces wait times for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
