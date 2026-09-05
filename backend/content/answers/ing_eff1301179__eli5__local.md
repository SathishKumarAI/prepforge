---
qid: ing_eff1301179__eli5__local
question: 'Explain: a mile and uh in that time — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 247
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:54:33-05:00'
sources: []
---

Imagine you’re playing a giant game of hide‑and‑seek on a huge city map.  
**Geo‑hashing** is like cutting the map into tiny squares and giving each square a short nickname (the “geo‑hash”). Instead of telling everyone the exact street address, DoorDash just says “square ABC123.” That keeps the data small and lets the system quickly find all orders or drivers that live inside the same square—just like finding teammates in the same hide‑and‑seek zone.

**WebSockets** are the chat line between your phone and DoorDash’s servers. Once a driver enters a geo‑hash, the server opens a WebSocket to his device. From then on, any change—new orders, traffic updates, or a rider’s location—flows instantly over that open line, just as if you were talking in real time instead of sending text messages back and forth.

Together, geo‑hashing gives fast “who’s nearby?” answers, while WebSockets keeps everyone updated without waiting for the next page refresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
