---
qid: ing_105843766c__eli5__local
question: 'Explain: later but okay you have these nodes — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 203
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:01:10-05:00'
sources: []
---

Imagine a giant pizza‑delivery map that is split into tiny squares—each square is like a neighborhood. **Geo‑hashing** is the way we give every square a short, unique name (a “hash”) so the system can quickly say, “The rider is in hash ABC.” Think of it as putting a QR code on each block; the courier’s phone scans and instantly tells the app which block they’re in.

Now, to keep everyone updated in real time—your order status, the driver’s current spot, or new promotions—the system uses **WebSockets**. Picture a two‑way radio between your phone and the delivery server: once you connect, both sides can shout updates instantly without repeatedly asking for new information. Together, geo‑hashing finds “where” quickly, and WebSockets keeps “what” happening in that spot flowing smoothly to all users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
