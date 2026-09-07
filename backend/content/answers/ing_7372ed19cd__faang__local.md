---
qid: ing_7372ed19cd__faang__local
question: How Does the Live Comment Work? — Live Comment System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 490
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:12:32-05:00'
sources: []
---

**Clarify**  
The task is to design a “live‑comment” (chat) system that shows comments in real time for millions of concurrent viewers while keeping latency low and scaling horizontally. I’ll assume:  

* Up to **10 M active users** per event, each posting 0–5 comments/sec.  
* Comments are short text snippets (~200 bytes).  
* We need sub‑second delivery, eventual consistency, and high availability.

**Approach**  
1. **Ingestion layer** – REST/HTTP API that accepts comment payloads; validates & assigns a monotonically increasing timestamp or sequence number.  
2. **Message broker** – publish to Kafka topics partitioned by event ID (sharding).  
3. **Storage** – write‑through cache (Redis) + immutable append‑only log in S3/Cloud Storage for durability and replay.  
4. **Delivery** – use WebSocket or long‑polling clients subscribed to the topic; a broker‑driven consumer pushes comments downstream.  

**Depth**  
* **Throughput:** Kafka can handle >10 k events/sec per partition; we shard by event ID (e.g., 100 partitions).  
* **Latency:** Consumer reads from Kafka and writes to Redis in <50 ms, then pushes via WebSocket.  
* **Consistency:** Eventual – readers see comments in order of the sequence number.  
* **Fault tolerance:** Replicated Kafka brokers; Redis Sentinel for failover; S3 provides durable backup.

**Edge Cases**  
* Bursty traffic (e.g., a live poll) → auto‑scale consumer groups.  
* Network partitions → fallback to HTTP long‑polling.  
* Spam or malicious content → rate limiting & moderation queue.

**Optimize & Communicate**  
- Use **partitioned Redis** (sharding by event ID) to keep reads hot.  
- Implement **compaction** on Kafka logs to prune old events after a retention window.  
- Expose metrics (latency, message loss) via Prometheus and alert on SLA breaches.

This design balances real‑time delivery with horizontal scalability, aligns with FAANG’s emphasis on robust, observable systems, and keeps complexity manageable while meeting the stated constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
