---
qid: ing_b54a633664__faang__local
question: 'Explain: User Preference Service — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 468
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:45:01-05:00'
sources: []
---

**Clarify**

> *Design a “User Preference Service” that powers notifications.*  
> We need an API that lets users subscribe/unsubscribe to topics, set priority levels, and receive real‑time alerts across devices.  
> Assumptions: • Millions of active users; • Each user can have 10–20 preferences; • Latency < 200 ms for push; • High availability (99.9%).

**Approach**

1. **API Layer** – REST/GraphQL to manage subscriptions.  
2. **Persistence** – NoSQL (Cassandra) for fast writes, key = `user_id:topic`.  
3. **Event Bus** – Kafka topic per notification type; producers write events, consumers filter by user preferences.  
4. **Notification Dispatcher** – Microservice that reads from Kafka, looks up users in Redis cache, pushes via FCM/APNs/WebSocket.  
5. **Cache & Bloom Filters** – Cache most active topics to avoid DB lookups; Bloom filters reject irrelevant messages early.

**Depth**

*Write Flow:* `PUT /prefs` → write to Cassandra (O(1)), update user’s cache TTL 30 s.  
*Read Flow:* Consumer pulls event, checks Redis for interested users, batches pushes per device token.  
*Complexity:* Write latency O(log N) in Cassandra; read O(k) where k = number of subscribers per topic.  
*Fault tolerance:* Kafka replication + consumer groups; Cassandra multi‑DC.

**Edge Cases**

- **Cold start:** missing cache → fallback to DB read.  
- **Burst traffic:** backpressure on Kafka, use partitioning by user hash.  
- **Device churn:** token rotation handled via subscription update API.

**Optimize & Communicate**

*Improvements:* Use event sourcing for audit; implement rate‑limiting per user to avoid spam.  
*Communication:* Show a data flow diagram, explain trade‑offs (e.g., eventual consistency vs. latency). Emphasize that the design scales horizontally and meets SLAs while keeping operational overhead low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
