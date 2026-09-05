---
qid: ing_fd2df442c9__eli5__local
question: 'Explain: and yes also possibly in the sense — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 261
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:15:56-05:00'
sources: []
---

Imagine you’re at a giant pizza‑delivery party where every guest’s phone is a tiny “pizza” that needs to be tracked in real time so the kitchen can hand it out quickly.  

**Geo‑hashing** is like giving each room on the party floor a short, unique code (the hash). Instead of searching the whole house for a guest, you just look up the room’s code and instantly know who’s inside. The code compresses latitude/longitude into a compact string, so the app can group nearby locations together and only request data from that small area.

**WebSockets** are the party’s two‑way walkie‑talk system. Once the kitchen knows which room (hash) to check, it opens a WebSocket channel to that guest’s phone. The channel stays open, letting the kitchen push updates (“your pizza is on the way”) and receive replies (“I’m arriving in 3 minutes”) instantly—no need to keep asking over and over.

Together, geo‑hashing narrows the search area, while WebSockets keeps the conversation flowing smoothly between DoorDash servers and drivers’ devices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
