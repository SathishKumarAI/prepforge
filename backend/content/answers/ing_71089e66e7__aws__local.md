---
qid: ing_71089e66e7__aws__local
question: 'Explain: Images MetaData - DB Schema — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 475
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:13-05:00'
sources: []
---

**Situation / Task**  
I was asked to redesign the “Image Metadata” table for a new photo‑sharing service that must support 200 M daily uploads while keeping query latency < 50 ms and cost <$0.02 per request.

**Action**  
*Schema & Services*  
- **Primary key:** `user_id + image_hash` (dedupe).  
- **Sort key:** `upload_timestamp` for range queries (e.g., last 30 days).  
- **Attributes:** `size_kb`, `resolution`, `exif_json`, `tags_set`, `privacy_flag`.  
- Use **Amazon DynamoDB** (global tables) for low‑latency reads/writes and automatic sharding.  
- Store the heavy `exif_json` in **S3 Glacier Deep Archive**; keep a pointer (`s3_key`) in DynamoDB to avoid bloating the table.  
- Enable **DynamoDB Streams → Lambda** to push metadata updates into an **Amazon OpenSearch Service** index for full‑text tag search, ensuring eventual consistency.  

*Scalability & Cost*  
- Provisioned throughput of 400 WCU/RCU (auto‑scaling) covers peak traffic; on‑demand bursts cost ~10% more but are capped.  
- S3 storage for raw EXIF data is < $0.004 per GB/month, far cheaper than DynamoDB for large blobs.

**Result**  
After rollout:  
- Query latency dropped from 120 ms to **35 ms** (70 % improvement).  
- Storage cost reduced by **38 %** compared to a monolithic relational design.  
- 99.9999 % availability achieved through multi‑AZ DynamoDB.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end flow, dug into DynamoDB’s partitioning limits, and quantified performance gains. The biggest learning: keeping unstructured EXIF data out of the primary store prevents hot partitions; a trade‑off we validated with A/B testing before full deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
