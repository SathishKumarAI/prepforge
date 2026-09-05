---
qid: ing_c348230eba__eli5__local
question: 'Explain: finding a person who is near enough — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 207
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:45:29-05:00'
sources: []
---

Imagine you’re at a busy coffee shop and want to find the nearest barista who can take your order. The shop has a “map” of where every employee sits (their *geo‑hash*), and each barista’s phone sends their current spot in real time through a live chat line (*WebSocket*).  

When you place an order, your app looks up the closest geo‑hash block to your location—just like checking the nearest row on the map. It then opens a WebSocket connection to that barista’s device, so both sides can instantly exchange updates (e.g., “I’m heading over” or “I’ll be ready in 3 minutes”).  

The system keeps the map of locations updated as people move and uses the real‑time chat line to keep everyone in sync. That’s how DoorDash quickly matches riders with nearby drivers, just like finding a barista who’s already close by.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
