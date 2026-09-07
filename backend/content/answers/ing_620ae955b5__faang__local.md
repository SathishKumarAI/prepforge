---
qid: ing_620ae955b5__faang__local
question: 'Explain: Core Concepts — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 537
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:31:59-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer wants a concise design of a publish‑subscribe (Pub/Sub) system used for real‑time ML pipelines (e.g., streaming feature ingestion).  Key assumptions: high throughput, low latency, horizontal scalability, at‑least‑once delivery, and eventual consistency. I’ll ask if we need fault tolerance across regions or just a single data center.

**2️⃣ Approach**  
1. **Producer → Topic Partitioning** – hash on key (e.g., user id) to spread load.  
2. **Broker Layer** – replicated log per partition; use Raft/RAFT‑style consensus for durability.  
3. **Consumer Groups** – each ML worker subscribes to a group, receives exclusive partitions, enabling parallel processing.  
4. **Back‑pressure & Flow Control** – allow consumers to pull at their own pace or push via windowing.  
5. **Schema Registry** – enforce Avro/Protobuf for forward/backward compatibility.  

**3️⃣ Depth**  
- *Latency*: log writes are async with in‑memory buffering; read latency ≈ 1–2 ms on a single node, sub‑10 ms at scale.  
- *Throughput*: each broker can handle >10k messages/sec per partition; sharding increases linearly.  
- *Reliability*: replicated logs (3‑node ISR) guarantee persistence; consumer offsets stored in ZooKeeper/Consul or Kafka’s internal topic.  
- *Scalability*: add brokers → partitions redistribute; consumers auto‑rebalance.  
- *Complexity*: O(1) per message write/read, O(log N) for partition lookup.

**4️⃣ Edge Cases**  
- **Burst traffic**: pre‑allocate buffer or use back‑pressure queues.  
- **Consumer lag**: monitor offset lag; trigger alert if > threshold.  
- **Schema evolution**: enforce compatibility rules to avoid consumer crashes.  
- **Cross‑region replication**: introduce asynchronous mirroring; trade‑off between latency and consistency.

**5️⃣ Optimize & Communicate**  
Explain that we can shard by feature type, compress messages, or use a lightweight broker (e.g., Pulsar) for multi‑tenant isolation. I’d finish by summarizing the trade‑offs: higher replication = durability but more latency; larger partitions = fewer rebalances but potential hot spots. This structured walk‑through demonstrates clear problem framing, systematic design, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
