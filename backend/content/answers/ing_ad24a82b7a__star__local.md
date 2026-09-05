---
qid: ing_ad24a82b7a__star__local
question: 'Explain: Retrieval Quality Drift — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 363
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:29-05:00'
sources: []
---

**Situation:**  
During a quarterly audit of our customer‑support chatbot that uses Retrieval-Augmented Generation (RAG), I noticed the answer relevance score dropped from an average of 0.82 to 0.68 over two months. Our internal metric, “retrieval quality drift,” was flagged by the monitoring dashboard.

**Task:**  
I needed to diagnose the cause of the drift, restore retrieval accuracy above 0.80, and implement a robust evaluation pipeline that would detect future degradation early.

**Action:**  
1. **Data Profiling:** I extracted the top‑20 failing queries and compared their query embeddings against the index using cosine similarity histograms.  
2. **Index Refresh:** The search index had stale embeddings from an outdated corpus; I re‑indexed with the latest documents, applied BM25+FAISS hybrid retrieval, and tuned the k‑value to 12.  
3. **Evaluation Pipeline:** Built a nightly test harness that runs 1,000 synthetic queries against both the old and new indices, records precision@k, recall, and latency, and alerts if drift exceeds 5%.  
4. **Continuous Learning Loop:** Integrated automatic re‑embedding of newly added documents every week to keep the vector space up‑to‑date.

**Result:**  
Relevance scores rebounded to 0.83 within a day, exceeding the target. The new pipeline reduced detection latency from weeks to hours and cut manual review time by 40%. I learned that proactive index maintenance combined with automated drift monitoring is essential for sustained RAG performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
