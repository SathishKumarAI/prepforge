---
qid: ing_4916dff539__faang__local
question: 'Explain: Best Practices — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 552
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:33:57-05:00'
sources: []
---

**Clarify**  
We’re designing a ML‑pipeline that ingests raw data → transforms → trains models → serves predictions. The question asks for best practices when using message queues (MQs) in this context: how to orchestrate stages, ensure reliability, and scale.

*Assumptions:*  
- Multiple producers (data sources), multiple consumers (transformers, trainers).  
- Latency‑tolerant but throughput‑critical ingestion.  
- Fault tolerance and exactly‑once semantics are required for training data integrity.

---

**Approach**  
1. **Decouple stages with dedicated topics/queues**: `raw-data`, `preprocessed`, `train-batch`.  
2. **Use a broker that supports at‑least‑once delivery + idempotent consumers** (Kafka, Pulsar).  
3. **Schema registry & versioning** to evolve payloads without breaking consumers.  
4. **Back‑pressure via consumer lag monitoring**; auto‑scale consumers when lag > threshold.  
5. **Dead‑letter queues** for malformed messages and automated retry logic with exponential back‑off.  
6. **Exactly‑once processing**: use idempotent writes or transactional outbox pattern.

---

**Depth**  
- *Throughput*: Kafka’s log‑based storage allows 10⁵–10⁶ msgs/s per broker; partitions provide parallelism.  
- *Latency*: For real‑time inference, keep a small “prediction” queue with low batch size and high priority consumers.  
- *Fault tolerance*: Replication factor ≥3 ensures data durability; consumer group rebalancing guarantees no message loss on node failure.  
- *Scalability*: Add partitions for higher parallelism; auto‑scaling of consumer pods in Kubernetes.

---

**Edge Cases**  
- **Schema drift**: Use schema registry to reject incompatible messages.  
- **Consumer crash mid‑processing**: Exactly‑once guarantees prevent duplicate training runs.  
- **Burst traffic**: Configure broker backlog limits and use back‑pressure signals (e.g., consumer lag) to throttle producers.

---

**Optimize & Communicate**  
1. **Monitoring**: Grafana dashboards for lag, throughput, error rates.  
2. **Testing**: Chaos experiments (broker shutdowns, network partitions).  
3. **Documentation**: Publish API contracts and queue usage guidelines to the data team.  

By structuring MQ usage this way we achieve a scalable, fault‑tolerant ML pipeline that balances latency with throughput—exactly what FAANG teams look for in production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
