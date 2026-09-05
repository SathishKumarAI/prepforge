---
qid: ing_6addae1503__eli5__local
question: 'Explain: the risk of finding some points that — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 204
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:25:16-05:00'
sources: []
---

Imagine you’re trying to teach a robot how to find the best pizza delivery spot on a city map. You give it thousands of GPS coordinates (the “points”) and let it learn which ones usually lead to quick deliveries. The **risk** is that if your data set only contains points from busy downtown streets, the robot will think those are always the best spots—even when a new customer orders from a quiet suburb. In machine‑learning terms, this is *sampling bias*: you’re “finding some points” (the familiar downtown locations) and assuming they represent all possible places. The system can then make wrong predictions for unseen areas, just as the robot would misguide deliveries in quieter neighborhoods. This reminds us to collect diverse data so every point on the map gets a fair chance to be learned from.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
