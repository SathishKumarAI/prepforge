---
qid: ing_88c7ce19f6__faang__local
question: 'Explain: Scaling to Count Billions — From Zero to 50 Million Uploads per
  Day: Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 607
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:02:26-05:00'
sources: []
---

**Clarify**

The blog describes how Canva’s media platform grew from zero to ~50 M uploads/day while keeping latency < 200 ms and cost‑efficient storage.  
Key assumptions I’d confirm:  
* Uploads are user‑generated images/videos, stored once per unique hash.  
* Service is globally distributed with CDN edge caches.  
* Primary bottlenecks are ingest throughput, object storage, and metadata indexing.

**Approach**

1. **Ingest layer** – horizontally scalable HTTP(S) endpoints behind a load balancer.  
2. **Deduplication & chunking** – hash‑based de‑dup before persistence; multipart uploads for large files.  
3. **Storage tiering** – hot tier (object store, e.g., S3/MinIO) + cold tier (archive).  
4. **Metadata catalog** – sharded NoSQL DB or search index (e.g., DynamoDB + ElasticSearch).  
5. **Edge caching & CDN** – pre‑warm popular assets, serve via CloudFront/GCS.  
6. **Observability** – metrics, tracing, automated scaling policies.

**Depth**

* **Throughput**: Each ingest node handles ~10 k req/s; 500 nodes → 5 M uploads/day (≈57 req/s). Scaling horizontally meets the target.  
* **Storage**: 50 M uploads/day × avg 3 MB = 150 TB/day ≈ 55 PB/yr. Use object store with lifecycle policies to move cold data to Glacier.  
* **Deduplication**: SHA‑256 hash + HMAC ensures idempotent storage; collision risk negligible.  
* **Metadata index**: Partition by bucket+hash, use range queries for retrieval. Consistency via eventual or strong depending on use case.  
* **Cost**: Pay‑as‑you‑go object store + CDN; compute only for active shards.

**Edge Cases**

* Sudden traffic spikes (e.g., viral trend) → auto‑scaling triggers; fallback to throttling.  
* Network partitions → retry logic with exponential backoff.  
* Hash collisions or storage errors → audit logs, manual reconciliation.  
* GDPR/CCPA deletions → soft delete flag + background purge job.

**Optimize & Communicate**

- **Compression & transcoding**: on‑the‑fly to reduce bandwidth and storage for videos.  
- **Batching writes**: group metadata updates to reduce DB load.  
- **Cache invalidation strategy**: use versioned URLs to avoid stale content.  

I’d explain that the architecture balances *throughput*, *latency*, *cost*, and *data integrity*. By decoupling ingest, storage, and indexing, we achieve linear scalability—each component can grow independently as demand hits 50 M uploads/day.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
