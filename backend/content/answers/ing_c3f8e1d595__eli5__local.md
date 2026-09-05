---
qid: ing_c3f8e1d595__eli5__local
question: 'Explain: System Design of Doordash: Geo-Hashing and WebSockets for Location
  Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 235
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:46:41-05:00'
sources: []
---

Think of a giant, moving city map that’s always being updated in real time—like a live traffic app you use to find the quickest route to your favorite coffee shop.  
**Geo‑hashing** is the way Doordash chops that map into tiny squares (think of each square as a “neighborhood code”). Every delivery driver and restaurant gets a code that tells exactly which neighborhood they belong to, without needing to store every single coordinate. When you search for nearby restaurants, the system just looks up the few codes around your location instead of scanning the whole city.

**WebSockets** are the invisible two‑way phone line between your phone and Doordash’s servers. Once the map is split into neighborhood codes, WebSockets keep that line open so the server can instantly push updates—like a driver’s new position or an order status change—directly to your app without you having to ask for them again.

Together, geo‑hashing narrows down where things are, and WebSockets keeps everyone in sync as soon as anything moves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
