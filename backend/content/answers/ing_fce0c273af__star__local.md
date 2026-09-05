---
qid: ing_fce0c273af__star__local
question: 'Explain: High Level Design — Twittersearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 368
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:18-05:00'
sources: []
---

**Situation**  
In my previous role at a media analytics startup, we launched a product that let users discover trending topics on Twitter in real time. Our initial prototype could only fetch tweets via the REST API and was limited to about 500 queries per minute, causing severe lag during peak hours.

**Task**  
I had to design a scalable high‑level architecture for a Twitter search engine that could ingest millions of tweets per day, support keyword + hashtag queries with sub‑second latency, and allow future expansion to sentiment analysis.

**Action**  
I started by decomposing the system into three layers: ingestion, processing, and query. For ingestion I chose Apache Kafka as a durable message bus, feeding raw tweet streams from Twitter’s Streaming API. In the processing layer I built a Spark Structured Streaming job that parsed tweets, extracted metadata, and indexed them in Elasticsearch with custom analyzers for hashtags and emojis. To keep latency low I implemented an in‑memory cache (Redis) for the most recent 10 k tweets per keyword. Finally, I exposed a RESTful API using FastAPI backed by async workers to query Elasticsearch and return results within 150 ms.

**Result**  
The new pipeline processed 3 million tweets daily with 95% uptime. Query latency dropped from 2.5 s to 120 ms, enabling real‑time dashboards for clients. The modular design also let us add a sentiment analysis microservice without touching the core search logic. I learned that balancing batch and stream processing, coupled with a layered cache strategy, is key to scaling real‑time social media analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
