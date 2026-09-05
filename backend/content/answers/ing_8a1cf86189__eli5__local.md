---
qid: ing_8a1cf86189__eli5__local
question: 'Explain: point is that basically we want to — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 206
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:15:19-05:00'
sources: []
---

Think of a huge pizza‑delivery city where every house has a secret “pizza code” (a geo‑hash). When you order through DoorDash, the app sends your phone’s current code to the server. The server looks up all restaurants whose codes are close enough—like finding all pizzas in the same zip block—so it only shows nearby options.  

While you wait for delivery, the app and the kitchen stay in a constant chat room (WebSocket). This is like having a walkie‑talk between your phone and the restaurant: as soon as the driver leaves or arrives, the server pushes that update instantly instead of asking “What’s happening?” repeatedly.  

So geo‑hashing shrinks the search to the right neighborhood, and WebSockets keeps everyone in sync in real time—just like a pizza place that knows exactly where you are and tells you when your slice is on its way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
