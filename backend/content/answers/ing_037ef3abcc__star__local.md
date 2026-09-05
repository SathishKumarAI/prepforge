---
qid: ing_037ef3abcc__star__local
question: 'Explain: You have an embedding model and a reranker. Why sell both? Design
  the two-stage retrieval pipeline and tell me when the reranker earns its latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 414
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:35:22-05:00'
sources: []
---

**Situation**  
In my last role at a search‑as‑a‑service startup we were handling over 10 M user queries per day. Our initial vector‑search engine returned top‑k results in 15 ms, but click‑through rate (CTR) was only 2.8 %, far below the target of 4.5 %.  

**Task**  
I had to boost relevance without breaking our real‑time SLA and justify selling both an embedding model and a reranker as separate services to enterprise customers who needed fine‑grained control over latency vs quality.

**Action**  
1. Built a lightweight dense encoder (FAISS index) that served the first 100 candidates in <20 ms per query.  
2. Implemented a gradient‑boosted tree reranker that scores each candidate using TF‑IDF, BM25, and semantic similarity features; it runs on a GPU pool and costs ~1 ms per item when batched.  
3. Introduced an adaptive threshold: if the top‑k cosine score gap > 0.15 we skip reranking (latency <20 ms); otherwise we trigger the reranker, adding only ~5 ms for the remaining 50 candidates.  
4. Exposed two APIs – “Fast” (embedding only) and “Premium” (embedding + optional reranker), letting customers choose based on SLA.

**Result**  
CTR rose to 4.1 % within three weeks, and latency stayed under 30 ms for 92 % of queries. The pricing model increased revenue by 18 % YoY. I learned that a two‑stage pipeline can balance speed and relevance when the reranker’s added latency is only incurred on ambiguous cases, making both components valuable selling points.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
