---
qid: ing_28674dae0c__star__local
question: 'Explain: Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 305
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:07-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, our recommendation engine was hitting a plateau—user engagement dropped 18% over two quarters because the pure keyword search couldn’t surface relevant financial products for niche queries.

**Task:**  
I was tasked to redesign the search layer so it could combine structured data (product attributes, risk scores) with unstructured content (reviews, regulatory docs) while keeping response latency under 200 ms for our live dashboard.

**Action:**  
I built a hybrid search pipeline using Elasticsearch’s vector scoring for embeddings from OpenAI’s CLIP model and added a traditional BM25 scorer for metadata. I tuned the blending weight via grid search on an A/B test cohort, implemented caching of top‑k vectors with Redis, and wrapped everything in a FastAPI microservice that batch‑processes requests to keep latency low. I also introduced query intent classification with spaCy to route simple keyword lookups directly to the BM25 index.

**Result:**  
The hybrid engine lifted click‑through rates by 27% and reduced time‑to‑answer from 350 ms to 185 ms. The experiment validated that blending dense and sparse signals can dramatically improve relevance without sacrificing performance, a lesson I now apply whenever we face data sparsity in product search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
