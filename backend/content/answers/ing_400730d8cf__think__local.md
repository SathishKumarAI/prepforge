---
qid: ing_400730d8cf__think__local
question: 'Explain: 4.2 Requirement 2: Music Search — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 451
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:55:49-05:00'
sources: []
---

**1️⃣ Clarify the ask & scope**  
   - Confirm whether the interviewer wants a *high‑level design* (components, data flow) or an *implementation‑ready sketch* (tables, APIs).  
   - Identify key constraints: scale (billions of tracks), latency (<200 ms), personalization, and search features (artist, genre, mood, acoustic similarity).

**2️⃣ Adopt a system‑design framework**  
   - **Problem definition → Functional & non‑functional requirements**.  
   - **Architecture layers**: ingestion, storage, indexing/search, ranking, API gateway, cache, monitoring.  
   - **Trade‑offs**: eventual consistency vs. freshness; batch vs. streaming updates.

**3️⃣ Step‑by‑step reasoning**  
   1. *Data model*: normalize tracks → artists → albums; store metadata in a relational DB or NoSQL hybrid.  
   2. *Indexing*: build inverted indexes for keyword search, use vector embeddings for similarity (FAISS/Annoy).  
   3. *Search flow*: query parsing → filter by tags → rank by relevance + user profile.  
   4. *Scalability*: shard indices horizontally; cache popular queries in Redis; use CDN for assets.  
   5. *Monitoring*: log latency, error rates; alert on cache misses.

**4️⃣ Common pitfalls to avoid**  
   - Assuming a single monolithic index handles all queries—break into specialized indexes (text vs. vector).  
   - Neglecting update latency: real‑time popularity changes must propagate quickly.  
   - Over‑optimizing for cold start; ensure reasonable defaults.

**5️⃣ Sanity‑check & verbalize**  
   - Re‑state requirements in your own words to confirm alignment.  
   - Walk through a sample query end‑to‑end, noting each component’s role and potential bottlenecks.  
   - Ask clarifying questions about user personas or expected traffic spikes before finalizing the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
