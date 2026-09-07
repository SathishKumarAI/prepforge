---
qid: ing_157866ce63__faang__local
question: 'Explain: Sources — The WhatsApp Architecture Facebook Bought For $19\u00a0Billion
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 521
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:33:00-05:00'
sources: []
---

**Clarify**  
The question asks how the architecture acquired by Facebook for its WhatsApp service enables *high scalability*. I’ll assume we’re focusing on the technical design that supports millions of concurrent users and billions of messages per day, not just the acquisition cost.

**Approach**  
1. Identify core architectural components (data storage, messaging pipeline, routing).  
2. Explain how each component scales horizontally.  
3. Highlight key patterns (sharding, replication, eventual consistency) that keep latency low while handling growth.

**Depth**  
- **Data Layer:** WhatsApp stores messages in a *NoSQL* store (Cassandra‑like) with sharded key ranges per user pair. Each shard runs on commodity servers; adding nodes increases capacity linearly.  
- **Message Queue:** An internal distributed queue (similar to Kafka) decouples producers (senders) from consumers (receivers). The queue is partitioned by conversation ID, allowing parallel consumption without contention.  
- **Routing & Presence:** A lightweight presence service runs on a cluster of nodes that maintain per‑user state in memory (Redis‑style). Requests are routed via consistent hashing to the node owning the user’s shard, keeping lookups O(1).  
- **Scalable Push:** The push notification system uses a multi‑tiered approach: local edge servers handle short‑lived connections; global data centers buffer and forward messages.  
- **Fault Tolerance:** Data is replicated across zones; read replicas serve 99.9% of traffic, while writes go to a master per shard. Automatic failover ensures no single point of failure.

**Edge Cases**  
- *Shard Hotspots*: high‑traffic conversations can overload a shard; mitigated by re‑sharding or sharding by time windows.  
- *Network partitions*: eventual consistency may delay message delivery; users see “delivered” but not yet “seen.”  
- *Scaling under sudden spikes*: pre‑provisioned buffer nodes absorb bursts, then scale down.

**Optimize & Communicate**  
To improve cost, we can move more reads to cheaper cold storage while keeping hot data in memory. I’d present this by first mapping the problem → constraints (latency < 200 ms, throughput > 10 B msgs/day), then showing how each architectural choice satisfies those metrics and scales linearly with added hardware. This narrative demonstrates clear, structured thinking that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
