---
qid: ing_4ff537434e__star__local
question: 'Explain: Pitfall 6: Confusing Embedding and Generation Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 358
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:08:07-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a search feature for an e‑commerce platform. The product catalog had over 120,000 items and our goal was to return the top three relevant products in under 300 ms for every user query.

**Task:**  
I needed to design a semantic retrieval system that could understand user intent and surface the most appropriate items, all while staying within strict latency limits.

**Action:**  
Initially I had been using a large text‑generation model (GPT‑3) to produce product descriptions on the fly and then feeding those into a similarity search. This caused massive inference times and inconsistent relevance because generation models are optimized for fluency, not fast vector lookup.  
I pivoted to a dedicated embedding pipeline: first, I fine‑tuned a sentence‑transformer model (SBERT) on our own product descriptions and user reviews; then I pre‑computed 768‑dimensional embeddings for every catalog item and stored them in an IVF index using Faiss. For each query, I generated a single short prompt to the generation model *only* for disambiguation when the top two embeddings were within a tight similarity threshold, otherwise I used the nearest‑neighbor search directly.

**Result:**  
Latency dropped from 1.2 s to 0.25 s per request, and click‑through rate on product recommendations increased by 18%. The exercise taught me that embedding models should drive retrieval speed and relevance, while generation models are best reserved for low‑frequency, high‑value disambiguation tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
