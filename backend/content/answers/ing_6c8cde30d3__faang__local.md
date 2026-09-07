---
qid: ing_6c8cde30d3__faang__local
question: 'Explain: Handling Large Files — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 484
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:55:35-05:00'
sources: []
---

**Clarify**  
We’re asked how to design a system that can ingest, process, and serve *large* (multi‑GB) files efficiently. Key assumptions:  

1. Files are immutable once uploaded.  
2. Reads far outnumber writes.  
3. Latency tolerance is low for reads; uploads can be batched.  

**Approach**  
Break the problem into three layers:  

| Layer | Responsibility | Typical Solution |
|-------|----------------|------------------|
| 1️⃣ Ingestion | Chunked upload & validation | Multipart/form‑data + S3 presigned URLs |
| 2️⃣ Storage | Durable, scalable, and cost‑effective | Object store (S3/Blob) with lifecycle tiers |
| 3️⃣ Serving | Low‑latency access & streaming | CDN + HTTP range requests |

**Depth**  
1. **Chunked Upload**: Client splits file into ~10 MB parts; each part is uploaded via presigned URL. The server records metadata (file ID, part offsets). Complexity O(n) where *n* = parts.  
2. **Atomic Assembly**: Once all parts are received, a background job stitches them in the object store using S3’s `CopyObject` or `MultipartUploadComplete`. Guarantees no partial reads.  
3. **Metadata Service**: A lightweight DB (DynamoDB) stores file size, checksum, and access rights. Query time O(log n).  
4. **Serving**: Files are served through a CDN; HTTP range requests allow streaming without downloading the whole object.  

**Edge Cases**  
- *Interrupted uploads*: keep part status in DB, resume with same presigned URL.  
- *Large number of parts*: enforce max parts limit to avoid S3 overhead.  
- *Concurrent reads/writes*: use versioning or immutable objects to avoid race conditions.  

**Optimize & Communicate**  
*Improvements*: Use serverless functions for assembly to auto‑scale; enable compression on the fly for bandwidth savings.  
*Narrative*: I’d explain that by decoupling ingestion, storage, and delivery, we achieve linear scalability, cost efficiency, and fault isolation—exactly what FAANG systems demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
