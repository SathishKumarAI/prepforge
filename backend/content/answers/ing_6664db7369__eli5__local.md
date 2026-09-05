---
qid: ing_6664db7369__eli5__local
question: 'Explain: Now it doesn''t query Third Party Data — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 226
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:18:29-05:00'
sources: []
---

Imagine you’re building a city’s traffic‑control app, but the city’s official map service (Google Maps) is off‑limits. You still need to know where roads are and how long it takes to drive between places, so you must create your own “map” from scratch.

First, collect data yourself: let cars, bikes, or even people carry small sensors that report their GPS coordinates as they move. These reports become the raw pixels of your map. Next, stitch those pixels together into a grid—think of it like painting a quilt where each patch shows traffic speed, road width, and obstacles.

When someone asks “How long will it take to get from Point A to Point B?” you run a simple route‑finding algorithm on this self‑made quilt, just as Google’s system would, but all the pieces come from your own data stream. Thus, no external map API is queried; everything is built and updated internally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
