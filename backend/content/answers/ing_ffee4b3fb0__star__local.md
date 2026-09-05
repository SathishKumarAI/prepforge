---
qid: ing_ffee4b3fb0__star__local
question: 'Explain: 5.1 Get User Profile — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 432
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:00:29-05:00'
sources: []
---

**Situation** – While working on a redesign of the Instagram mobile app, we noticed that profile loads were sluggish during peak traffic (≈50k concurrent users), especially when a user had thousands of followers and multiple stories. The engineering team needed to keep the “Get User Profile” API response under 200 ms.

**Task** – I was tasked with architecting a scalable, low‑latency solution that could serve profile data (username, bio, media count, follower/following counts) while respecting privacy settings and ensuring eventual consistency across replicas.

**Action** –  
1. **Data modeling**: Split the profile into *public* (name, avatar, bio) and *private* (followers list, following list) shards stored in a horizontally‑partitioned Cassandra table with time‑to‑live for follower data.  
2. **Caching layer**: Implemented Redis read replicas per region; cached public profile JSON with a 5‑minute TTL and used cache‑aside for private metrics.  
3. **Batching & async updates**: Used Kafka to stream follow/unfollow events to update follower counts asynchronously, updating the Cassandra row only every minute to reduce write pressure.  
4. **Edge CDN**: Served static assets (avatar, story thumbnails) via CloudFront with signed URLs for privacy.  
5. **Health checks & auto‑scaling**: Deployed on Kubernetes with HPA based on CPU and request latency; added a Circuit Breaker to fall back to stale data during spikes.

**Result** – The new design cut average profile fetch time from 450 ms to 120 ms under peak load, reduced Cassandra write traffic by 70%, and lowered CDN cache misses by 40%. I learned the importance of separating public/private concerns early and leveraging event‑driven updates for heavy follower graphs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
