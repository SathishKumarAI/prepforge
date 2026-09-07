---
qid: ing_f1285718cf__faang__local
question: 'Explain: Publisher Subscriber — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 574
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:00:19-05:00'
sources: []
---

**Clarify**  
The question asks for a high‑level design of a *publish/subscribe* messaging system—an event bus that lets producers (“publishers”) emit messages and consumers (“subscribers”) receive only the events they care about. I’ll assume:  

- Millions of publishers/subscribers per day, low latency (<10 ms).  
- At least 99.9% availability, eventual consistency for message delivery.  
- Strong ordering guarantees per topic.  
- Messages can be replayed and persisted.

**Approach**  

1. **Core primitives** – Topics/Channels + Subscriptions (filters).  
2. **Storage layer** – Partitioned, replicated log (e.g., Kafka‑style) to guarantee order and durability.  
3. **Routing engine** – Broker cluster that routes new messages to all relevant partitions based on subscription metadata.  
4. **Delivery guarantees** – At‑least‑once with idempotent processing; optional exactly‑once via transactional offsets.  
5. **Scalability** – Horizontal scaling of brokers, sharding topics by hash key, and using load balancers.  

**Depth**  

- Each topic is split into N partitions; each partition has a leader replica for writes and followers for reads.  
- A *subscription* holds a filter (topic + optional predicate). The broker maintains an inverted index mapping predicates to partitions. When a message arrives, the broker evaluates the predicate list (or uses a bloom filter) to determine target subscribers, then appends the record to all matched partitions.  
- Consumers poll their assigned partitions; offset tracking ensures ordering per partition.  
- Complexity: **O(1)** append to log, **O(k)** routing where k = number of matching subscriptions.  
- Trade‑offs: Larger k increases CPU on brokers; mitigated by predicate compaction and topic sharding.

**Edge Cases**  

- *Hot partitions*: rebalance or add replicas.  
- *Slow consumers*: backpressure via flow control or message retention limits.  
- *Subscription churn*: cache invalidation for new filters.  
- *Security*: TLS, ACLs per topic/subscription.

**Optimize & Communicate**  

I’d prototype with a small cluster (3 brokers, 2 partitions per topic), benchmark latency and throughput, then scale. I would explain my choice of log‑based storage to guarantee order, the inverted index for efficient routing, and the use of offsets for exactly‑once semantics—highlighting that this architecture aligns with proven systems like Kafka while allowing fine‑grained filtering. This demonstrates clear reasoning, technical depth, and awareness of real‑world trade‑offs expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
