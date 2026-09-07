---
qid: ing_608348983a__faang__local
question: 'Explain: Publisher — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 502
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:28:29-05:00'
sources: []
---

**Clarify**  
We’re designing a *Publisher‑Subscriber* (Pub/Sub) system for a publisher platform that needs to push content updates (articles, videos) to thousands of consumers in real time.  
Assumptions I’d confirm:  
- Latency requirement (< 100 ms).  
- Message durability and at‑least‑once delivery.  
- Topic granularity (e.g., “sports/football”).  
- Scale: 10⁶ messages/day, 10⁵ subscribers.

**Approach**  
1. **Topic & Partitioning** – Create a topic per content category; partition each topic horizontally to allow parallelism.  
2. **Broker Layer** – Use a distributed log (Kafka‑style) as the backbone; producers write to partitions, consumers read from offsets.  
3. **Push vs Pull** – Provide both: pull for batch clients, push via WebSocket/HTTP‑2 streams for low‑latency clients.  
4. **Retention & Replay** – Store messages for configurable periods (e.g., 7 days) so late subscribers can replay.  
5. **Scaling** – Auto‑scale brokers based on throughput; use sharding for high‑volume topics.

**Depth**  
- *Complexity*: Publish O(1), Subscribe O(log N) per partition, where N is number of messages in a partition.  
- *Durability*: Replicate each partition across 3 nodes (RAID‑like).  
- *Ordering*: Per‑partition ordering preserved; global ordering optional via a single “global” topic if needed.  
- *Back‑pressure*: Consumers acknowledge offsets; broker throttles if lag > threshold.

**Edge Cases**  
- **Burst traffic**: buffer with local queues, drop oldest on overflow.  
- **Subscriber churn**: use heartbeats to detect disconnects and clean up state.  
- **Topic deletion**: soft delete first, then purge after retention expires.

**Optimize & Communicate**  
Explain that we balance *throughput* (partition count) against *latency* (network hops). Mention trade‑offs: more partitions → higher parallelism but increased coordination overhead. Conclude by highlighting how this architecture scales horizontally, guarantees at‑least‑once delivery, and supports real‑time push for publishers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
