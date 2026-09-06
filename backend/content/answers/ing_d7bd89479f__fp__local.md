---
qid: ing_d7bd89479f__fp__local
question: 'Explain: 4.4 Media Storage — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 462
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:39:02-05:00'
sources: []
---

### 4.4 Media Storage – Why Instagram Needs a Special‑purpose Layer

**Problem statement**  
A user can upload millions of photos and videos daily. Each item must be stored durably, served with low latency to thousands of devices, and still be searchable (tags, geolocation). The storage layer therefore trades *cost* against *availability*, *scalability*, and *query‑time*.

**Why it works the way it does**

1. **Object store + CDN** – Raw media is immutable; an object store (S3‑like) guarantees durability and linear scaling. A CDN caches popular objects at edge nodes, turning a 10 GB object into a 100 µs read for the end user.  
2. **Chunking & deduplication** – Photos are often similar (filters, cropping). By hashing blocks we can store only unique chunks, reducing storage cost and bandwidth for re‑uploads.  
3. **Metadata catalog** – A relational or graph DB keeps pointers to objects, tags, captions, and user IDs. This is the *index* that turns a “show me all photos from @john in NYC” query into a few key lookups instead of scanning blobs.  

**Deeper principle**  
The system is an *information‑theoretic bottleneck*: we want to minimise the amount of data that must traverse the network for each request. By separating immutable content (object store) from mutable metadata (catalog), we can apply different consistency models—eventual consistency for media, strong consistency for likes.

**Non‑obvious insight**  
Most designs focus on read latency, but **write amplification** is the real killer in a social feed. Every upload must be replicated to several data centers for durability; if you naïvely copy the whole file each time, storage and bandwidth explode. Instead, compute a *content‑addressable* hash at ingestion, store the file once per unique content, and only replicate that single copy. Subsequent “uploads” become lightweight “pointer” writes, dramatically reducing write cost while preserving user semantics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
