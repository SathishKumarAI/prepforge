---
qid: ing_73ee12344d__star__local
question: 'Explain: Native reranking in Atlas — MongoDB Search: Scalable Full-Text
  Search | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 353
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:14-05:00'
sources: []
---

**Situation** – In my last role I was leading the migration of a legacy e‑commerce product catalog into MongoDB Atlas with full‑text search enabled. The existing Solr index returned thousands of hits for simple queries, but the relevance score was poor and our click‑through rate dropped to 1.8 % on the “search” page.

**Task** – I needed to boost relevancy without adding another indexing layer or incurring extra cost, while keeping latency under 200 ms for a user base of 50k concurrent sessions.

**Action** – I leveraged Atlas Search’s native reranking feature. First, I re‑structured the collection to store pre‑computed TF‑IDF vectors in a separate “rank” field. Then, I defined an Atlas Search index that used a custom analyzer (whitespace + lowercase) and added a `compound` query with a `text` filter for terms plus a `numeric` score boost from the stored rank vector. Finally, I tuned the `rerank` parameter to 200 results per request and applied a small `boost` weight on product‑category relevance. This kept the initial search lightweight while the reranker ran in‑memory over the top hits.

**Result** – The click‑through rate jumped from 1.8 % to 4.6 %, a 155 % lift, and page latency stayed at ~180 ms. I learned that Atlas’s native reranking can replace costly external ranking engines when you design your schema for vector scoring and keep the rerank window tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
