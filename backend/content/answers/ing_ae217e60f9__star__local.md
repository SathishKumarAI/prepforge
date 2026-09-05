---
qid: ing_ae217e60f9__star__local
question: 'Explain: Dense (Semantic) Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 380
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:27-05:00'
sources: []
---

**Situation** – At my previous company we were launching a knowledge‑base product for enterprise support. The existing keyword‑based search was returning too many irrelevant hits; our SLA required a precision of at least 0.85 on the top‑5 results.

**Task** – I had to design a hybrid retrieval system that combined sparse BM25 scoring with dense semantic embeddings, and integrate it into the production search pipeline without breaking latency guarantees (≤200 ms per query).

**Action** – First, I fine‑tuned a Sentence‑BERT model on our internal FAQ corpus to generate 384‑dimensional vectors. For every document, I stored both the BM25 index (ElasticSearch) and the dense vector in an HNSW graph (Faiss). At query time, I performed a quick BM25 filter to pull the top 1,000 candidates, then re‑ranked them using cosine similarity against the query embedding. To keep latency low, I batched the Faiss lookups on GPU and used a hybrid score that weighted BM25 and dense scores (0.4 × BM25 + 0.6 × cosine). I also added an A/B test harness to monitor precision‑recall in real time.

**Result** – The hybrid system raised top‑5 precision from 0.68 to 0.87, exceeding our SLA and cutting the average number of clicks per user by 23%. Latency stayed under 180 ms on average. I learned that careful weighting between sparse and dense signals, coupled with a lightweight filtering step, can deliver high‑quality semantic search in production at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
