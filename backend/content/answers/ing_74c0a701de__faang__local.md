---
qid: ing_74c0a701de__faang__local
question: 'Explain: Storage — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 527
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:16:11-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a *live comment* service (think Twitch chat) that supports millions of concurrent users, low latency, and persistence for replay. Key questions:  
- How many comments per second?  
- What read/write patterns (e.g., fan‑out to viewers vs. single‑topic view)?  
- Retention policy (days/weeks).  

**2️⃣ Approach**  
1. **Ingestion layer** – API gateway → message broker (Kafka) for buffering and decoupling writers from readers.  
2. **Storage tier** –  
   - *Hot* storage: Redis Streams or Kinesis Data Streams to serve real‑time fans.  
   - *Cold* storage: Columnar store (Cassandra/Bigtable) for long‑term history, sharded by channel ID + timestamp.  
3. **Read path** – Clients subscribe to the Redis Stream; fallback to poll Kafka for lagging readers.  
4. **Scaling & fault tolerance** – Partition streams per channel, use consumer groups, and replicate brokers.  

**3️⃣ Depth**  
- **Write latency:** <10 ms from API → broker → Redis.  
- **Read consistency:** At‑least‑once semantics via offset commits; idempotent message IDs avoid duplicates.  
- **Throughput:** Kafka/Kinesis can handle >1M msg/s with proper partitioning; Redis Streams shard per channel to keep memory bounded.  
- **Complexity trade‑offs:** Using a single broker simplifies ops but may hit headroom; multi‑broker clusters give elasticity at cost of more code.

**4️⃣ Edge Cases**  
- *Burst traffic* (e.g., live stream start): auto‑scale brokers & Redis shards.  
- *Message loss*: enable broker persistence and use transactional writes.  
- *Large fan‑out*: cache popular channels in CDN edge nodes to reduce load on back‑end.

**5️⃣ Optimize & Communicate**  
- Add **compaction** in Cassandra to keep only recent N days, then archive older data to S3 for cost savings.  
- Use **producers’ backpressure** (e.g., Kafka’s `linger.ms`) to batch writes without hurting latency.  
- Explain trade‑offs: Redis gives sub‑millisecond reads but limited persistence; Kafka offers durability but higher read latency.  

This design balances real‑time performance, scalability, and cost while keeping the system modular for future feature additions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
