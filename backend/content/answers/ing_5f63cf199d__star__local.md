---
qid: ing_5f63cf199d__star__local
question: What is hybrid search? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 355
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:15-05:00'
sources: []
---

**Situation** – In late 2023 I was leading the migration of our e‑commerce product catalog from a legacy SQL database into a vector‑search powered by OpenSearch. The existing keyword search returned too many irrelevant items, and customers were complaining about missing products.

**Task** – My goal was to design a hybrid search pipeline that combined exact keyword matching with semantic similarity so we could surface both precise matches and contextually relevant recommendations while keeping latency under 200 ms for 95% of queries.

**Action** – I first indexed product titles, descriptions, and SKU tags in the OpenSearch text fields. For embeddings I used a distilled BERT model (≈300 M parameters) to generate 768‑dim vectors stored in a dedicated “vector” field. At query time I executed a two‑stage search: an initial keyword filter narrowed results to 200 candidates, then a k‑NN re‑rank using cosine similarity on the vector field pulled the top 20 semantic matches. To keep latency low I pre‑computed embeddings for new products and used OpenSearch’s “search after” pagination. I also added a feedback loop where click data was fed back into a lightweight relevance model to continuously refine weights.

**Result** – After launch, organic search conversion rose by 18 % and average order value increased by 12 %. Search latency stayed below 190 ms for 97 % of traffic. I learned that blending exact and semantic retrieval can dramatically improve user experience without sacrificing performance, but it requires careful indexing strategy and real‑time re‑ranking to balance precision and recall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
