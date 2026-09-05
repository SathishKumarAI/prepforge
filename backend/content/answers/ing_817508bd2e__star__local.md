---
qid: ing_817508bd2e__star__local
question: 'Q: You are designing a legal document search system with 5M documents.
  The team is debating between dense bi-encoder search with a cross-encoder reranker
  vs. ColBERT. What do you recommend?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 384
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:52:17-05:00'
sources: []
---

**Situation:**  
At my previous firm we were tasked with building an internal legal document retrieval system for a client’s compliance team. The corpus had grown to 5 million PDFs and the SLA required sub‑second response times for keyword queries, while also supporting nuanced semantic search for clauses.

**Task:**  
I needed to choose an architecture that balanced latency, accuracy, and resource usage: fast initial ranking without sacrificing recall, and a cost‑effective implementation that could scale with our cloud budget.

**Action:**  
I evaluated both approaches. For the dense bi‑encoder + cross‑encoder pipeline, I benchmarked Sentence‑Transformers on GPU for embeddings (≈10 ms per doc) and used Faiss IVF index to get 1–2 ms query times, but the cross‑encoder reranker required a second pass over top‑k results, adding ~50 ms.  
With ColBERT, I leveraged its late interaction mechanism: token‑level embeddings (≈15 ms per doc) and efficient GPU matrix multiplication allowed me to retrieve 200 candidates in <5 ms, then re‑rank locally on CPU with negligible cost.  
I also ran a pilot on 500k documents; ColBERT achieved 12% higher NDCG@10 while keeping total query latency under 20 ms, and it used only half the GPU memory of the dense pipeline.

**Result:**  
I recommended adopting ColBERT for production. Deployment reduced average response time from 75 ms to 18 ms, improved user satisfaction scores by 17%, and cut GPU usage (and costs) by ~45%. I learned that early‑interaction models can deliver superior speed–accuracy trade‑offs in large legal corpora when properly tuned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
