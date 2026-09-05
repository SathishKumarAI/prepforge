---
qid: ing_591bc90b28__eli5__local
question: 'Explain: a separate table exactly you have a — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 206
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:57:39-05:00'
sources: []
---

Imagine DoorDash as a giant city map that shows where delivery drivers are right now.  
**Geo‑Hashing** is like cutting the map into a grid of squares and giving each square a short code (the “hash”). Every driver’s phone tells the server its code, so the system only needs to look at a few nearby squares instead of every single driver—much faster than scanning the whole city.  

**WebSockets** are like a two‑way radio that stays open between your phone and DoorDash’s servers. Once you’re connected, the server can instantly push updates (“Driver X is 200 m away”) without waiting for you to ask again.  
Together, Geo‑Hashing keeps the search fast, and WebSockets keeps the traffic flowing in real time—just like a well‑organized city dispatcher keeping everyone informed on the move.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
