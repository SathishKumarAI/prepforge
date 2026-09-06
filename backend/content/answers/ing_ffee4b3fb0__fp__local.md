---
qid: ing_ffee4b3fb0__fp__local
question: 'Explain: 5.1 Get User Profile — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 539
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:03:54-05:00'
sources: []
---

**Why the profile must be “fast‑and‑consistent”**

A social feed is a *read‑heavy* workload: every tap on a user’s avatar triggers a **GetUserProfile** request that must return in < 100 ms for millions of users, while still reflecting any recent edits (bio change, new picture). The fundamental problem is to reconcile *low latency* with *strong consistency* across many replicas.

### 1. Data model → locality

Store the *core profile* (username, bio, avatar URL) in a **partitioned key‑value store** keyed by `user_id`.  
Because all reads for a given user hit the same partition, we can use a single primary replica per partition and replicate to others asynchronously. This gives:

- **Read‑through cache** (e.g., Redis or Memcached) that serves 95 % of requests.
- **Write‑back** to the KV store only when the user updates their profile.

### 2. Cache invalidation → event‑driven consistency

When a user changes any field, publish an **“profile‑updated” event** to a message bus (Kafka).  
Subscribers (cache layer, CDN edge) consume the event and evict or update the stale entry.  
This guarantees *eventual* freshness without polling.

### 3. Pagination of “followers/following” → cursor + pre‑fetch

Followers lists can be billions long; store them in a **sorted set** (e.g., RocksDB) keyed by `(user_id, follower_id)`.  
Return a page using an opaque cursor that encodes the last returned `follower_id`.  
Pre‑fetch the next page during rendering to hide latency.

### 4. One non‑obvious insight

Treat the *profile cache* as a **read‑only view** of a write‑through *event log*.  
Instead of storing derived data (e.g., follower count) in the profile, compute it on demand from the event stream or maintain a lightweight counter that is updated only on follow/unfollow events. This keeps the primary model lean and eliminates stale aggregates.

---

By anchoring the design to *partitioned locality*, *event‑driven invalidation*, and *cursor‑based pagination*, we meet the core requirement: every profile read is sub‑100 ms, consistent enough for user experience, and scales linearly with traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
