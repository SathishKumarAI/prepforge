---
qid: ing_93f9a9eeee__eli5__local
question: 'Explain: million orders turns out to be roughly — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 276
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:32:18-05:00'
sources: []
---

Imagine you’re running a city‑wide food delivery service, like DoorDash, but the city is huge—think a million customers ordering at once. To keep everything moving smoothly, the system uses two clever tricks: **Geo‑Hashing** and **WebSockets**.

**Geo‑Hashing** is like giving every street corner a unique zip code made of letters and numbers. Instead of sending a full address each time, the app sends this short “geo‑hash.” The server can instantly group nearby customers (within the same hash) without scanning all addresses. It’s the same idea as sorting mail into regional bins before delivering.

**WebSockets** are like having a two‑way walkie‑talk channel between the customer’s phone and the delivery hub. Once the connection is open, the phone can instantly shout “I’m ready!” or “I’ve arrived,” and the hub responds right away—no waiting for a new request each time. This keeps the driver’s route updated in real time and reduces lag.

Together, geo‑hashing shrinks the search space to a handful of nearby bins, while WebSockets keep everyone chatting instantly. Even with a million orders, the system can decide who gets which delivery and how fast, without drowning in data or delays.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
