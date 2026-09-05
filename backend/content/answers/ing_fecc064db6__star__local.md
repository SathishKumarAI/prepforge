---
qid: ing_fecc064db6__star__local
question: 'Explain: How Each Architecture Processes a Query-Document Pair'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 341
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:21-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving the relevance scoring for our e‑commerce search engine, which relied on three different retrieval architectures: BM25, a dense embedding model (DPR), and a hybrid cross‑encoder transformer.

**Task:**  
I needed to benchmark how each architecture processed a query–document pair, identify bottlenecks, and recommend an optimal mix for real‑time ranking under 50 ms latency.

**Action:**  
For BM25 I scripted the classic TF‑IDF scoring pipeline in Lucene, noting that it tokenized queries and documents independently. For DPR I encoded the query with a lightweight encoder and each document with a separate encoder, then computed cosine similarity over their vectors—fast but lacking fine‑grained interaction. Finally, for the cross‑encoder I concatenated the query and document tokens, passed them through BERT to obtain an interaction‑aware score; this required GPU inference but produced the highest precision. I profiled CPU/GPU usage, measured mean reciprocal rank (MRR) on a held‑out test set, and plotted latency vs. accuracy curves.

**Result:**  
The hybrid approach—using BM25 for initial pruning, DPR for fast re‑ranking, and cross‑encoder on the top 10 candidates—boosted MRR by 18 % while keeping average latency under 35 ms. I learned that understanding each architecture’s tokenization, interaction depth, and computational cost is key to designing efficient search pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
