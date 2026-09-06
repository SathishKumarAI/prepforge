---
qid: ing_eb3eae1805__fp__local
question: 'Explain: Interviewer — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 482
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:19:21-05:00'
sources: []
---

**Why a live‑comment system is needed**

In an interview platform the interviewer and interviewee must see each other’s text in real time, without lag that could derail the conversation.  
The core problem: *low‑latency, scalable publish–subscribe (pub/sub) with bounded consistency*.  

**Derivation from first principles**

1. **Publish–Subscribe as a communication abstraction** – The interviewer publishes messages; the interviewee subscribes to a topic.  
2. **Latency ≈ Propagation + Queueing** – To keep latency < 50 ms, we must avoid global locks or heavy aggregation.  
3. **Eventual consistency vs. Strong consistency** – In an interview, a message that is slightly delayed (e.g., 100 ms) is tolerable; thus *eventual* suffices and allows horizontal scaling.  

**Design components**

| Layer | Role | Rationale |
|-------|------|-----------|
| **WebSocket gateway** | Bi‑directional channel | Keeps a single TCP connection, eliminates HTTP overhead. |
| **Sharded message queue (e.g., Kafka)** | Ordering & persistence | Shards per interview ID keep ordering local; at most one consumer reads each shard, ensuring causal order without coordination. |
| **Cache layer (Redis)** | Hot‑read buffer | Stores the last N messages for a quick replay if a participant reconnects. |
| **Presence service** | Connection tracking | Uses heartbeats to detect disconnects and trigger graceful cleanup. |

**Non‑obvious insight**

*Sharding by interview ID turns a global ordering problem into a local one.*  
If we let all messages go through a single broker, the bottleneck is the broker’s throughput. By partitioning per interview, each partition can be processed independently; the only cross‑partition coordination needed is when an interviewer joins a new session—then we simply route to that partition. This yields linear scalability with minimal latency.

**Summary**

The live‑comment system boils down to a low‑latency pub/sub pipeline: WebSocket → sharded queue → cache, underpinned by the principle that *local ordering + eventual consistency* is sufficient for interview communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
