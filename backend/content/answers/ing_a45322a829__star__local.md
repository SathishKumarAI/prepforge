---
qid: ing_a45322a829__star__local
question: 'Explain: Database Schema — Mapserviceyelpgooglemap'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 333
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:57-05:00'
sources: []
---

**Situation** – While leading a mobile app launch for a local‑business discovery platform, our team noticed that users were frustrated when searching for restaurants near a location: the results flickered between Yelp and Google Maps data, with no consistent address or rating format.

**Task** – I was tasked to design a unified database schema that could ingest real‑time listings from both Yelp’s API and Google Places, normalize fields (name, address, coordinates, reviews), and expose a single endpoint for the app, all while keeping latency under 200 ms.

**Action** – I mapped out an “Entity” table for businesses with a composite key of `source_id` + `provider`. A separate `ProviderMapping` table linked Yelp IDs to Google Place IDs via fuzzy matching on names and geohashes. Address components were stored in a JSONB column; coordinates had a 2‑D spatial index (`GiST`). I used Kafka streams to ingest API payloads, transform them with a Python microservice, and write to PostgreSQL. A caching layer (Redis) held the last 5 k results per region.

**Result** – The new schema cut search latency from ~400 ms to 120 ms, reduced duplicate listings by 35%, and increased user satisfaction scores by 18% in the first quarter after launch. I learned that thoughtful normalization and real‑time ETL pipelines are key when merging heterogeneous map data sources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
