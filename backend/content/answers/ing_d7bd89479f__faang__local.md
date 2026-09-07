---
qid: ing_d7bd89479f__faang__local
question: 'Explain: 4.4 Media Storage — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 511
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:01:09-05:00'
sources: []
---

**Clarify**  
We need a distributed media‑storage service for an app like Instagram: upload, store, retrieve images/videos, support thumbnails and multiple resolutions, high read/write throughput, durability, low latency, and cost efficiency. Assume millions of users, daily uploads in the 10⁴–10⁵ GB range, and global access.

**Approach**  
1. **Front‑end API** – REST/GraphQL endpoints for upload/download.  
2. **Ingestion pipeline** – client streams to CDN edge → object store.  
3. **Object store** – sharded key/value (e.g., S3 or GCS) with immutable blobs, versioned metadata in a relational DB.  
4. **Thumbnail/resize service** – async workers generate variants; results cached in Redis/CDN.  
5. **Caching layer** – edge CDN for hot media, in‑region cache for thumbnails.  
6. **Metadata store** – Postgres/PostgreSQL sharded by user_id for quick lookups.  
7. **Backup & replication** – multi‑AZ object replication + point‑in‑time recovery.

**Depth**  
- **Upload path**: client obtains signed URL → streams directly to S3, bypassing the app server (O(1) latency).  
- **Read path**: API fetches metadata → CDN cache hit; otherwise pulls from S3 and streams.  
- **Consistency**: eventual consistency for thumbnails; strong read‑through caching ensures fresh data.  
- **Scalability**: Object store scales horizontally; database sharding by user_id gives O(log N) queries.  
- **Cost**: tiered storage (S3 Standard → IA → Glacier) based on access patterns.

**Edge cases**  
- Corrupt uploads → validate checksum before finalizing.  
- Simultaneous thumbnail requests → deduplicate with request coalescing.  
- Cache eviction policies for stale media; use ETag/versioning.

**Optimize & communicate**  
We could introduce a CDN‑edge prefetch of popular media, add compression codecs (WebP/AV1) to reduce bandwidth, and implement S3 Object Lambda for on‑the‑fly transcoding. I’d explain each trade‑off: latency vs. cost, consistency model, and how the architecture satisfies SLAs while remaining maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
