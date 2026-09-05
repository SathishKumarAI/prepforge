---
qid: ing_302330211b__star__local
question: 'Explain: Non-functional — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 341
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:04:42-05:00'
sources: []
---

**Situation** – In my last role at a media company, our content discovery platform was built on keyword‑based search. By the end of Q3, user satisfaction scores for “find relevant articles” dropped to 58%, and click‑through rates were down 12% year‑over‑year.

**Task** – I was tasked with redesigning the search engine as a non‑functional semantic search system that could handle natural language queries, maintain performance at scale, and integrate seamlessly with our existing REST API without downtime.

**Action** – First, I evaluated open‑source embeddings (Sentence‑BERT) and benchmarked them against our custom TF‑IDF baseline on a 1.2 M article corpus. After selecting the best model, I built an incremental indexing pipeline using Apache Kafka to stream new articles into an Elasticsearch vector index. To keep latency under 200 ms for 99% of queries, I introduced a two‑tier cache: an in‑memory LRU store for hot embeddings and a disk‑based HNSW graph for the full corpus. Finally, I rolled out A/B testing with feature flags to monitor impact on user metrics.

**Result** – Within six weeks of deployment, search relevance scores (Mean Reciprocal Rank) jumped from 0.42 to 0.68, click‑through rates increased by 18%, and user satisfaction rose to 81%. I learned that balancing model accuracy with real‑time constraints requires careful caching strategies and continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
