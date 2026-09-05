---
qid: ing_3ca81672b2__star__local
question: 'Explain: Hybrid search & fusion — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 408
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:35-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with revamping the FAQ chatbot for an online electronics retailer that had a 40 % churn rate on support tickets because users kept asking questions it couldn’t answer accurately.

**Task:**  
I needed to build a system that could pull precise answers from our knowledge base while still handling ambiguous user queries—essentially marrying traditional keyword retrieval with modern semantic search so the bot’s responses felt natural and correct.

**Action:**  
I implemented a hybrid search pipeline. First, I indexed every FAQ article in Elasticsearch for fast keyword lookup. Parallel to that, I generated 1536‑dimensional OpenAI embeddings for each article and stored them in Pinecone. For every user query, I ran both searches: the vector similarity returned top‑k “semantic matches” while the keyword search returned “exact match” candidates. I then fused the results using a weighted voting scheme—semantic hits got a 0.7 weight, keyword hits 0.3—and applied a confidence threshold of 0.65 before picking the final answer. To keep latency low, I cached popular queries in Redis and tuned batch sizes for the embedding API.

**Result:**  
After deployment, click‑through on suggested answers rose from 52 % to 78 %, and ticket volume dropped by 18 %. The exercise taught me that a carefully balanced fusion of retrieval methods can dramatically improve user satisfaction while keeping response times under 300 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
