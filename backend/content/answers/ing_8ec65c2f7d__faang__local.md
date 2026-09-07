---
qid: ing_8ec65c2f7d__faang__local
question: 'Explain: Candidate — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 536
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:16:20-05:00'
sources: []
---

**Clarify**  
We’re designing a *live comment system* (think Twitter replies, YouTube live chat). Key requirements:  
1️⃣ Real‑time delivery with sub‑second latency.  
2️⃣ High write/read throughput (millions of comments per day).  
3️⃣ Ordered display per stream/video/thread.  
4️⃣ Moderation & spam filtering.  
5️⃣ Horizontal scalability and fault tolerance.

**Approach**  
1. **API layer** – REST/HTTP for writes, WebSocket or gRPC long‑poll for reads.  
2. **Queueing** – Publish‑subscribe (Kafka) to decouple ingestion from processing.  
3. **Processing pipeline** – Enrich (user data, spam score), write to *Comment Store*.  
4. **Storage** – NoSQL (Cassandra/Scylla) with composite key `(stream_id, timestamp)` for ordered reads; secondary index on `parent_comment_id` for replies.  
5. **Cache** – Redis or Memcached for hot threads and leaderboards.  
6. **Front‑end delivery** – Push via WebSocket; fallback long‑poll.

**Depth**  
- *Write path*: API → Kafka (partitioned by stream) → Processor → Cassandra. Latency ≈ 10–30 ms.  
- *Read path*: Client opens WS, subscribes to stream partition; broker pushes new messages directly from Kafka or from a cache shard.  
- *Consistency*: Eventual; we accept slight ordering gaps during high load.  
- Complexity: Write O(1), read O(log N) in Cassandra, but cached reads are O(1).  
- Moderation runs asynchronously; flagged comments are hidden after processing.

**Edge Cases**  
- Burst traffic (live events): scale Kafka brokers & processors horizontally.  
- Network partitions: use quorum writes in Cassandra to avoid lost messages.  
- Spam floods: rate‑limit per IP/user and real‑time blacklist checks before persisting.

**Optimize & Communicate**  
- Shard by `stream_id` → balanced load; add geo‑replication for latency.  
- Use *compaction* policies in Cassandra to purge old comments efficiently.  
- Explain trade‑offs: higher consistency (e.g., two‑phase commit) would hurt latency, so we choose eventual consistency with a small window of acceptable staleness.  

This design delivers low‑latency, scalable live commenting while remaining maintainable and extensible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
