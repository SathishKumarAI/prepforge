---
qid: ing_4430752875__star__local
question: 'Explain: Blob Store — Grokking System Design Interview: Patterns & Mock
  Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 397
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:23-05:00'
sources: []
---

**Situation** – In my last role I was tasked with designing a global media platform that needed to serve millions of users streaming high‑resolution video and images. The existing file system could not scale, had single points of failure, and we were seeing 30 % slowdowns during peak traffic.

**Task** – My goal was to build a fault‑tolerant blob store that could ingest, replicate, and deliver media blobs at petabyte scale with <200 ms latency for 99.9 % of requests, while keeping cost per GB below $0.02/month.

**Action** – I broke the system into three layers: ingestion, storage, and delivery. For ingestion I built a sharded write API using gRPC; each shard hashed the blob key with consistent hashing to route writes to an appropriate set of object nodes. Each node stored blobs on SSD-backed block devices, replicated 3× across availability zones via erasure coding (EC‑6/4) to balance durability and storage overhead. I added a metadata service in etcd for cataloging blobs, using versioned manifests to support eventual consistency. For delivery, I placed a CDN front‑end with edge caching; the origin fetches used signed URLs to enforce access control. I also introduced a background compaction job that merged small fragments into larger blocks, reducing read amplification.

**Result** – The new blob store handled 2 TB/day of uploads and delivered 10 M concurrent streams during our beta launch with <150 ms average latency. Cost per GB dropped to $0.015/month, and we achieved a 99.95 % uptime SLA after six months. I learned that balancing replication strategy (EC vs RAID) and careful key‑sharding is critical for both performance and cost in large‑scale blob storage systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
