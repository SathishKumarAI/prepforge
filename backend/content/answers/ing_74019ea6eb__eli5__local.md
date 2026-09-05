---
qid: ing_74019ea6eb__eli5__local
question: 'Explain: road over here might be all twisty — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 234
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:40:33-05:00'
sources: []
---

Imagine a city where every street corner is tagged with a tiny “address sticker” that tells you exactly which neighborhood it belongs to—this is **geo‑hashing**. It’s like taking a GPS coordinate and turning it into a short code (the sticker) so the system can quickly find all places that share the same area without looking at every single address.

Now picture a live, two‑way conversation between your phone and DoorDash’s servers—like a walkie‑talker that instantly pushes updates when you move or when new orders pop up nearby. That’s **WebSockets**: a continuous, low‑latency channel that keeps both sides in sync without constantly asking for fresh data.

Together, the stickers (geo‑hashing) let DoorDash know “where you are,” and the walkie‑talker (WebSocket) instantly tells your app about new nearby orders or driver positions. The result? A smooth, real‑time delivery experience that feels as natural as walking through a well‑mapped city.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
