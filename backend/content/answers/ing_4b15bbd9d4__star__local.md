---
qid: ing_4b15bbd9d4__star__local
question: 'Explain: Search Service — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 333
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:58:30-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new photo‑sharing feature that let users tag and search for images by content, similar to Instagram’s Explore page. Our current search was slow—average query latency hit 750 ms, and the click‑through rate dropped when results were out of order.

**Task:**  
I had to design a scalable search service that could return top‑10 relevant posts in under 200 ms for millions of daily users while supporting real‑time updates as new photos were uploaded or tags changed.

**Action:**  
I chose a hybrid inverted index + vector similarity engine. First, I built an Elasticsearch cluster with shard replication to handle keyword queries and basic faceting. Then I added a GPU‑accelerated Faiss service for embedding‑based image similarity: each photo’s ResNet‑50 features were stored in IVF flat indices, updated asynchronously via Kafka streams from the upload pipeline. For ranking, I combined BM25 scores and cosine similarity using a learned linear model deployed on a lightweight inference container. To keep latency low, I introduced query caching with Redis for popular tags and used a Bloom filter to pre‑filter non‑existent keywords.

**Result:**  
The new service cut average query latency from 750 ms to 140 ms and increased relevant result precision by 32%, boosting user engagement by 18% in the first month. I learned that balancing keyword search with vector similarity, plus careful caching, is key for large‑scale image search at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
