---
qid: ing_316312ad0c__eli5__local
question: 'Explain: roll at a time yes yes it — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 249
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:53:57-05:00'
sources: []
---

Imagine your phone is a tiny lighthouse that can shout “I’m here!” to all the delivery drivers at once.  
**Geo‑hashing** turns every GPS coordinate into a short code (like a postal ZIP) so the system can quickly find all lighthouses in a neighborhood without looking at every single one. Think of it as cutting a map into big squares and giving each square a name; any lighthouse inside that square shares the same name, making group‑search fast.  

**WebSockets** keep an open, two‑way channel between the driver’s app and the Doordash servers, just like a telephone line that never hangs up. When a customer places an order, the server instantly pushes the new job to all drivers whose lighthouses (geo‑hashes) match the restaurant’s area. Drivers see it in real time, accept or decline, and the server updates everyone else instantly.

Together, geo‑hashing shrinks the search space, while WebSockets delivers instant updates—so every driver gets the right orders as soon as they’re available.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
