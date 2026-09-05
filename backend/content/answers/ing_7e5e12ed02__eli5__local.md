---
qid: ing_7e5e12ed02__eli5__local
question: 'Explain: point so instead of doing one range — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 254
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:57:11-05:00'
sources: []
---

Imagine a giant pizza‑shop map that’s split into tiny square “pizza boxes.”  
**Geo‑hashing** is the way the shop labels each box with a short code (like A3B2). When a rider or customer turns on their phone, the app looks up which code matches their current spot and instantly knows *exactly* which pizza boxes to check for nearby orders. This keeps the system from scanning every single location—just the few boxes that matter.

**WebSockets** are like a walkie‑talk channel between your phone and DoorDash’s servers. Once the app learns the rider’s box, it opens a continuous conversation: whenever a new order pops up in that box, the server instantly pushes it to the rider’s device; when the rider accepts or declines, the answer travels back right away. No need to keep asking “What’s new?”—the connection stays open and updates flow like a live chat.

Together, geo‑hashing gives fast lookup of nearby spots, while WebSockets delivers real‑time order updates, letting DoorDash serve riders and customers quickly and efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
