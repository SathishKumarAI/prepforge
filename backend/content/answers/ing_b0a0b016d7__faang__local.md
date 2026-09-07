---
qid: ing_b0a0b016d7__faang__local
question: 'Explain: Broker — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 528
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:33:46-05:00'
sources: []
---

**Clarify**  
The question asks how a broker‑based message queue system (e.g., Kafka, RabbitMQ) can be designed for a large‑scale ML pipeline that ingests, preprocesses, and serves model predictions.  
Assumptions:  
- Millions of events per second from sensors/clients.  
- Low latency (< 100 ms) for inference requests.  
- High durability and fault tolerance.

**Approach**  
1. **Partitioning & sharding** – split topics by key (e.g., user ID, model version).  
2. **Producer‑side batching & compression** to reduce network load.  
3. **Consumer groups** per pipeline stage (pre‑processing, feature extraction, inference).  
4. **Back‑pressure handling** via consumer lag metrics and dynamic scaling.  
5. **Exactly‑once semantics** using idempotent writes or transactional APIs.

**Depth**  
- *Broker topology*: a cluster of brokers with replicated logs; leader election per partition (Raft/Zab).  
- *Throughput*: each broker can sustain ~1 GB/s on SSD; parallel consumers read from distinct partitions.  
- *Latency*: consumer polls at 10 ms intervals, processes in micro‑batches (~100 k events), pushes to GPU inference pool.  
- *Durability*: write‑ahead log + replication factor 3 ensures no data loss.  
- *Exactly‑once*: use Kafka’s transactional API; producers send a single transaction that includes all records for an event.

**Edge Cases**  
- **Producer burst**: buffer overflow → drop or back‑pressure to upstream.  
- **Consumer lag spike**: trigger auto‑scaling of consumer pods.  
- **Broker failure**: leader failover within 200 ms; consumers rejoin automatically.  

**Optimize & Communicate**  
- Use *compact* topics for stateful services (model weights).  
- Enable *kafka‑streams* or *flink* for in‑stream processing to reduce round trips.  
- Monitor *consumer lag*, *disk usage*, and *latency histograms*; alert on thresholds.  

Narrative: “We shard data by key, replicate logs for durability, and use transactional writes to guarantee exactly‑once semantics. Consumers form scalable groups that process micro‑batches, feeding a GPU pool for inference, while auto‑scaling reacts to lag spikes.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
