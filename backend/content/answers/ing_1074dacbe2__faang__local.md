---
qid: ing_1074dacbe2__faang__local
question: 'Explain: Message Queue — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 510
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:21:34-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *Message Queue* layer that feeds Instagram’s feed system (e.g., new posts, likes, comments). Key assumptions: high write throughput (~10k posts/s), low read latency (<200 ms for a user’s home feed), eventual consistency across regions, and need to handle back‑pressure.

**2️⃣ Approach**  
1. **Data model** – per‑user “inbox” topic; each message = post metadata (id, author, timestamp).  
2. **Partitioning** – hash by recipient user ID → shard per machine.  
3. **Write path** – producer writes to Kafka/Apache Pulsar; use idempotent keys to avoid duplicates.  
4. **Read path** – consumer pulls latest N messages from each user’s partition and pushes into a CDN‑cached feed.  
5. **Scaling & fault tolerance** – replicas per partition, leader election, automatic rebalancing.

**3️⃣ Depth**  
- **Throughput**: 10k posts/s → ~1 MB/s if metadata is 100 B; Kafka can handle >10× that with proper disk I/O.  
- **Latency**: consumer reads from local log offset; with compression and batching, <50 ms for a single fetch.  
- **Consistency**: use *at least once* semantics; dedupe on the consumer side via message IDs.  
- **Back‑pressure**: implement `max.in.flight.requests.per.connection` to throttle producers when disk is saturated.

**4️⃣ Edge Cases**  
- User deletes account → purge partition.  
- Network partitions → leader election delays reads, but eventual consistency holds.  
- Sudden traffic spike (e.g., viral post) → auto‑scale consumer pods; use hot‑spot detection to rebalance shards.

**5️⃣ Optimize & Communicate**  
- **Compression** (Snappy/Avro) reduces log size by ~70 %.  
- **Tiered storage**: cold posts archived to S3, only recent 7 days kept in Kafka.  
- Explain trade‑offs: higher replication = lower latency but more storage; compression vs CPU cost.  

Conclude with a diagram (omitted here) and note that this design satisfies Instagram’s need for scalable, low‑latency feed updates while ensuring resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
