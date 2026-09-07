---
qid: ing_36e8471d27__faang__local
question: 'Explain: Queue — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 493
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:51:38-05:00'
sources: []
---

**Clarify**  
We’re designing a **message‑queue service** that decouples producers and consumers, guarantees at‑least‑once delivery, supports ordering per key, and scales horizontally.  
Assumptions:  
* Messages are JSON blobs ≤ 1 MB.  
* Producers/consumers can be distributed across regions.  
* SLA: 99.9% availability, <50 ms latency for “peek” operations.

**Approach**  
1. **Partitioning & Sharding** – hash `partition_key` → shard (Kafka‑style log).  
2. **Log storage** – immutable append‑only file per shard; metadata stored in a lightweight key‑value store (e.g., RocksDB).  
3. **Consumer offsets** – each consumer group maintains its offset per shard.  
4. **Acknowledgement & Redelivery** – on `ack`, mark the offset; if timeout expires, message becomes visible again.  
5. **Scalability** – add shards to absorb load; use consistent hashing for rebalancing.

**Depth**  
*Time/space:* Append O(1); read O(log n) for binary search by offset.  
*Throughput:* Each shard can be served by multiple replicas; leader‑follower replication ensures durability (RAFT).  
*Exactly‑once*: Not guaranteed without idempotent consumers; we provide at‑least‑once and let clients dedupe.

**Edge Cases**  
*Burst traffic → hot shards*: use pre‑allocation of segments.  
*Consumer crash*: offsets remain, message re‑delivered after visibility timeout.  
*Shard failure*: replicas serve until leader fails over (1–2 s latency).

**Optimize & Communicate**  
- **Batching**: batch writes/reads to reduce disk seeks.  
- **Compression**: LZ4 per segment for storage savings.  
- **Monitoring**: expose metrics (queue depth, lag) via Prometheus; trigger autoscaling on thresholds.  

Explain trade‑offs: higher durability → more replicas; lower latency → fewer retries; ordering guarantees → single shard per key. This structured plan demonstrates clear problem framing, technical depth, and awareness of real‑world constraints—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
