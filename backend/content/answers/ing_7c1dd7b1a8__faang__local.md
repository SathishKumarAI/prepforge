---
qid: ing_7c1dd7b1a8__faang__local
question: 'Explain: From Zero to 50 Million Uploads per Day: Scaling Media at Canva'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 505
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:32:47-05:00'
sources: []
---

**Clarify**  
Canva’s goal is to handle 50 M uploads/day—far beyond a typical SaaS workload. I’ll assume: *uploads are image/video files*, *storage cost and latency matter*, *users expect near‑instant availability*, and *the system must be fault‑tolerant and compliant with privacy regulations.*

**Approach**  
1. **Front‑end ingestion** – CDN edge nodes accept multipart uploads, chunking for resumable transfers.  
2. **Back‑end processing pipeline** – a serverless or container‑based queue (Kafka/Cloud Pub/Sub) decouples ingest from downstream services.  
3. **Storage tiering** – hot objects go to SSD‑backed object store; cold or infrequently accessed assets move to cheaper archival tiers after 30 days.  
4. **Metadata & search** – a distributed NoSQL DB (Cassandra/Spanner) indexes tags, user ownership, and version history for quick retrieval.  
5. **Scalable compute** – autoscaling micro‑services handle transcoding, watermarking, and virus scanning; GPU workers process heavy ops only when needed.

**Depth**  
- *Throughput*: 50 M uploads ≈ 580 kB/s per second on average; peak bursts require ≥10× headroom.  
- *Latency*: Edge upload <200 ms, processing pipeline ≤2 s for thumbnails.  
- *Consistency*: Use eventual consistency for metadata with a write‑ahead log to guarantee no lost updates.  
- *Cost*: Multi‑tier storage reduces S3/Blob costs by ~60 % while keeping hot data on SSD.

**Edge Cases**  
- Network partitions: retries and idempotent uploads prevent duplicates.  
- Large files (50 GB): chunking with checksums ensures integrity.  
- Security: enforce encryption at rest and in transit; audit logs for compliance.

**Optimize & Communicate**  
I’d iterate by measuring real‑world load, then add rate limiting per user, auto‑scaling on queue depth, and a CDN cache for popular assets. Throughout the interview I’d keep the narrative focused on trade‑offs: speed vs. cost, consistency vs. latency, and how each architectural choice directly supports 50 M uploads/day while staying maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
