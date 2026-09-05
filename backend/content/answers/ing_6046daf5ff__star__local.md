---
qid: ing_6046daf5ff__star__local
question: 'Explain: Sparse (Keyword) Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 346
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:44-05:00'
sources: []
---

**Situation** – At my last job I was tasked with improving the product search for a SaaS knowledge base that served over 50 000 articles and had seen a 35 % drop in click‑through rate after we rolled out a new content taxonomy.

**Task** – I needed to build a hybrid search layer that could combine keyword relevance (BM25) with semantic similarity (dense vectors) so users would see the most contextually relevant answers without sacrificing speed or cost.

**Action** – I started by indexing each article in Elasticsearch, using the built‑in BM25 scorer for keyword hits and adding a separate dense field that stored a 384‑dimensional sentence transformer embedding. At query time I ran two parallel queries: one pure BM25 and one ANN search via FAISS on the vector field. I then merged the results by scoring them with a weighted linear combination (0.6 BM25, 0.4 cosine similarity) and re‑ranked the top 20 hits before returning to the user. To keep latency under 200 ms I cached the hybrid rankings for the most frequent queries and used Elasticsearch’s async search API.

**Result** – The hybrid approach lifted click‑through by 22 % in three weeks, reduced average time spent on page by 18 %, and cut server cost by 12 % thanks to better cache hit ratios. I learned that blending sparse and dense retrieval can dramatically improve relevance while staying within operational constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
