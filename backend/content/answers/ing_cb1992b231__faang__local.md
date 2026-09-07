---
qid: ing_cb1992b231__faang__local
question: 'Explain: Post Uploads (Writes) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 604
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:31:48-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design the “Post Upload” flow for an Instagram‑style app – the write path that accepts a user’s image/video, stores it, and propagates metadata so followers can see it.  
Assumptions to confirm:  

- Users upload up to 10 GB media; most are <5 MB images or 30‑sec videos.  
- Latency target for the client after “Upload” is <200 ms (metadata only).  
- Media may be processed (resize, thumbnail) before being shown.  
- System must scale to millions of uploads per second.

**2️⃣ Approach**  
1. **Client → Front‑end API Gateway** – receives multipart/form + JSON metadata.  
2. **Chunked upload & retry** to a CDN edge or S3‑compatible store; the gateway returns a signed URL for direct upload.  
3. **Metadata microservice** writes record (user_id, media_url, timestamp, tags) to a sharded relational DB / NoSQL table.  
4. **Event bus (Kafka/Kinesis)** publishes “post_created” event.  
5. **Background workers**: image resizing, thumbnail generation, virus scan; results written back to the media store and updated in metadata.  
6. **Follower feeds**: push‑updates to a feed service that writes into a per‑user sorted set (e.g., Redis Streams or DynamoDB).  

**3️⃣ Depth**  
- **Storage:** Use object storage (S3/MinIO) with region replication; keep original + derived versions.  
- **Metadata DB:** Partition by user_id, use read replicas for follower reads; write latency < 10 ms.  
- **Feed service:** Append‑only log per user → allows fast pagination; cache hot feeds in Redis.  
- **Scalability:** Auto‑scale API & workers via container orchestrator; partition events to handle >5M uploads/s.  
- **Consistency:** Eventual consistency for feeds (acceptable lag).  
- **Cost trade‑offs:** Direct client upload reduces server load but needs CDN edge; background processing decouples latency from heavy transforms.

**4️⃣ Edge Cases**  
- Network drop during chunked upload → resume via offset tokens.  
- Large file > 1 GB → split into shards, recombine on storage side.  
- Corrupted media → virus scan flags and deletes.  
- User revokes post → delete metadata + soft‑delete from feeds.

**5️⃣ Optimize & Communicate**  
Explain that the core bottleneck is write amplification to followers; we mitigate it with append‑only logs and caching. Highlight monitoring: upload latency, queue depth, worker backpressure. Finally, note that this architecture can evolve to serverless for bursty traffic while keeping a robust event‑driven backbone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
