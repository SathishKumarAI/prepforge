---
qid: ing_e3d43168f3__faang__local
question: 'Explain: 6.1 Photo/Video Upload — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 505
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:28:44-05:00'
sources: []
---

**Clarify**  
We’re asked to design the “Photo/Video Upload” component of an Instagram‑style service: a user uploads media → it’s stored, processed (thumbnails, transcoding), and made immediately available for feed rendering. Key assumptions: *high write throughput*, *low latency to first display*, *global distribution* (CDN), *user privacy & security*, and *cost constraints*.  

**Approach**  
1. **API Gateway → Upload Service** – accepts multipart/form‑data, streams bytes to storage.  
2. **Storage Layer** – S3‑compatible object store for raw media; use versioning.  
3. **Processing Queue (Kafka/RabbitMQ)** – decouples upload from heavy transforms.  
4. **Workers** – generate thumbnails, transcode videos, compute metadata. Results written back to a “processed” bucket and a metadata DB.  
5. **Metadata Store** – NoSQL (Cassandra/Firestore) keyed by media_id; holds URLs for each variant.  
6. **CDN Cache** – CloudFront‑like edge caches serve thumbnails instantly.  

**Depth**  
- *Upload Latency*: ≤ 2 s via streaming to S3, then async processing.  
- *Throughput*: 10k uploads/sec → partitioned Kafka topics; workers scale horizontally.  
- *Consistency*: eventual; the user sees raw file immediately but media ready flag toggles when processed.  
- *Security*: signed URLs for upload/download, encryption at rest, audit logs.  

**Edge Cases**  
- Corrupt or oversized files: reject with clear error; retry logic.  
- Network partitions: fallback to local queue persistence.  
- Scaling spikes: auto‑scale workers; pre‑warm CDN edge nodes.  

**Optimize & Communicate**  
- Cache thumbnail URLs in Redis for O(1) feed fetches.  
- Use content‑addressable storage (hash‑based keys) to dedupe duplicates.  
- Benchmark transcoding pipeline; replace CPU‑heavy steps with GPU instances if cost‑effective.  
Explain trade‑offs: synchronous vs async, consistency guarantees, and cost of edge caching versus latency savings. This structure shows clear problem framing, a modular solution, performance reasoning, and practical edge handling—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
