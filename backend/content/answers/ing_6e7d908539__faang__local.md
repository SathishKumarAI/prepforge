---
qid: ing_6e7d908539__faang__local
question: 'Explain: Indexing New Content — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 526
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:00:50-05:00'
sources: []
---

**Clarify**  
We’re asked to design an *indexing* subsystem for new posts on Instagram. The goal is to make the feed fast while keeping storage and latency reasonable.  
Key assumptions:  

1. **High write volume** – millions of photos per day.  
2. **Read‑heavy** – a user’s home feed must be served in < 100 ms.  
3. **Scalable, fault tolerant** – horizontal scaling, eventual consistency acceptable for feeds.

---

**Approach**  

1. **Ingest pipeline** – Photo → metadata extraction → publish to Kafka topic “new_posts”.  
2. **Index workers** – consume from Kafka, compute user‑feed keys (followers × interests) and write a *pre‑computed feed entry* into a distributed key‑value store (e.g., DynamoDB).  
3. **Feed read path** – client requests home feed → read N items per user partition; if missing, fallback to “catch‑up” query against the global posts table.  

---

**Depth**  

- *Kafka* provides ordered, fault‑tolerant queueing (partitioned by user id).  
- *Index workers* use a fan‑out strategy: each new post is pushed to every follower’s feed key; write amplification is mitigated with batch commits and Bloom filters for dedup.  
- Store feeds in **DynamoDB** with composite keys `(user_id, timestamp)` → O(log N) read.  
- Complexity: Write ~O(F) per post (F = followers), but amortized via batching. Read ~O(1) per item.

---

**Edge Cases**  

- New users with >10M followers → throttle fan‑out or use *push‑then‑pull* hybrid.  
- Deletions/edits: maintain a tombstone entry to invalidate cached feeds.  
- Failure of a worker → Kafka offset replay ensures eventual consistency.

---

**Optimize & Communicate**  

1. **Cache layer** (Redis) for hot feed pages to shave latency below 20 ms.  
2. **Back‑pressure** on producers when consumer lag > threshold.  
3. **Monitoring**: track write latency, fan‑out success rate, cache hit ratio.

In interviews, I’d walk through this flow, emphasize trade‑offs (write amplification vs read speed), and explain how each component scales with user growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
