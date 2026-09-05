---
qid: ing_e7960d771c__star__local
question: 'Explain: Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 343
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:45-05:00'
sources: []
---

**Situation:**  
At my last job I was tasked with redesigning the product search for an e‑commerce platform that had just hit 3 million daily page views and a 0.6 s average query latency on our legacy inverted index.

**Task:**  
I needed to cut latency by 40% while supporting real‑time updates (new products, price changes) and enabling personalized ranking signals in the same query path.

**Action:**  
I migrated to an Elasticsearch cluster with a hybrid indexing strategy:  
1. **Sharded Lucene indexes** for term lookups, tuned `index.merge.policy` and `refresh_interval`.  
2. A **dedicated dense vector field** (FAISS‑style) for semantic embeddings of product titles, trained on the last 6 months of click logs.  
3. Implemented a **two‑phase query pipeline**: first a fast term filter to reduce candidates, then a GPU‑accelerated nearest‑neighbor search for relevance scoring.  
4. Added a **real‑time ingestion layer** using Kafka Connect to push updates into a write‑ahead log, ensuring consistency with the read cluster via index alias swapping.

**Result:**  
Latency dropped from 0.6 s to 0.35 s (≈42% reduction), and click‑through rate on search results improved by 12%. I learned that combining traditional inverted indexing with vector embeddings can deliver both speed and personalization, but careful tuning of shard size, refresh policy, and real‑time pipelines is critical for production stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
