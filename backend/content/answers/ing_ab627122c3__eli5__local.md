---
qid: ing_ab627122c3__eli5__local
question: 'Explain: Then how do you actually calculate the — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 227
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:09:30-05:00'
sources: []
---

Imagine you’re a chef who must decide the fastest way to deliver every dish from the kitchen to each table in a busy restaurant. The kitchen is your data center, and the tables are users on Google Maps. To calculate the best delivery path (the route), you give the chef two ingredients: **distance** (how far it is) and **traffic weight** (how slow or fast roads are right now). The chef’s “recipe” is a simple math trick called *Dijkstra’s algorithm*—it looks at every possible path, adds up distance plus traffic delay, and picks the one with the lowest total. In a Google‑Maps interview you’d explain that we store road segments as nodes, traffic as edge weights, and run this calculation quickly so users see the fastest route in milliseconds. This keeps the system snappy while handling millions of requests each day.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
