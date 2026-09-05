---
qid: ing_3326d702a6__eli5__local
question: 'Explain: i guess i''ll call it like the — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 222
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:57:00-05:00'
sources: []
---

Imagine a giant pizza shop that wants to deliver slices fast.  
**Geo‑hashing** is like cutting the city map into tiny squares and giving each square a short name (a “geo‑hash”). When a rider’s phone says, “I’m here,” the system just looks up which square they’re in—no need for exact coordinates. This lets DoorDash quickly find all riders or restaurants near any spot, like finding all pizza ovens in one neighborhood.

**WebSockets** are the two‑way walkie‑talk between the rider’s phone and the server. Once the phone connects, it can instantly send updates (“I’m 200 m away”) and receive commands (“pick up order now”) without repeatedly asking the server for new data—just like a live chat that stays open.

Together, geo‑hashing gives fast “who’s nearby?” answers, while WebSockets keeps every device in sync as orders move.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
