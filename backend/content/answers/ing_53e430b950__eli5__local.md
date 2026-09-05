---
qid: ing_53e430b950__eli5__local
question: 'Explain: the on the consistent hashing um on — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 262
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:50:02-05:00'
sources: []
---

Imagine a pizza delivery truck that has to decide which customer’s order it should pick up first.  
**Consistent hashing** is like giving each neighborhood a slice of the town on a giant round table. When a new neighborhood (or server) joins, only the slice next to it changes hands; all other slices stay the same. This keeps the truck’s route stable even as cities grow or shrink.

**Geo‑hashing** is the truck’s GPS map that turns a customer’s latitude/longitude into a short string—like turning “123 Main St” into a concise code (“u4pruydqqvj”). The server can quickly find all customers whose codes share a prefix, just as the truck looks for nearby orders.

**WebSockets** are the open‑line phone between the truck and the customer’s app. Once the truck (server) connects, it can instantly push updates—“Your driver is 3 minutes away”—without the app having to keep asking. Together, these tools let DoorDash route drivers efficiently, find nearby customers, and deliver real‑time status without constant re‑polling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
