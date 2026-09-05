---
qid: ing_6ab1ee6d6b__star__local
question: 'Explain: Video metadata storage — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 341
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:55-05:00'
sources: []
---

**Situation** – When I joined a startup that was building a YouTube‑style platform, the catalog grew from 5 M to over 50 M videos in just six months. The existing MySQL table for metadata (title, description, tags, upload date) started choking on read latency during peak traffic.

**Task** – I had to redesign the metadata storage so that search queries remained sub‑200 ms while supporting real‑time ingestion of new uploads and enabling efficient tag‑based recommendations.

**Action** – I migrated the schema to a hybrid solution: a columnar store (Apache Parquet on S3) for bulk analytics, and an in‑memory key–value cache (Redis Cluster) for hot metadata. For search I implemented a lightweight inverted index in Elasticsearch, mapping tags and keywords to video IDs with sharding across 12 nodes. To keep consistency, every upload triggers an asynchronous pipeline: write to Parquet, update Redis, then index into ES via a Kafka stream. I also introduced TTL on Redis entries and used Bloom filters to avoid cache misses for rare tags.

**Result** – Query latency dropped from 1.2 s to 150 ms during traffic spikes; the system handled 30k concurrent streams with zero downtime. Storage costs fell by 35% because hot data lived in memory only while cold data stayed cost‑effective on S3. I learned that a thoughtful mix of caching, indexing, and batch analytics is essential for scalable video metadata at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
