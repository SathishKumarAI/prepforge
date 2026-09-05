---
qid: ing_0608496b20__eli5__local
question: 'Explain: don''t know anything about that i''ve got — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 249
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:44:59-05:00'
sources: []
---

Think of a city as a giant grid of tiny squares, like the squares on a chessboard stretched over every street. **Geo‑hashing** is simply labeling each square with a short code (the “hash”). When you’re a DoorDash driver, your phone tells the system “I’m in hash ABC.” The server can instantly see which other drivers or restaurants share that same label—no need to scan the whole map. It’s like shouting “I’m on the 3rd block of Main Street” so only people nearby hear.

**WebSockets** are a two‑way telephone line between your phone and DoorDash’s servers. Once you’re connected, any change in your location or a new delivery request can be sent instantly without the app having to keep asking (“polling”) for updates. It’s like having a live chat with the system: as soon as a rider moves or an order appears, both sides know right away.

Together, geo‑hashing quickly finds nearby drivers and WebSockets keeps everyone in sync—so orders reach you before anyone else does.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
