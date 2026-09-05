---
qid: ing_6046daf5ff__eli5__local
question: 'Explain: Sparse (Keyword) Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 203
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:09:06-05:00'
sources: []
---

Imagine you’re looking for a specific recipe in a huge cookbook that’s split into two parts: the printed pages and an online database of tags.  
**Sparse keyword retrieval** is like flipping through the printed pages and finding every page that contains the word “chicken.” The search looks only at those few words, so it’s fast but can miss recipes where “chicken” appears in a different form or context.  

A **hybrid search** adds a second step: after you get the candidate pages, it consults the online tag database (a dense vector index) that knows how similar each recipe is to your overall idea of “spicy chicken.” It then re‑orders the results so that the most relevant recipes rise to the top.  

So, sparse retrieval quickly narrows the field by keywords; hybrid search refines it with similarity from a richer, vector‑based memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
