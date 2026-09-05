---
qid: ing_8b7b694504__eli5__local
question: 'Explain: customer as opposed to you know having — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 231
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:17:39-05:00'
sources: []
---

Think of DoorDash like a giant pizza‑delivery office that sits in every neighborhood.  
When you tap “Find a driver,” the app splits the city into tiny square tiles called **geo‑hashes**—just as a librarian would put books on shelves by color and size so they’re easy to find. Each tile holds all drivers currently inside it, so the system can instantly ask *“Who’s near this tile?”* instead of checking every single driver in the whole city.

Meanwhile, a **WebSocket** is like an open walkie‑talkie channel between your phone and DoorDash servers. Once the driver is assigned, that channel stays live: as soon as the driver moves, their new geo‑hash is sent through the walkie‑talkie, and your app updates in real time—no need to refresh or keep asking.  
Together, geo‑hashing keeps the search fast, and WebSockets keeps everyone on the same page instantly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
