---
qid: ing_427d7dd5f0__faang__local
question: 'Explain: Type of Data Store — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 579
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:18:50-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Build a live comment system (e.g., for a news site). Clients submit, view, and stream comments in real‑time.  
*Assumptions to confirm:*  
- Expected traffic: 10k req/s per article, 100k active users per minute.  
- Latency target <200 ms for read/write.  
- Comments are immutable after posting (no edit).  
- We need horizontal scalability and eventual consistency.

**2️⃣ Approach**  
1. **API layer** → stateless HTTP/GRPC + WebSocket push endpoint.  
2. **Storage tier 1 – Hot cache**: Redis Streams per article for real‑time ordering.  
3. **Storage tier 2 – Durable store**: Append‑only log (Kafka) → downstream writes to a distributed DB (Cassandra / DynamoDB).  
4. **Indexing & retrieval**: Pre‑aggregate comment lists in a read‑optimized table keyed by article+timestamp; support pagination via range queries.  
5. **CDN + edge cache** for static assets and popular comment threads.

**3️⃣ Depth**  
- *Write path:* Client → WebSocket → Redis Streams (ACK) → Kafka producer → consumer writes to Cassandra.  
  - Throughput: 10k req/s ≈ 1 MB/s per article, fits in a single Redis shard; Kafka partitions per article maintain order.  
- *Read path:* Clients poll or subscribe to WebSocket for new items; initial load hits the read‑optimized table (O(log N)).  
- *Consistency:* Write is first‑in‑first‑out via Kafka → guarantees ordering, eventual consistency with DB.  
- *Complexity:* O(1) per write, O(log N + P) per paginated read (P = page size).

**4️⃣ Edge Cases**  
- Burst traffic: Redis auto‑scale; Kafka’s partitioning handles spikes.  
- Message loss: Use Kafka's at‑least‑once semantics and idempotent consumers.  
- Data retention: TTL on Redis, compaction in Kafka, time‑to‑live in Cassandra.

**5️⃣ Optimize & Communicate**  
- **Horizontal scaling:** Shard by article ID; auto‑add shards when traffic exceeds threshold.  
- **Caching strategy:** Cache the last 50 comments per article in Redis to reduce DB reads for popular threads.  
- **Monitoring:** Latency dashboards, consumer lag alerts, and replay tests for fault tolerance.  

*Result:* A low‑latency, highly available comment system that scales horizontally while preserving message order and offering quick read access.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
