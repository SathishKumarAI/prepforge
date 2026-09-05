---
qid: ing_72faf89d3e__star__local
question: Everyone focuses on retrieval algorithms - what's actually the hardest part
  of building RAG over enterprise documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 349
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:17:39-05:00'
sources: []
---

**Situation:**  
At my last company we were tasked with launching a Retrieval-Augmented Generation (RAG) system for a legal firm that had 3 million pages of case law, statutes, and internal memos stored in an old SharePoint archive. The goal was to let attorneys ask questions in natural language and get accurate excerpts instantly.

**Task:**  
I needed to ensure the model could reliably surface the right document fragments while staying within strict latency (≤300 ms) and compliance constraints. Retrieval accuracy had already been nailed with BM25, so the real challenge was how to present that information coherently and auditably.

**Action:**  
1. Built a multi‑layer index: first a vector store on sentence embeddings for quick filtering, then a fine‑tuned ranker (Siamese BERT) to re‑rank top‑k passages.  
2. Implemented a provenance layer that tags each token with its source URL and timestamp, feeding into a lightweight audit log.  
3. Added a “confidence filter” that only allowed generation if the aggregated similarity score exceeded 0.85; otherwise it returned a safe fallback.  
4. Tuned batching and GPU memory usage so inference stayed under the latency target.

**Result:**  
The system cut document retrieval time from 1.8 s to 0.25 s, improved answer precision by 18% (measured against a held‑out QA set), and satisfied all regulatory audit requirements. I learned that in RAG, data provenance and safety constraints are often the hardest parts to get right—much harder than finding the right retrieval algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
