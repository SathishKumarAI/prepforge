---
qid: ing_891eb3d2f8__eli5__local
question: 'Explain: Contextual Embeddings — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 210
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:13:57-05:00'
sources: []
---

Think of every word as a **character in a huge city map**.  
An *embedding* is like giving each character a GPS coordinate—just a point in a high‑dimensional space (a “vector”). The coordinates aren’t random; they’re learned so that characters that share meaning end up close together on the map.

A *vector space* is simply the playground where all those points live. It’s a grid you can move around with arrows (the vector components). When two characters are near each other, their vectors differ by small steps—so you can tell they’re related.

In context‑sensitive models, the GPS coordinate of a word changes depending on its neighbors, just as a person’s position in a crowd shifts with nearby people. Thus, *contextual embeddings* give each word a dynamic address that reflects how it’s used right then, enabling machines to understand nuance without hard‑coded rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
