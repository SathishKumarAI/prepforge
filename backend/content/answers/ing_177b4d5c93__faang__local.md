---
qid: ing_177b4d5c93__faang__local
question: 'Explain: Design WhatsApp — Grokking System Design Interview: Patterns &
  Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 484
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:39:11-05:00'
sources: []
---

**Clarify**  
We’re asked to sketch a high‑level design for *WhatsApp*, focusing on core messaging patterns and the system‑design interview mindset (patterns, mock interviews). Assume: millions of users, real‑time chat with group & media support, minimal latency, strong consistency for message order per conversation.

**Approach**  
1. **Client → Server API** – REST/GRPC + WebSocket for push.  
2. **Load Balancer** → Front‑end servers (stateless).  
3. **Message Service** – write to a distributed log (Kafka) and cache in Redis for “last N” per conversation.  
4. **Storage** – NoSQL (Cassandra/ScyllaDB) for user‑message tables; object store (S3) for media.  
5. **Delivery** – Consumer workers read Kafka, update DB, push via FCM/APNs.  
6. **Presence & typing** – Redis pub/sub or a small dedicated service.  
7. **Security** – end‑to‑end encryption keys stored only on devices; server holds minimal metadata.

**Depth**  
- **Consistency**: use Kafka’s ordering per partition (conversation ID) to guarantee message order.  
- **Scalability**: horizontal scaling of API, workers, and database nodes. Partitioning by user/conversation ID keeps shards small.  
- **Latency**: keep‑alive WebSocket pushes <200 ms; media served via CDN.  
- **Complexity**: O(log N) for DB writes (Cassandra), O(1) cache ops.

**Edge Cases**  
- Offline users → store in Kafka until delivery, then retry.  
- Large media → chunked uploads, resumable.  
- Group chats with >10k members → use sharded message queues per group shard.  
- Device migration → key rotation, re‑encryption.

**Optimize & Communicate**  
Explain trade‑offs: using Kafka gives ordering but adds latency; Cassandra offers fast writes but eventual consistency. Suggest monitoring (latency dashboards) and autoscaling policies. Conclude by noting how this pattern mirrors real interview expectations: clear assumptions, layered architecture, complexity analysis, edge‑case coverage, and iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
