---
qid: ing_d61d09f957__faang__local
question: 'Explain: User Database — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 486
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:57:10-05:00'
sources: []
---

**Clarify**  
You’re asked to design a *user database* for a YouTube‑style streaming platform.  
Assumptions to confirm:  
- Scale (millions of users, billions of video views).  
- Required operations: sign‑up, authentication, profile updates, watch history, recommendations.  
- Consistency needs: strong consistency for account data, eventual for analytics.

**Approach**  
1. **Schema design** – split into *core* and *analytic* tables.  
2. Use a relational DB (PostgreSQL) for ACID guarantees on user profiles.  
3. Store heavy‑weight fields (watch history, preferences) in a NoSQL store (Cassandra/Firestore).  
4. Add an in‑memory cache (Redis) for session tokens and hot profile data.

**Depth**  
- **User table**: `user_id PK`, `email UNIQUE`, `hashed_password`, `created_at`.  
- **Profile table**: optional fields (`bio`, `avatar_url`).  
- **WatchHistory**: `history_id PK`, `user_id FK → User`, `video_id`, `watched_ts`. Partition by user and time window for efficient range scans.  
- **Recommendations**: pre‑compute vectors in a graph DB (Neo4j) or vector store (Pinecone).  
- Indexes on `email` and composite index on `(user_id, watched_ts)` boost queries.  
- Use read replicas for scaling reads; write to primary with synchronous replication.

**Edge Cases**  
- Password reset race conditions → use token expiry & single‑use tokens.  
- Cold start for new users – provide default recommendations.  
- Data consistency between relational and NoSQL stores during schema migrations.

**Optimize & Communicate**  
Explain trade‑offs: RDBMS gives ACID but can’t handle massive write bursts; NoSQL handles scale but sacrifices joins. Emphasize sharding strategy (hash user_id) to avoid hotspots. Conclude with monitoring (Prometheus), automated backups, and GDPR compliance for data retention. This structured answer shows clear problem framing, a thoughtful architecture, and depth in implementation details—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
