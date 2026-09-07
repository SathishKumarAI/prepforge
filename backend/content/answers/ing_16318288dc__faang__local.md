---
qid: ing_16318288dc__faang__local
question: 'Explain: Live Comment System Database Design — Live Comment System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 517
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:35:34-05:00'
sources: []
---

**Clarify**  
We need a database schema for a live‑comment feature (think Twitch chat or YouTube live). Each comment is linked to a stream, user, and timestamp; we also want fast reads for the current buffer, limited history, and support for moderation/flags. Key assumptions: unlimited concurrent streams, high write rate (~10k msg/s), read latency <50 ms, persistence of last N minutes.

**Approach**  
1. **Sharding by stream ID** – ensures writes don’t collide.  
2. **Separate tables**: `comments`, `users`, `streams`.  
3. **Time‑based partitioning** (daily/ hourly) on `comments` for efficient purge.  
4. **In‑memory cache** (Redis) for the live buffer of last N minutes.  
5. **CQRS** – write‑only log table + read‑optimized materialized view.

**Depth**  
```sql
-- comments
CREATE TABLE comments (
  id          BIGSERIAL PRIMARY KEY,
  stream_id   BIGINT NOT NULL REFERENCES streams(id),
  user_id     BIGINT NOT NULL REFERENCES users(id),
  body        TEXT NOT NULL,
  created_at  TIMESTAMP WITH TIME ZONE DEFAULT now(),
  flagged     BOOLEAN DEFAULT false
) PARTITION BY RANGE (created_at);

-- example partition
CREATE TABLE comments_2024_09 PARTITION OF comments
  FOR VALUES FROM ('2024-09-01') TO ('2024-10-01');

```
*Write path:* insert → log table + append to Redis list `live:{stream_id}`.  
*Read path:* fetch from Redis for live view; fallback to SQL for older history.  
**Complexity:** writes O(1), reads O(log n) on disk, O(1) in cache.

**Edge Cases**  
- Stream shutdown → drop partitions & flush Redis.  
- Burst traffic → auto‑scale workers, use async batch inserts.  
- Moderation → flagging updates both DB and cache; ensure eventual consistency.

**Optimize & Communicate**  
Explain that sharding + partitioning keeps write contention low, while caching guarantees sub‑50 ms latency. Mention trade‑offs: extra storage for duplicated data in Redis, but critical for live UX. Conclude by noting monitoring (latency dashboards) and automated cleanup jobs to keep the system lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
