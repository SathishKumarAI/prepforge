---
qid: ing_a413f9c49a__eli5__local
question: 'Explain: no person nearby basically yeah i mean — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 220
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:58:27-05:00'
sources: []
---

Imagine a giant pizza‑delivery kitchen that needs to know where every customer is so it can send the fastest driver.  
**Geo‑hashing** is like cutting the city into a grid of tiny square tiles and giving each tile a short code (the “geo‑hash”). Instead of storing exact addresses, the system just keeps the tile code for each order. When a new rider appears, the kitchen looks up all orders whose codes match the rider’s current tile—much faster than checking every address.

**WebSockets** are like a two‑way walkie‑talk between the kitchen and the riders. Once a rider joins a tile, the kitchen keeps that connection open so it can instantly push new orders or cancel them without waiting for the rider to ask again.  
Together, geo‑hashing narrows the search to nearby tiles, and WebSockets delivers updates in real time—so every delivery is routed efficiently, just like a well‑coordinated pizza service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
