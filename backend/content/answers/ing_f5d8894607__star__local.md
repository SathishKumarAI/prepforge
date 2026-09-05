---
qid: ing_f5d8894607__star__local
question: 'Explain: Sorting within nested objects. — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 336
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:40:03-05:00'
sources: []
---

**Situation:**  
In a retail analytics project I was tasked with building a search feature for a product catalog that included highly variable supplier information stored as nested documents (supplier name, rating, delivery time). The UI required users to see products sorted by the highest-rated supplier per item.

**Task:**  
Implement a performant Elasticsearch query that sorts parent products based on the maximum `rating` value of their nested suppliers, while still supporting pagination and facet aggregation.

**Action:**  
I used the `_nested` sort feature:  
1. Defined a `nested` field mapping for `suppliers`.  
2. Created an index-time script to cache each product’s top supplier rating in a dedicated field (`top_supplier_rating`) using the `scripted_metric` aggregator during bulk ingestion.  
3. In the search DSL, I added a `sort` clause on `top_supplier_rating` descending and included a `nested` query filter to ensure only products with suppliers were considered.  
4. To avoid re-sorting at query time, I leveraged Elasticsearch’s doc values on the cached field, keeping latency under 70 ms for 1M documents.

**Result:**  
The search response time dropped from ~300 ms to <70 ms, and users reported a smoother experience when sorting by supplier quality. I learned that pre‑aggregating nested data into a parent-level field can dramatically improve sort performance, but it requires careful cache invalidation logic when supplier data changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
