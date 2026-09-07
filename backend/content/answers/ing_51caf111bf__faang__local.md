---
qid: ing_51caf111bf__faang__local
question: 'Explain: Endpoint: GET /recommendations — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 459
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:54:33-05:00'
sources: []
---

**Clarify**

We need a scalable **GET /recommendations** endpoint that returns personalized music suggestions for a user, similar to Spotify’s “Discover Weekly”.  
Assumptions:  
1. Authenticated request (user ID available).  
2. Recommendations are per‑session and can be refreshed every 24 h.  
3. Latency target <200 ms; throughput up to millions of requests/day.

**Approach**

1. **Cold start → User profile + listening history** stored in a key‑value store (e.g., DynamoDB).  
2. **Feature extraction**: pre‑compute embeddings for tracks and users (matrix factorization / collaborative filtering) offline, push into a distributed vector index (FAISS/Annoy).  
3. **Online scoring**: on request, retrieve user embedding → nearest‑neighbor search in the index to get top‑N candidate tracks.  
4. **Post‑filtering & ranking**: apply business rules (genre mix, freshness, popularity) and re‑rank with a lightweight model (e.g., gradient boosted tree).  
5. **Caching**: store per‑user recommendation list in Redis for 24 h; fallback to recompute if cache miss.

**Depth**

- *Time complexity*: O(log N + k) for ANN search, where N is track count and k top tracks.  
- *Space*: embedding storage ≈ 100 MB (10M tracks × 128‑dim float32).  
- *Fault tolerance*: replicas of the index; cache invalidation on user profile changes.

**Edge Cases**

- New users → fallback to “Top Trending” list.  
- Cold tracks with no embeddings → use popularity heuristic.  
- Cache eviction storms → rate‑limit recomputation per user.

**Optimize & Communicate**

Future improvements: online learning (bandit algorithms) to adapt to real‑time feedback; sharding the index by genre for lower latency. I’d explain trade‑offs—embedding size vs accuracy, ANN recall vs speed—while keeping the architecture diagram simple and focusing on how each component meets SLA goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
