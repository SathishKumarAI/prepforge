---
qid: ing_36f89e97fb__eli5__local
question: 'Explain: hey guys this is gkcs today we''ll — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 235
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:02:53-05:00'
sources: []
---

Imagine you’re a courier who must deliver food quickly, but the city is huge and your phone can’t keep sending your exact GPS every second—it would drain battery and clog the network. **Geo‑hashing** solves this by turning your latitude/longitude into a short code that represents a small square on the map (like giving each block a zip‑code). The app only needs to know “I’m in block X,” not the exact corner, so it can find nearby restaurants or drivers without huge data.

Once the courier is inside a block, **WebSockets** act like a two‑way phone line between your phone and DoorDash’s servers. It stays open, letting the server push updates (new orders, driver locations) instantly, while you can send your current position back in real time. This keeps everyone on the same page without constantly polling the server. Together, geo‑hashing shrinks data size and WebSockets delivers instant, low‑latency communication—exactly what a fast food delivery service needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
