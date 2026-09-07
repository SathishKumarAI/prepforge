---
qid: ing_2f39c54d15__faang__local
question: 'Explain: Subscription — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 562
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:33:26-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *Subscription‑based Publish/Subscribe (Pub/Sub)* system—think of it as the backbone for real‑time feeds, notifications, or data pipelines.  
Key assumptions to confirm:  
1. Scale (millions of publishers, billions of messages/day).  
2. Latency target (< 50 ms for “real‑time”).  
3. Durability guarantees (at‑least‑once vs exactly‑once).  
4. Subscription model (topic‑level, filtering, fan‑out).  

**Approach**  
1. **Topic sharding** – hash topic ID → partitions; each partition is an append‑only log.  
2. **Broker layer** – each broker owns a set of partitions; use Raft/ZooKeeper for leader election.  
3. **Publish flow** – publisher writes to the leader’s log, replicates asynchronously to followers (ensuring durability).  
4. **Subscription flow** – consumer opens a stream to its partition leader; reads from offset, acknowledges → commit offset.  
5. **Load balancing** – use consistent hashing + virtual nodes so that brokers can rebalance partitions on scaling events.  

**Depth**  
- *Consistency*: Replicated logs give strong consistency per partition; cross‑partition ordering is not guaranteed (acceptable for most Pub/Sub).  
- *Scalability*: Linear by adding brokers; sharding keeps each broker’s log manageable.  
- *Fault tolerance*: Leader fails → follower becomes leader in < 200 ms (Raft).  
- *Throughput*: Each broker can sustain ~10k ops/sec on commodity hardware; horizontal scaling multiplies capacity.  

**Edge Cases**  
- **Message loss**: If a consumer dies before ack, the message remains unread until timeout/compaction.  
- **Backpressure**: Slow consumers may cause tail‑lag; implement flow control or per‑consumer queues.  
- **Topic explosion**: Too many tiny topics → shard aggressively or coalesce.  

**Optimize & Communicate**  
1. Add *compression* on the wire to reduce bandwidth.  
2. Implement *caching* of hot topics in memory for sub‑10 ms latency.  
3. Expose a *metrics API* (through Prometheus) so ops can auto‑scale brokers based on queue depth.  

When explaining, I’d walk through a publisher’s request → leader write → replication → consumer read → ack, emphasizing that the heavy lifting is done by the replicated log and consistent hashing—exactly what top companies expect in a robust Pub/Sub design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
