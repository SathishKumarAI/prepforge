---
qid: ing_b16daeda8e__star__local
question: 'Explain: 7.3 Durability — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 372
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:26:25-05:00'
sources: []
---

**Situation** – While leading the backend team at a social‑media startup, we had to redesign our photo‑upload pipeline after a sudden spike in traffic caused several users to lose their recent posts during peak hours. The platform’s growth was projected to double within six months, so any downtime or data loss would hurt user trust and retention.

**Task** – I needed to build a durable, fault‑tolerant system that guaranteed every image upload persisted reliably across nodes, even in the face of network partitions, node failures, and concurrent writes, while keeping latency under 200 ms for the end‑user.

**Action** – First, we introduced an asynchronous write‑ahead log (WAL) stored on a distributed consensus store (Etcd). Each upload request wrote metadata to WAL before persisting the image blob in a sharded object storage layer (S3 compatible). We then replicated the WAL entries across three data centers using Raft for strong consistency. For eventual consistency of thumbnails, we leveraged an event‑driven microservice that processed WAL events and updated CDN caches via Redis Streams. To avoid blocking uploads, we returned a provisional upload ID immediately while background workers finalized storage; this allowed users to see their post instantly.

**Result** – After deployment, our durability error rate dropped from 3.7 % to <0.001 %, and average upload latency improved from 350 ms to 180 ms. User complaints about lost photos fell by 92 %. I learned that combining a write‑ahead log with cross‑region replication and asynchronous post‑processing can deliver both durability and low latency in high‑scale social platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
