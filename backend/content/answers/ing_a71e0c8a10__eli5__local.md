---
qid: ing_a71e0c8a10__eli5__local
question: 'Explain: 2.1 Traffic Estimates — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 224
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:02:39-05:00'
sources: []
---

Imagine you’re running a popular pizza place that gets orders all day, but the number of customers varies wildly—sometimes a few, sometimes hundreds at once.  
Before you can decide how many ovens (servers) to keep open, you need a *traffic estimate*: an educated guess about how many orders will arrive in each hour.  

In system‑design interviews, this is exactly what the interviewer asks for: “How many requests per second should our load balancer expect?”  
You answer by looking at past data (if available), asking about peak times, and then adding a safety margin so the system never crashes when a sudden rush hits.  
This estimate tells you how many backend instances to spin up, what cache size to use, and whether you need auto‑scaling.  

So think of traffic estimation as forecasting your pizza orders—accurate predictions let you keep the ovens running smoothly without over‑or‑under‑spending resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
