---
qid: ing_c4789bccd3__star__local
question: 'Explain: Performance at scale — MongoDB Search: Scalable Full-Text Search
  | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 391
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:02:50-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a product recommendation engine for an e‑commerce startup that had just hit 3 million active users. The search feature needed to return relevant results in under 300 ms even when the catalog grew to 50 M items.

**Task** – I had to design a full‑text search layer on MongoDB that could scale horizontally, keep latency low and support real‑time updates as new products were added daily.

**Action** – First, I enabled **MongoDB Atlas Search** with a custom analyzer (lowercase + stop‑words) and built compound text indexes on `title`, `description` and `tags`. To handle the data volume I sharded the collection by `category_id` and used *search* pipelines that pushed heavy scoring logic into the query engine. For latency, I added a dedicated **TTL index** to purge stale recommendations and implemented a background job that pre‑calculates relevance scores into a separate “hot” collection, which is read-only during queries. Finally, I leveraged MongoDB’s **Read Preference** set to *secondaryPreferred* with local thresholds to spread traffic across replicas.

**Result** – The search latency dropped from 1.2 s to 220 ms at peak load (10k concurrent users). Click‑through rate on recommended items rose by 18 % in the first month, and we avoided a costly migration to ElasticSearch because MongoDB handled both storage and search within our existing stack. I learned that careful index design, sharding strategy, and pre‑computing scores can turn MongoDB into a high‑performance full‑text engine at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
