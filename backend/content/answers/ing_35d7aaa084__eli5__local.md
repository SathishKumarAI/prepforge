---
qid: ing_35d7aaa084__eli5__local
question: 'Explain: Geo queries — Geo queries | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 192
total_tokens: 350
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:00:58-05:00'
sources: []
---

Imagine you have a giant library of photos that are tagged with the exact place they were taken—latitude and longitude like coordinates on a map. A **geo query** in Elasticsearch is like asking the librarian: “Show me all pictures taken within this circle or rectangle around Paris.”  

Elasticsearch keeps each photo’s location as a small point (the *geo_point* field). When you run a geo query, it checks every point to see if it falls inside the shape you defined—much like checking which photos’ coordinates lie inside your drawn boundary. It can also return how far each photo is from the center, so you know which ones are closest or furthest.

So, a geo query lets you filter and sort data by where it happened on Earth, just as a librarian would pull out all photos taken in a particular area of a map.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
