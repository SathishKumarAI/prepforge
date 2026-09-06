---
qid: ing_aaa583fbd9__think__local
question: 'Explain: Out of Scope — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 470
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:18:19-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Confirm that the interviewer wants a *high‑level* architecture, not a full implementation.  
   - Assume unlimited compute/ops budget and a user base of millions (but still scalable).  
   - Define core features: posting photos/videos, feeds, likes/comments, notifications, search.

**2️⃣ Adopt a layered architectural framework**  
   - **Client layer** (mobile/web) → thin UI + API gateway.  
   - **API/Service layer** → stateless REST/GraphQL services (User, Media, Feed, Notification).  
   - **Data tier** → mix of relational DB for user metadata, NoSQL (Cassandra/Firestore) for feeds, object storage (S3) for media, search index (ElasticSearch).

**3️⃣ Reason step‑by‑step through each component**  
   1. *User service*: auth, profile CRUD, follower graph stored in a graph DB or adjacency list.  
   2. *Media service*: upload → CDN + transcoding pipeline; store URLs in DB.  
   3. *Feed generation*: pull vs push; pre‑compute feeds into Redis/Elastic for fast read.  
   4. *Engagement (likes/comments)*: write‑through to cache, eventual consistency in DB.  
   5. *Notifications*: event bus → async workers → push services.

**4️⃣ Beware common traps**  
   - Mixing concerns: keep data stores domain‑specific.  
   - Ignoring rate limits on feeds; use pagination and caching.  
   - Underestimating media bandwidth—use CDN + adaptive streaming.  
   - Forgetting to discuss security (OAuth, token revocation).

**5️⃣ Sanity‑check & verbalize**  
   - Verify each layer’s scalability: e.g., stateless APIs behind a load balancer.  
   - Ask if the interviewer wants detail on caching strategy or data consistency models.  
   - Summarize trade‑offs (e.g., push vs pull feeds) and justify chosen approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
