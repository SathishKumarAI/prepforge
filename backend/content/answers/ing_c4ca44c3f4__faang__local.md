---
qid: ing_c4ca44c3f4__faang__local
question: 'Explain: Publish/Subscribe — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 424
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:18:33-05:00'
sources: []
---

**Publish/Subscribe – Message Queues (System Design)**  

### Clarify  
We need a decoupled messaging layer where producers publish events and multiple consumers subscribe to topics. Key assumptions:  
- High write throughput (≥ 10k msgs/s).  
- Consumers may lag behind or scale independently.  
- Exactly‑once vs at‑least‑once delivery? Assume *at‑least‑once* for simplicity.  

### Approach  
1. **Topic abstraction** – logical partitions (Kafka topics, SNS topics).  
2. **Broker layer** – persistent log with offset tracking per consumer group.  
3. **Load balancing** – partitioning by key; consumers in a group read from distinct partitions.  
4. **Durability** – replicated logs across nodes; use consensus (Raft/Quorum).  

### Depth  
- Use a *log‑structured merge* store for append‑only writes → O(1) amortized per message.  
- Store offsets in ZooKeeper/Kafka’s own metadata topic.  
- Consumers pull (polling) to support back‑pressure; producers push via lightweight RPC.  
- For fault tolerance, each partition has a leader and followers; leader election on failure.  

### Edge Cases  
- **Message loss** during broker crash → mitigated by replication.  
- **Consumer lag** causing large disk usage → implement retention policy or compaction.  
- **Hot partitions** → re‑partition or use sharding keys.  

### Optimize & Communicate  
- If *exactly‑once* is required, add idempotent producers and transactional commits (Kafka 0.11+).  
- Explain trade‑offs: higher replication ⇒ more latency; partition count vs parallelism.  
- Conclude with scalability diagram and key metrics (throughput, latency, durability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
