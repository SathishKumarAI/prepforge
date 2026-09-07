---
qid: ing_becb7bf7ac__faang__local
question: How can each cache replica be updated? — Urlshorteningservicetinyurl
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 439
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:06:06-05:00'
sources: []
---

**Clarify**  
We have a distributed URL‑shortener where each node holds a local cache of the *tiny → long* mapping. The question is: *how do we keep every replica in sync when a new short URL is created or an existing one is updated?*  
Assumptions to confirm:  
1. Writes are infrequent compared to reads (typical for URL shortening).  
2. Latency tolerance is low; users expect instant resolution of newly created URLs.  
3. Network partitions may occur, so we need eventual consistency.

**Approach**  
Use a **write‑through cache** backed by a durable store (e.g., DynamoDB/Spanner) and publish changes via a **log‑based pub/sub** (Kafka or Cloud Pub/Sub). Each node writes to the backend first, then publishes an event. All replicas subscribe, apply the update locally, and acknowledge. If a replica misses an event, it can recover by replaying from the log.

**Depth**  
- *Write path*: client → API → backend write (txn) → publish event.  
- *Read path*: cache hit → return; miss → fetch from backend, populate cache.  
Complexity: O(1) reads; writes are O(log N) in backend + network pub/sub overhead.  
Trade‑offs: strong consistency on write (single‑writer lock or optimistic concurrency), but eventual consistency for replicas.

**Edge Cases**  
- Network partition: a node may miss events → recover by fetching full cache snapshot from backend.  
- Duplicate events: idempotent update logic.  
- High churn of URLs: throttle event traffic, batch updates if needed.

**Optimize & Communicate**  
Improvements: use a **compact log** (e.g., delta encoding) to reduce bandwidth; implement *cache warming* on startup by preloading hot entries. I’d explain this flow with a diagram in an interview, highlighting how the system balances low latency reads against eventual consistency and graceful failure handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
