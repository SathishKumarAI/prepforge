---
qid: ing_3092d5a47b__star__local
question: 'Explain: What do we know so far? There — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 370
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:05:41-05:00'
sources: []
---

**Situation:**  
I was tasked with designing a high‑scale location‑based recommendation platform for a startup that wanted to compete with Yelp and Google Places. The product needed to serve millions of users worldwide while keeping latency under 100 ms and handling spikes during local events.

**Task:**  
Create an architecture that ingests real‑time check‑ins, stores POIs (points of interest), supports fast geospatial queries, and delivers personalized rankings based on user preferences and historical behavior—all with a budget of $1M for the first year.

**Action:**  
I chose a microservices stack: PostgreSQL + PostGIS for relational data, Redis for hot caches, and Apache Kafka to stream check‑ins. For geospatial indexing I used H3 hexagons at multiple resolutions to bucket locations, enabling efficient range queries in Elasticsearch. The recommendation engine ran as a Spark job on EMR, training collaborative filtering models nightly and publishing embeddings to a CDN‑cached vector store. We added rate‑limiting via Envoy and auto‑scaling based on CloudWatch metrics. To keep costs down, we leveraged spot instances for batch jobs and reserved instances for the core services.

**Result:**  
The system handled 3 M concurrent users with 95th‑percentile latency of 72 ms during a city marathon event. User engagement rose 28% in three months, and the recommendation accuracy (MAP@10) improved from 0.12 to 0.24. I learned that balancing real‑time ingestion with batch ML pipelines requires careful partitioning of data flows and that geospatial indexing can dramatically reduce query cost when scaled properly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
