---
qid: ing_f335113330__faang__local
question: 'Explain: 6.2 Newsfeed Generation — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 571
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:05:00-05:00'
sources: []
---

**Clarify**

> “Design the newsfeed for Instagram.”  
> *Assumptions:* 1) millions of posts per day, 2) users have ~10 k followers/followees, 3) feed must load < 200 ms, 4) content is ranked by relevance (time‑to‑live, engagement, user similarity), 5) we need to support real‑time updates and offline caching.

**Approach**

1. **Data model** – store posts in a *Post* table; maintain per‑user follow graph in a graph DB.  
2. **Candidate generation** – for each user `U`, fetch recent posts from followees + “promoted” pool. Use time‑windowing (last N days).  
3. **Scoring & ranking** – compute a relevance score = f(time, likes, comments, similarity(U, poster)). Cache scores in Redis.  
4. **Serving** – pre‑populate a *feed cache* per user (e.g., 200 items) with top‑scored posts; refresh every few minutes or on push events.  
5. **Refresh strategy** – event‑driven updates: when a new post appears, publish to Kafka topic; consumers update affected users’ feed caches.

**Depth**

- Candidate set size ≈ |followees| × 100 → ~1 M posts for heavy users; we limit by time and popularity.  
- Score function: `score = w_t * exp(-λ*(now‑post_time)) + w_e * engagement + w_s * similarity`.  
- Complexity: candidate fetch O(F), scoring O(C), final sort O(C log C) where C ≪ F due to caching.  
- Storage: Post table sharded by user_id; feed cache per user in Redis (LRU eviction).  
- Latency: 1–2 ms for cache hit, <200 ms total.

**Edge Cases**

- New users with few posts → fallback to global trending algorithm.  
- Users who follow many accounts → switch to *push‑only* incremental feed instead of pull.  
- Cold start for promoted content → use global hotness metric.

**Optimize & Communicate**

- **Batching**: Push updates in micro‑batches to reduce Kafka load.  
- **Adaptive pruning**: Dynamically adjust window size based on user activity.  
- **Explainability**: Store score components so users can see why a post appears.  
When presenting, emphasize trade‑offs (cache hit vs. freshness), scalability (sharding + CDN), and the balance between real‑time relevance and system throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
