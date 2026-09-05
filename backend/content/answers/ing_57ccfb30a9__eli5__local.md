---
qid: ing_57ccfb30a9__eli5__local
question: 'Explain: Let''s say there are these two roads — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 297
total_tokens: 461
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:55:41-05:00'
sources: []
---

Think of building a new Google‑Maps app like planning a city’s road network.  
You have **two main routes**:  

1. **The “Map Road”** – it carries the picture of every street, park, and landmark. It must be fast enough that when you zoom in or out, the map loads instantly. This is like a *caching layer* (think of a library’s quick‑access shelf) that keeps the most used maps ready for anyone who asks.  

2. **The “Navigation Road”** – it decides the best path from point A to B. It has to check traffic, road closures, and construction in real time, just as a GPS recalculates routes while you drive. This uses a *routing engine* that looks at live data (traffic sensors) and picks the quickest way.

In an interview, you’re asked to design both roads: how to store millions of map tiles so they load quickly, and how to compute routes on‑the‑fly for countless users, all while keeping costs low. The analogy shows the two essential parts—fast data delivery and real‑time decision making—that make Google Maps work smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
