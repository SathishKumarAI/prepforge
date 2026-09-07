---
qid: ing_b39dfcc476__faang__local
question: 'Explain: Prototyping a Live Comment Service — Live Comment System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 506
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:41:43-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *live comment* service that supports real‑time posting, ordering, and retrieval for billions of users (think Reddit/YouTube comments). Key assumptions:  
1. Comments are immutable once posted.  
2. Each post/video can have millions of comments; we need sub‑second latency.  
3. Users may upvote/downvote or flag spam; comments must be filtered in real time.

**Approach**  
1. **API Layer** – REST/WS endpoints for `POST /comments`, `GET /comments?postId=…&since=…`.  
2. **Data Store** – sharded NoSQL (Cassandra) keyed by `postId` + `timestamp`; secondary index on `userId` for moderation.  
3. **Ordering & Pagination** – use a *time‑based* cursor (`since`) and maintain a per‑post in‑memory sorted list (Redis).  
4. **Real‑time Push** – publish to Kafka topic per post; WebSocket servers subscribe and broadcast to clients.  
5. **Filtering** – a lightweight ML model runs on the producer side (or in a stream processor) tagging profanity or spam before persistence.

**Depth**  
- *Write path*: client → API → validation → ML filter → Kafka → Cassandra + Redis. Latency < 200 ms.  
- *Read path*: client → API → check Redis cache; miss → query Cassandra; return ordered slice.  
- Complexity: write O(1) per comment, read O(log n) for cursor scan.  
- Scalability: horizontal sharding by `postId`; Kafka partitions per post cluster.

**Edge Cases**  
- Extremely hot posts causing write bursts → backpressure via Kafka throttling.  
- Time‑zone or clock skew → use server timestamps only.  
- Moderation delays → flag comments as “pending” until ML score confirmed.

**Optimize & Communicate**  
Future improvements: implement a *content delivery network* for static comment bundles, add per‑user personalization (e.g., hide flagged content). I’d explain the trade‑offs between consistency and latency, justify NoSQL vs relational choice, and outline monitoring metrics (TPS, cache hit rate, latency percentiles) to demonstrate end‑to‑end reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
