---
qid: ing_e70c5169f8__faang__local
question: 'Explain: LinkedIn System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 465
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:36:53-05:00'
sources: []
---

**Clarify**  
You’re asked to sketch the design of a LinkedIn‑style professional networking platform (think user profiles, connections, feeds, messaging). I’ll assume we need: 1) a scalable graph storage for “connections”, 2) real‑time feed generation, and 3) low‑latency messaging.  

**Approach**  
1. **Data model & sharding** – Store users in a distributed key‑value store (Cassandra/Spanner), partition by user ID hash; maintain adjacency lists as secondary tables for quick friend lookups.  
2. **Feed pipeline** – Use an event‑driven architecture: when a user posts, emit a “new activity” event to Kafka → workers compute fan‑out and push into per‑user feed queues (Redis Streams).  
3. **Messaging** – Persist messages in a NoSQL DB (Couchbase) for eventual consistency; use WebSocket servers behind a load balancer for real‑time delivery.  

**Depth**  
- *Graph queries*: `SELECT friend_id FROM connections WHERE user_id = X` runs in O(1) with secondary indexes.  
- *Feed latency*: fan‑out happens asynchronously, so read latency stays < 200 ms; write cost is O(k) where k is fan‑out size.  
- *Consistency*: eventual consistency on feeds, strong consistency on profile updates via two‑phase commit across shards.  

**Edge Cases**  
- Users with >10k connections → use lazy loading of neighbor lists.  
- Sudden traffic spike (e.g., viral post) → back‑pressure in Kafka and dynamic scaling of consumer groups.  
- Privacy: enforce per‑user visibility rules when serving feeds or messages.  

**Optimize & Communicate**  
To reduce fan‑out cost, adopt *pull‑based* feeds for large networks, caching popular posts in CDN edge nodes. I’d explain trade‑offs: push gives freshness but higher write load; pull saves writes at read cost. Finally, outline monitoring (latency dashboards, error rates) and a rollout plan (blue‑green deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
