---
qid: ing_8a474d390e__faang__local
question: 'Explain: Use case: User views the home timeline — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 542
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:05:45-05:00'
sources: []
---

**Clarify**  
We’re asked to design the *home‑timeline* feature for a Twitter‑style service (the README link is just an example). I’ll assume:  

1. A user can follow many accounts, up to ~10K.  
2. The timeline must show recent tweets from followed users in reverse chronological order.  
3. Latency target < 200 ms, scale to millions of concurrent viewers.  

**Approach**  
1. **Model** – Tweets stored in a write‑through log (e.g., Kafka) → append‑only table keyed by `tweet_id`.  
2. **Fan‑out strategy** – Use *pull* fan‑out: when a user requests the timeline, query a per‑user feed store.  
3. **Feed store** – Partitioned by user ID; each partition holds a capped list (e.g., 10K tweets) sorted by timestamp.  
4. **Background worker** – Consumes new tweets and pushes them into followers’ partitions via a message queue.  

**Depth**  
*Read path*:  
- GET `/timeline?user_id=U` → read from `feed_U` partition → return JSON array.  
*Write path*:  
- POST tweet → write to Tweets table; enqueue event → worker reads event, looks up followers of author, appends tweet ID to each follower’s feed.  

Complexity:  
- **Read** O(1) per request (partitioned key lookup).  
- **Write** O(F) where F = number of followers (amortized across workers).  
Storage: Each tweet stored once in Tweets table + replicated F times in feeds (acceptable with capped size).  

**Edge cases**  
- New follower: their feed must be seeded with recent tweets.  
- Retweets/quotes: treat as new entries or embed original ID.  
- Deletion/retraction: need lazy purge from feeds or tombstones.  

**Optimize & communicate**  
*Improvements*: Use Bloom filters to skip empty partitions, implement TTL on feed items, batch fan‑out per worker to reduce network hops.  
I’d explain the trade‑off between *push* (fast read, high write cost) vs *pull* (low write cost, higher latency). For a FAANG interview, I’d finish by sketching a diagram and summarizing how each component meets scalability, consistency, and performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
