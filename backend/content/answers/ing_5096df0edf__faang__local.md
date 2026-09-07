---
qid: ing_5096df0edf__faang__local
question: 'Explain: Feed Reads — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 481
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:51:48-05:00'
sources: []
---

**Clarify**  
We’re asked to design the “Feed Reads” feature for Instagram – i.e., how a user’s feed is generated and served efficiently. Key assumptions:  
* Users follow many others (hundreds/thousands).  
* Posts are immutable once created.  
* Read traffic far exceeds write traffic.  
* Freshness matters; new posts should appear quickly.

**Approach**  
1. **Model**: For each user *U*, maintain a *timeline* of post IDs sorted by publish time.  
2. **Write path**: When a user *P* publishes a post, push the post ID to all followers’ timelines (fan‑out).  
3. **Read path**: On feed request, fetch the first *k* items from *U*’s timeline and hydrate them via a fast key‑value store.

**Depth**  
*Data structures*:  
- *Timeline table* (`user_id → list(post_id)`) stored in Redis or RocksDB for O(1) prepend.  
- *Post cache* (`post_id → payload`) cached in memcached.  

*Complexity*:  
- Write: O(F) where F = number of followers (expensive).  
- Read: O(k + C) where C is cache hit rate; negligible.

*Trade‑offs*:  
- **Fan‑out** gives instant reads but high write cost and storage duplication.  
- Alternative “pull” model (compute feed on read) saves writes but increases latency and CPU load during reads.

**Edge Cases**  
*Large accounts*: cap fan‑out or use a hybrid: pre‑push to most active followers, compute for the rest.  
*Cold users*: lazily populate timelines.  
*Post deletion/flagging*: invalidate cache entries promptly.

**Optimize & Communicate**  
- Use *write‑through* caching and batch writes (Kafka).  
- Periodically prune old timeline entries (TTL).  
- Benchmark hit rates; if <70 %, switch to pull for that user.  

Explain the design in a whiteboard diagram, emphasize trade‑offs, and show how each choice meets latency, scalability, and consistency goals—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
