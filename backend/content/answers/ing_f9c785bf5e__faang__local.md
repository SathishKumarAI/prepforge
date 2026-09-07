---
qid: ing_f9c785bf5e__faang__local
question: 'Explain: Message Queue — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 510
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:20:28-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *distributed counter* that can be updated from many clients and queried for its current value, using a **message queue** to decouple producers and consumers.  
Assumptions to confirm:  
1) How high is the write throughput? 2) Do we need strict consistency or eventual? 3) Is latency of reads critical? 4) What are the persistence guarantees?  

**Approach**  
1. **Publish–Subscribe layer** – Clients publish “increment” messages to a Kafka topic (or similar).  
2. **Shard‑based consumers** – Partition the topic by key (e.g., counter ID) and run one consumer per partition. Each consumer maintains an in‑memory running total for its shard, periodically checkpointing to a fast KV store (Redis or RocksDB).  
3. **Aggregated view** – A “query service” reads from all shards’ checkpoints (or streams them into a central materialized view) and sums the values.  

**Depth**  
*Write path*: Client → Kafka → Consumer → local cache + async write to Redis (latency < ms).  
*Read path*: Query service pulls latest shard totals, aggregates in O(k). Complexity: writes O(1), reads O(k) where k = number of shards; can be reduced with a Bloom‑filter–based “fast read” cache. Persistence is achieved by Kafka’s log durability and Redis’ snapshot/append‑only file.  

**Edge Cases**  
- Consumer crash → rebalancing will replay messages, ensuring no lost updates.  
- Partition skew → add more partitions or rebalance.  
- Counter rollover or overflow → use 64‑bit integers and periodic compaction.  

**Optimize & Communicate**  
To reduce read latency, expose a “counter service” that maintains an up‑to‑date in‑memory map of all shard totals, updated via consumer callbacks. For very high write rates, switch to a log‑structured merge tree (LSM) backend instead of Redis. Explain trade‑offs: Kafka gives durability and replay; Redis offers sub‑millisecond reads but limited scalability compared to a distributed KV store like DynamoDB. Conclude with key metrics: write throughput > 10k ops/s, read latency < 50 ms, 99.9% durability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
