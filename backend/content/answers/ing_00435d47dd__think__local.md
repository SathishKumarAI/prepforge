---
qid: ing_00435d47dd__think__local
question: 'Explain: Assumptions — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 463
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:46:15-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Confirm we’re discussing *designing an Instagram‑style photo‑sharing service* for a system‑design interview, not a full product spec.  
- Assume: high read/write traffic, global users, need for low latency, eventual consistency, and some cost constraints.  

**2️⃣ Adopt a layered mental model**  
- **Front‑end** → API gateway → microservices (auth, media, feed).  
- **Data layer** → relational DB for user metadata + NoSQL/graph for relationships.  
- **Storage & CDN** for media blobs.  
- **Caching** (in‑memory stores) for hot feeds and thumbnails.  

**3️⃣ Step‑by‑step reasoning**  
1. *Identify core entities* (User, Post, Comment, Like).  
2. *Define key operations*: upload, view feed, like/comment, follow/unfollow.  
3. *Choose storage per operation*: e.g., uploads → object store + CDN; feeds → precomputed in a distributed cache.  
4. *Model relationships*: follower graph (graph DB or adjacency lists) to fetch “people I follow.”  
5. *Design feed generation*: push vs pull, using message queues and background workers.  
6. *Scale writes*: sharding media by user ID; use CDN edge nodes.  
7. *Handle consistency*: eventual for feeds, strong for auth.  

**4️⃣ Avoid common traps**  
- Don’t over‑optimize early (e.g., micro‑services for every feature).  
- Forget cache invalidation when likes/comments change.  
- Assume unlimited storage; plan for tiered cold/hot storage.  
- Ignore rate limiting or DDoS protection.  

**5️⃣ Sanity‑check & verbalize**  
- Walk through a user story: “User uploads photo → stored, thumbnails created, feed updated.”  
- Verify each step touches the right layer and service.  
- Check that latency targets are met (e.g., ≤200 ms for feed fetch).  
- Summarize trade‑offs (cost vs consistency) before final pitch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
