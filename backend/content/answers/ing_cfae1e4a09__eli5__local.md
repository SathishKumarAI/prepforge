---
qid: ing_cfae1e4a09__eli5__local
question: 'Explain: be in cities so i think to — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 228
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:04:12-05:00'
sources: []
---

Imagine a giant pizza delivery map that lives on the internet. Every place on Earth is split into tiny, numbered squares—think of them as “geo‑hashes.” A geo‑hash is just a short code (like **7gk4**) that tells you exactly which square your phone or driver’s car sits in. When you open DoorDash, the app sends its current geo‑hash to the server. The server keeps a list of all drivers’ geo‑hashes and can instantly match you with someone nearby.

To keep everyone updated without repeatedly asking for new positions (which would waste data), DoorDash uses **WebSockets**—a two‑way phone line between your device and the server. Once the connection is open, the server pushes any driver that moves into a new geo‑hash right to your app, and you send back your own location only when it changes significantly.

So: geo‑hashes give an instant, easy way to locate people on a map; WebSockets keep everyone in sync instantly, just like a live traffic feed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
