---
qid: ing_7db56803ce__faang__local
question: 'Explain: So to give you some idea of — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 495
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:37:36-05:00'
sources: []
---

**Clarify**  
You’re asking how a platform like YouTube scales globally—handling billions of views, millions of uploads, and real‑time recommendations. I’ll assume we need to address storage, compute, latency, and consistency for a read‑heavy workload with occasional writes (uploads).

**Approach**  
1. **Data sharding & replication** – partition videos by hash or geography; replicate to edge caches.  
2. **Content Delivery Network (CDN)** – pull video segments from nearest node, use HTTP/2 multiplexing.  
3. **Micro‑service architecture** – separate services for ingestion, transcoding, recommendation, analytics.  
4. **Event‑driven pipelines** – Kafka or Pub/Sub for async processing of uploads and metrics.  
5. **Cache layers** – in‑memory (Redis) for hot thumbnails/metadata; CDN for full video streams.

**Depth**  
- *Ingestion*: User uploads → S3‑style object store → worker pool transcodes into multiple bitrates (HLS/DASH).  
- *Storage*: Sharded object storage with erasure coding, global namespace via consistent hashing.  
- *Serving*: Edge node fetches segment from local cache; if miss, pulls from nearest origin. Latency < 200 ms for 90% traffic.  
- *Recommendation*: ML models run on pre‑computed feature vectors stored in distributed graph DB; inference served by lightweight gRPC services.  
- *Consistency*: Eventual consistency for metadata; strong for playback URLs via lease tokens.

**Edge Cases**  
- *Hot uploads* (viral videos) → auto‑scale transcoding workers, cache warming.  
- *Network partitions* → fallback to stale content with graceful degradation.  
- *Data loss* → multi‑region backups and immutable audit logs.

**Optimize & Communicate**  
We can reduce cost by using spot instances for batch transcoding and by compressing metadata. For latency, pre‑fetch adjacent video segments during playback. I’d present this flow in a diagram, quantify throughput (e.g., 10 k uploads/sec) and show that adding one more edge node reduces global RTT by ~15 ms. This structured narrative demonstrates problem understanding, architectural choices, and trade‑offs—key for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
