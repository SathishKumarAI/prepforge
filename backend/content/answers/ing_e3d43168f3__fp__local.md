---
qid: ing_e3d43168f3__fp__local
question: 'Explain: 6.1 Photo/Video Upload — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 443
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:04:00-05:00'
sources: []
---

**Why the problem exists**

A social media platform must ingest a continuous stream of user‑generated media—photos and videos—at scale, while guaranteeing low latency, high availability, and eventual consistency across millions of clients. The core optimization is *throughput versus durability*: we want to accept a burst of uploads instantly (low queue depth) yet persist them reliably for later retrieval.

**Fundamental building blocks**

1. **Client‑side compression & chunking**  
   • *Chunk the file into 4 MB pieces.*  
   • Each chunk is signed, enabling resumable uploads and protection against tampering.  

2. **Edge ingestion layer**  
   • A CDN front‑end (e.g., CloudFront) receives chunks, verifies signatures, and forwards them to an **upload API gateway**.  
   • The gateway writes each chunk to a *write‑optimized* object store (S3/Blob) via an SQS queue, decoupling the client from storage latency.

3. **Metadata service**  
   • A relational DB holds the media record: user ID, timestamps, original dimensions, and pointers to chunks.  
   • Transactions guarantee that either *all* chunks are stored or none, preserving consistency.

4. **Processing pipeline**  
   • Workers consume the SQS queue, assemble full files, generate thumbnails (using a GPU‑accelerated service), and store derivatives in a CDN‑backed cache.  

5. **Serving layer**  
   • A global edge network caches media; requests hit the nearest node, minimizing read latency.

**Non‑obvious insight**

*The bottleneck is not storage but the metadata write path.* If you batch chunk writes into a single transaction per upload, you dramatically reduce the number of round‑trips to the DB and avoid “orphaned” chunks that would otherwise need cleanup. This trade‑off (slightly higher latency on upload for much lower downstream complexity) is often overlooked but yields far greater overall system stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
