---
qid: ing_8ec65c2f7d__fp__local
question: 'Explain: Candidate — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 418
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:08:45-05:00'
sources: []
---

**Live‑Comment System – From Problem to Architecture**

The core problem is *real‑time, low‑latency distribution of user messages* while preserving consistency and scalability across thousands of concurrent viewers.  
Treat each comment as an event that must be **broadcasted** to all subscribers in the order they were produced (temporal locality). This is a classic *publish–subscribe* pattern with strong ordering guarantees—an instance of *stream processing*.

1. **Event Ingestion** – A lightweight HTTP/WS endpoint receives comments, assigns monotonically increasing IDs via a distributed sequence generator (e.g., Kafka’s `offsets`), and pushes the event to a message broker.  
2. **Ordering & Replication** – The broker partitions by stream key (video ID) and replicates each partition for fault tolerance; consumer groups read in order, guaranteeing causal consistency.  
3. **Delivery Layer** – A stateless WebSocket server subscribes to the relevant topic, pushes messages to connected clients, and performs *back‑pressure* throttling if a client lags.  
4. **Storage & Replay** – Persist events in an append‑only log (e.g., RocksDB or HDFS) so late joiners can replay from the last checkpoint.

The design is essentially an *online convex optimization* of throughput vs latency: by decoupling ingestion and delivery, we linearize the system’s bottleneck.  

**Non‑obvious insight:**  
A single broker partition per stream **reduces contention** for ordering but forces a trade‑off between throughput (fewer partitions) and scalability. Dynamically *sharding* comments based on user hash within a stream can increase parallelism without breaking order, provided the downstream consumers reassemble by timestamp—an elegant application of *consistent hashing* to maintain causal delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
