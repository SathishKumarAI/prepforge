---
qid: ing_b18180bad3__star__local
question: 'Explain: ColBERT Architecture — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 333
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:26:40-05:00'
sources: []
---

**Situation:**  
During my last internship at a search‑engine startup, we were stuck with latency spikes when scaling our document retrieval pipeline to handle millions of user queries per day.

**Task:**  
I was asked to redesign the ranking stage so that it could run in real time without sacrificing recall, and to prove that the new approach would be faster than our current BM25+learning‑to‑rank baseline.

**Action:**  
I chose ColBERT’s late‑interaction architecture. I first tokenized queries and documents with a pre‑trained BERT base, then projected each token embedding into a 128‑dimensional space via a lightweight linear layer. For every query–document pair I computed the maximum dot product between any query token and any document token (the “late interaction”), which captures fine‑grained relevance while keeping the computation embarrassingly parallel. I implemented this in PyTorch, used FAISS for approximate nearest‑neighbor filtering to limit candidate documents to 100 per query, and wrapped the whole process in a GPU kernel that processes batches of 32 queries in under 10 ms.

**Result:**  
The new pipeline cut average retrieval latency from 120 ms to 8 ms while maintaining a MAP score within 1.2% of the old system. I learned how late‑interaction balances expressiveness and efficiency, and how careful dimensionality reduction can unlock GPU throughput for large‑scale search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
