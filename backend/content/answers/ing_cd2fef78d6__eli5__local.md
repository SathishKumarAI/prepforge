---
qid: ing_cd2fef78d6__eli5__local
question: 'Explain: thing that you again mentioned here is — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 233
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:00:14-05:00'
sources: []
---

Think of DoorDash as a giant pizza‑delivery map where every restaurant, rider, and customer is a point on the globe.  

**Geo‑hashing** is like putting each point into a tiny postal code box that shrinks when you zoom in. Instead of asking the server for “all restaurants within 5 km,” the app asks for all boxes that overlap that circle. The server only looks at those few boxes, saving time and data—just as a mailman only checks the relevant delivery zones instead of every house.

**WebSockets** are the continuous phone line between your phone and DoorDash’s servers. Once you’re connected, the server can instantly push updates (e.g., “your rider is 200 m away”) without you having to keep refreshing or sending new requests—just like a live GPS feed that keeps you posted.

Together, geo‑hashing narrows the search, and WebSockets delivers instant updates, making the whole delivery experience smooth and real‑time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
