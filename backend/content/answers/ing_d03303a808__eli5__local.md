---
qid: ing_d03303a808__eli5__local
question: 'Explain: Graph Use Cases — MongoDB: The World\u2019s Leading Modern Data
  Platform | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 258
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:05:22-05:00'
sources: []
---

Imagine your data as a city’s map and each piece of information (a person, a product, a location) is a building. In MongoDB’s “graph” style, you’re not just looking at the buildings; you’re also interested in the roads that connect them—who knows whom, what people bought together, or which cities share traffic routes.

**Graph use cases** let you ask questions like:
- *Who are all the friends of a user up to three degrees away?*  
  (think of walking from one building, turning at every intersection for three turns.)  
- *What products often appear in the same shopping cart?*  
  (tracing a path that starts at one product and ends at another through shared customers.)

A **node** is any item you store (user, product). A **edge** is a relationship between two nodes (friendship, co‑purchase). MongoDB stores these as documents but lets you traverse edges quickly, just like following roads on a map. This makes it easy to build recommendation engines, fraud detection, or social network features without rewriting data into tables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
