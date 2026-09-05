---
qid: ing_d34d1d69aa__star__local
question: 'Explain: Playlist Database — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 325
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:32:02-05:00'
sources: []
---

**Situation** – In my last internship I was asked to prototype a new feature for a music streaming service: an advanced “Smart Playlist” engine that could generate playlists in real time based on user mood and listening history. The existing database had millions of tracks, users, and listening events, but it wasn’t optimized for quick joins between these large tables.

**Task** – I needed to design a scalable, low‑latency data model that would support sub‑second playlist generation while keeping write costs reasonable for the daily billions of play events.

**Action** – I chose a hybrid approach: a relational schema (PostgreSQL) for core user and track metadata, and a distributed NoSQL store (Apache Cassandra) for event logs. I created a materialized view table that pre‑aggregated listening counts per genre/artist per user in 5‑minute windows, updated via Kafka streams. For real‑time scoring I built a lightweight in‑memory cache with Redis to hold the latest mood tags and playlist seeds. I also added a bloom filter layer to quickly exclude tracks already played recently.

**Result** – The prototype delivered playlists within 350 ms on average, compared to 1.2 s with the legacy system. Load testing showed it could handle 10× the current traffic while keeping write costs down by 25%. I learned how to blend SQL and NoSQL strengths and the importance of pre‑aggregation for latency‑critical services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
