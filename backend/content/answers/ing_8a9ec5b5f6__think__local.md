---
qid: ing_8a9ec5b5f6__think__local
question: 'Explain: Metadata — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 499
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:13:36-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Ask: *What exactly is “metadata” in this context?* (track info, artist bio, album art, audio features).  
- Assume we need to serve millions of users with low latency and support future analytics.  
- Decide on a bounded‑time interview answer (~5–10 min) – focus on high‑level architecture, not every microservice detail.

**2️⃣ Adopt the “Data‑centric system design” framework**  
1. *Define data model & schema* (entities: Track, Album, Artist, Playlist).  
2. *Storage choices*: primary store (NoSQL/relational), cache, CDN for media, analytics warehouse.  
3. *Ingestion pipeline*: ETL from music labels → staging → production tables.  
4. *Access patterns*: read‑heavy (search, playback) vs write‑heavy (curation).  

**3️⃣ Step‑by‑step reasoning**  
- **Modeling**: use a graph or relational DB for relationships; store metadata in JSON blobs for flexibility.  
- **Storage**: pick PostgreSQL for ACID guarantees on small writes; cache frequently accessed records with Redis/Memcached.  
- **CDN**: serve album art & audio features from edge nodes to reduce latency.  
- **API layer**: expose gRPC/REST endpoints, use request‑based caching and rate limiting.  
- **Analytics**: stream changes to Kafka → Spark/Presto for batch queries; keep a separate OLAP cube for recommendation engines.

**4️⃣ Common pitfalls to avoid**  
- Treating metadata as static – forget eventual consistency or versioning.  
- Over‑optimizing read paths at the expense of write scalability.  
- Neglecting GDPR/DMCA compliance in data storage and access controls.

**5️⃣ Sanity checks & verbal communication**  
- Verify that each component addresses latency, scale, consistency, and cost.  
- Walk through a user flow: search → metadata lookup → cache hit → CDN delivery.  
- Summarize trade‑offs (e.g., Redis vs. Postgres) and why the chosen mix meets Spotify’s requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
