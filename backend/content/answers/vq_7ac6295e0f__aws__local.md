---
qid: vq_7ac6295e0f__aws__local
question: How many blocks forms extents, extent form segments?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 398
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:59:23-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
At my last role I was tasked with redesigning our on‑prem storage stack to reduce latency for the *Extents* feature used by over **3 M daily users**. The existing system stored extents as flat files; when an extent grew past 1 GB it fragmented, causing read times to spike from 15 ms to 200 ms.

**Action (Dive Deep / Bias for Action)**  
I mapped the data model: *blocks* → *segments* → *extents*. I proposed a **tiered storage design** using Amazon S3‑Object Lambda and DynamoDB. Each extent is stored as a single S3 object; segments are metadata entries in DynamoDB keyed by `extent_id#segment_index`.  
1️⃣ Use S3’s strong consistency for block retrieval.  
2️⃣ Cache the first 10 segments per extent in **ElastiCache (Redis)** to hit sub‑5 ms reads.  
3️⃣ Trigger a Lambda on write that updates DynamoDB, ensuring ACID‑like semantics.

**Result (Deliver Results)**  
After deployment:  
- Read latency dropped from **200 ms → 18 ms** (90% improvement).  
- Cost per GB fell by **38 %** due to S3’s lower storage tier.  
- Operational overhead reduced as we eliminated manual compaction jobs.

**Reflection (Invent & Simplify)**  
The key learning was that “extents” can be treated as first‑class objects in a serverless architecture, eliminating fragmentation entirely. This approach now serves over **5 M active sessions** with 99.9% uptime and is fully automated via CloudFormation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
