---
qid: ing_b045a674d6__think__local
question: 'Explain: Requirements Gathering — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 486
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:38:28-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What exactly is “Requirements Gathering” for a Spotify‑style system?*  
   - Assume we’re targeting core features (search, playback, playlists) plus scalability.  
   - Note constraints: real‑time streaming, high concurrency, global users.

**2️⃣ Pick a mental model / framework**  
   - Use the classic **System Design checklist**: *functional requirements → non‑functional requirements → high‑level architecture → data modeling → API design → scaling & failure handling*.  
   - Leverage *Domain‑Driven Design* to identify bounded contexts (e.g., Catalog, Playback, User Management).

**3️⃣ Step‑by‑step reasoning**  
   1. **Elicit functional needs**: catalog search, recommendations, playlist CRUD, playback controls, offline mode.  
   2. **Derive non‑functional constraints**: latency (<200 ms), availability (99.9 %), data consistency, compliance.  
   3. **Sketch high‑level components**: API gateway, authentication service, catalog microservice, recommendation engine, media server cluster, CDN, storage layer.  
   4. **Model data**: relational for user & playlist metadata; NoSQL for track embeddings and search indices; object store for audio files.  
   5. **Design APIs**: REST/GraphQL endpoints with pagination, caching headers.  
   6. **Plan scaling**: CDN edge for media, sharded catalog DB, cache‑first architecture, message queues for async tasks.

**4️⃣ Avoid common pitfalls**  
   - Don’t jump straight to “use Kubernetes”; first nail requirements.  
   - Beware of over‑optimizing latency before understanding traffic patterns.  
   - Forget to address data consistency in a distributed system; plan eventual vs strong consistency per use case.

**5️⃣ Sanity check & verbalize**  
   - Run through each requirement: does the architecture support it?  
   - Ask “what if” questions (e.g., sudden spike, CDN failure).  
   - Summarize trade‑offs clearly: latency vs cost, consistency vs scalability.  

This structured thought process can be reused for any large system design interview or real‑world requirements gathering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
