---
qid: ing_78aa7314f2__eli5__local
question: 'Explain: Topical relevance: Hybrid search with reranking'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 215
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:47:53-05:00'
sources: []
---

Imagine you’re looking for a recipe in a huge cookbook that mixes text and pictures.  
**Hybrid search** is like using two different tools at once: first, you flip through the index (the “vector” part) to find chapters whose overall theme sounds right; then you scan each page’s actual words (the “keyword” part) to see if it truly matches your taste.

After that, **reranking** is a friendly chef who tastes every shortlisted recipe and orders them by how well they fit your craving.  
So the process is:  
1. **Retrieve** – gather a broad set of possible recipes using both theme‑matching and exact word matching.  
2. **Rerank** – reorder those candidates so the most relevant one appears first.

The result? A quick, accurate answer that feels almost like having a personal assistant who knows both the cookbook’s structure and its content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
