---
qid: ing_e2f3cee681__eli5__local
question: 'Explain: Aggregations — Aggregations | Elasticsearch: The Definitive Guide
  [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 219
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:34:55-05:00'
sources: []
---

Imagine you’re at a big farmers’ market where every stall sells fruit.  
Elasticsearch is like the whole market, and an *aggregation* is the way you ask the market “How many apples are there? What’s the average price of oranges?” Instead of looking at each stall one by one (a simple search), you let the market automatically group the stalls by fruit type, count them, find their lowest or highest prices, or calculate averages.

In technical terms:  
*Aggregation* is a feature that lets Elasticsearch collect and summarize data from many documents—like counting how many documents match a query, computing average values, or finding min/max numbers. It’s a built‑in “summarizer” that runs on the server so you don’t have to pull every record into your own program and do the math yourself.

So think of aggregations as the market’s automatic “fruit counters” that give you quick summaries without scanning each stall individually.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
