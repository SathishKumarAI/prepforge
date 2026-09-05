---
qid: ing_e3d43168f3__star__local
question: 'Explain: 6.1 Photo/Video Upload — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 425
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:04:08-05:00'
sources: []
---

**Situation**  
When I joined a fast‑growth startup, we were hitting the 20 million daily uploads limit and users complained about 2–3 second lag for a 4 MP photo. The goal was to build a resilient upload pipeline that could scale to millions of concurrent uploads while keeping latency under 1 s.

**Task**  
Design an end‑to‑end system for photo/video uploads: accept the file, store it durably, generate multiple resolutions, deliver thumbnails instantly, and keep metadata consistent across services—all with minimal downtime.

**Action**  
I split the process into microservices. The **Upload API** (Node/Express) first streamed data to an S3‑compatible object store via multipart upload, using a CDN edge node to reduce round‑trips. A Kafka topic queued “processing” events; a worker pool in Go pulled each event, ran FFmpeg for videos and ImageMagick for photos, then wrote thumbnails back to the store. Metadata (user ID, timestamps, storage URLs) went into a sharded PostgreSQL cluster with read replicas, and we used Redis for cache‑warm thumbnails. I added rate‑limiting per user (5 req/s) and automatic retries with exponential backoff. For consistency, we employed eventual consistency with versioned object keys and a background reconciliation job.

**Result**  
Upload latency dropped from 2.3 s to 0.8 s average; the system handled 1.5× peak traffic without outage. Storage costs fell by 15% due to smarter compression settings. I learned that coupling streaming uploads with event‑driven processing and a hybrid storage strategy is key for scalable media services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
