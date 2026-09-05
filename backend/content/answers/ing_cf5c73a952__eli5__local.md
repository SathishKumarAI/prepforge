---
qid: ing_cf5c73a952__eli5__local
question: 'Explain: Cost — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 250
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:03:49-05:00'
sources: []
---

Imagine you’re hosting a big potluck (your machine‑learning service) and you have two tables: one where guests bring their dishes (the **client**) and another where the kitchen staff prepare, cook, and serve the food (the **server**).  
The *cost* is how much money you spend to run that kitchen. Every time a guest asks for a dish, the kitchen has to fetch ingredients, stir, bake, or grill—this takes electricity, gas, and labor. In client‑server terms, each request from the client (a data query or model inference) forces the server to use CPU/GPU cycles, memory, storage reads, and network bandwidth.  
So, the total cost is the sum of all those resource consumptions over time. If you want cheaper meals, you can cook in batches (batch processing), use a more efficient stove (GPU vs CPU), or cache popular dishes so you don’t have to re‑cook them every time. The goal is to balance quality and speed against how much the kitchen (server) costs to keep running.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
