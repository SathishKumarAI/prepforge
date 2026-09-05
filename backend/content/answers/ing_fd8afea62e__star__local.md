---
qid: ing_fd8afea62e__star__local
question: 'Q: How do you balance dense vs sparse in hybrid search?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 401
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:55:53-05:00'
sources: []
---

**Situation** – At my last role I was tasked with revamping the product recommendation engine for a fashion e‑commerce site that had 3 million SKUs and a user base of 500k daily active users. Our existing keyword‑based search (sparse) was fast but often returned irrelevant results, while the newer dense embedding model (from BERT) gave better semantic matches but was too slow to serve at scale.

**Task** – I needed to design a hybrid retrieval pipeline that could deliver high relevance and sub‑200 ms latency for 90% of queries, without doubling our compute spend.

**Action** – First, I profiled query patterns: 70% were simple keyword searches (e.g., “red dress”) and 30% were semantic (e.g., “something similar to this summer top”). I built a rule‑based router that sent the majority of queries to an inverted‑index sparse engine (Elasticsearch) and only routed complex, high‑confidence semantic queries to the dense vector search (FAISS with 384‑dim embeddings). To keep latency low, I pre‑computed nearest‑neighbor buckets for the top 10k popular items and cached them in Redis. For the remaining items I used a two‑stage filtering: first retrieve top‑100 candidates from sparse index, then re‑rank them with the dense model. I also applied dimensionality reduction (PCA) to cut vector size by 40% without hurting MRR.

**Result** – The hybrid system achieved an average latency of 145 ms and improved click‑through rate by 18% over the previous sparse‑only baseline, while keeping GPU usage under 30%. I learned that a smart routing layer coupled with selective re‑ranking can combine the strengths of dense and sparse models without compromising performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
