---
qid: ing_8a9ec5b5f6__star__local
question: 'Explain: Metadata — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 351
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:09:33-05:00'
sources: []
---

**Situation** – At a previous startup, we were tasked with building a new music recommendation engine. The catalog had over 15 million tracks and our existing metadata was sparse: only title, artist, and release year existed in the database. Our analytics team found that recommendation accuracy dropped by 18 % when users explored niche genres.

**Task** – I needed to design a scalable metadata layer that could ingest millions of new tags, support real‑time queries for collaborative filtering, and integrate with our existing PostgreSQL catalog without downtime.

**Action** – I first mapped out an event‑driven pipeline using Kafka to capture user interactions (play, skip, like). Each event fed into a Spark job that extracted latent features (tempo, key, mood) via librosa and stored them in a columnar store (Parquet on S3). For search and recommendation, I built a Redis‑based inverted index keyed by genre, mood, and acoustic similarity. The metadata schema was versioned with Avro so we could evolve it without breaking consumers. I also added an API gateway layer that served metadata via GraphQL, allowing clients to request only the fields they needed.

**Result** – Within three months, recommendation precision improved from 0.62 to 0.78 (AUC). The new metadata pipeline processed 50 k events per second with <200 ms latency for lookup queries. I learned that a decoupled, event‑driven architecture lets you evolve rich metadata without impacting core services and that caching at the edge can dramatically reduce query times.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
