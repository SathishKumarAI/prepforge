---
qid: ing_ebfd7a1ac3__eli5__local
question: 'Explain: that time is required because we we — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 274
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:49:13-05:00'
sources: []
---

Imagine a city where every house has a unique “address‑code” that’s actually just a short string of letters and numbers (that’s **geo‑hashing**). The city’s delivery crew uses these codes to know exactly where each customer lives without having to look up long street names. Now, suppose the crew needs to talk in real time—like shouting across the street—to coordinate who picks up what order. That’s what **WebSockets** do: they keep a steady two‑way conversation open between your phone and the city’s servers so you instantly see when a driver is nearby or when an order is ready.

Because every request must first translate the customer’s GPS into a geo‑hash, then send that code through the live WebSocket channel, there’s always a tiny delay. The system has to (1) compute the hash, (2) route it to the right server, and (3) push an update back over the socket. Each step takes milliseconds, so even though everything feels instantaneous, the underlying design forces that brief “time is required” before you see your delivery’s arrival time on the screen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
