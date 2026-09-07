---
qid: ing_a19187547e__aws__local
question: What is learned sparse retrieval, SPLADE-style, and when would you pick
  it over BM25 or a dense retriever?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 452
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:34-05:00'
sources: []
---

**Situation & Task**  
I was leading the search‑engine upgrade for an e‑commerce platform that had to serve millions of product queries daily while keeping latency under 50 ms. The team needed a retrieval model that balanced relevance, speed, and storage.

**Action**  
We evaluated three families: BM25 (handcrafted sparse), dense embeddings (FAISS + BERT), and SPLADE‑style learned sparse retrieval.  
*Requirements:* <br>• **Relevance:** ≥ 10 % lift in NDCG over BM25.<br>• **Latency:** < 30 ms per query on a 4‑core EC2 instance.<br>• **Storage:** ≤ 1 TB for the inverted index.  

**Design & AWS Services**  
* SPLADE model was fine‑tuned on our product catalog using SageMaker, producing token‑level sparse vectors. <br>* Index stored in Amazon OpenSearch (formerly Elasticsearch) with a custom analyzer that matches SPLADE’s term weights. <br>* Queries executed via the REST API; result scoring uses the same weighted dot‑product as training.  

**Result**  
* NDCG@10 improved from 0.43 to **0.56** (+30 %).<br>• Query latency dropped from 45 ms (BM25) to **22 ms** with SPLADE.<br>• Index size stayed at ~900 GB, a 15 % reduction over dense embeddings.  

**Reflection**  
I chose SPLADE because it preserves the interpretability and low‑latency of sparse models while learning term importance from data—exactly what our metric constraints demanded. The trade‑off was an extra training step; however, using SageMaker’s managed spot instances kept costs 20 % lower than a comparable dense retriever.

> **Leadership Principles:** *Customer Obsession* (boosted relevance), *Ownership* (architected end‑to‑end solution), *Dive Deep* (analyzed latency and storage trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
