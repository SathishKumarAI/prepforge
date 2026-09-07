---
qid: ing_63519eafb8__faang__local
question: 'Explain: Microservices Architecture — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 611
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:28-05:00'
sources: []
---

**Clarify**  
We need a high‑level microservice design for an Instagram‑style app (photos, stories, feeds, likes, comments). Assume: *public* platform, millions of users, 10 M+ uploads/day, low latency (<200 ms) for feed rendering. We’ll focus on core services and data flows, not the UI.

**Approach**  
1. **Identify bounded contexts → microservices**  
   - `AuthService` (user auth + JWT).  
   - `UserProfileService`.  
   - `MediaService` (upload, transcoding, storage).  
   - `FeedService` (personalized feed generation).  
   - `SocialGraphService` (follow/follower graph).  
   - `EngagementService` (likes/comments).  
   - `NotificationService`.  
2. **Data stores** – choose per service: SQL for user profiles, NoSQL for media metadata, Graph DB for social graph, cache (Redis) for hot feeds.  
3. **API gateway + service discovery** – load‑balance, circuit breaker.  
4. **Event‑driven architecture** – Kafka topics (`media.uploaded`, `user.followed`, etc.) to decouple services and enable real‑time feed updates.

**Depth**  
- **Feed generation**: On user request, `FeedService` queries `SocialGraphService` for followees, then fetches recent media IDs from a per‑user *feed cache* (pre‑computed in Redis). If stale, triggers background job to rebuild using a priority queue. Complexity O(k log n) where k=page size.  
- **Media pipeline**: `MediaService` stores raw file on S3, runs transcoding jobs via worker pool, updates metadata in Cassandra; emits `media.uploaded`.  
- **Engagement**: Likes/comments are stored in a write‑through cache and asynchronously persisted to PostgreSQL. Real‑time notifications are published to Kafka → `NotificationService`.

**Edge Cases**  
- Burst uploads (e.g., viral content) – scale transcoding workers horizontally.  
- Cold start for new users – feed cache misses → fallback to on‑demand aggregation.  
- Consistency: eventual consistency is acceptable for likes/comments; use optimistic locking for profile updates.

**Optimize & Communicate**  
- Use **CQRS**: separate read (feed) and write (engagement) paths for scalability.  
- Cache invalidation strategy: TTL + publish/subscribe to refresh feeds on new media or follow actions.  
- Explain trade‑offs: tighter consistency vs. latency; choice of Graph DB vs. relational for social graph.  
- Conclude with monitoring: Prometheus metrics per service, tracing (OpenTelemetry) to pinpoint bottlenecks.

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
