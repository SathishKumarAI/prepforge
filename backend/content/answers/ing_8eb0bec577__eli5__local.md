---
qid: ing_8eb0bec577__eli5__local
question: Which distance metric should you use for embedding search - cosine, dot
  product, or Euclidean - and does the choice actually matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 193
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:23:01-05:00'
sources: []
---

Think of every document as a *direction* in a huge room (the embedding space).  
The **cosine** distance measures how close two directions are—just like checking if two arrows point the same way, regardless of their length.  
The **dot product** is that same check but also cares about how long each arrow is; it’s useful when you want longer vectors to count more.  
**Euclidean** distance treats them as points in space and measures straight‑line distance—so both direction *and* magnitude matter.

For most search tasks, cosine (or dot product if your system already normalises) works best because we care about similarity of meaning, not vector size. Switching to Euclidean usually changes the ranking a lot, so yes, the choice does matter. Choose cosine unless you have a specific reason to weight length.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
