---
qid: ing_f73324eca6__aws__local
question: 'Explain: BSON files — JSON And BSON | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 375
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:37:29-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑engineering sprint for a fintech startup that had to migrate its log ingestion pipeline from a legacy MySQL store to MongoDB in order to support real‑time analytics. The team needed to understand why BSON was chosen over plain JSON and how it impacted performance.

**Action**  
- *Dive Deep*: I benchmarked read/write throughput with 1 M documents per day, comparing `json` vs `bson`.  
- *AWS Services*: Deployed a **MongoDB Atlas cluster** on EC2 spot instances (3 × t3.large) and used **Amazon S3** for cold archival.  
- *Design Decision*: Chose BSON because it stores data in binary, preserving field types (e.g., `int64`, `decimal128`) which eliminated costly runtime casts during aggregation. I enabled MongoDB’s **compressed storage engine** to keep the dataset under 200 GB while keeping latency <5 ms for 99th percentile queries.  
- *Ownership & Bias for Action*: Implemented a Lambda pipeline that converts incoming JSON logs to BSON before bulk insertion, reducing network payload by ~35 %.  

**Result**  
- Throughput rose from 50 k ops/s (JSON) to 120 k ops/s (BSON).  
- Cost per GB decreased by 22 % thanks to compression.  
- The new pipeline enabled a real‑time fraud detection model that reduced false positives by 18 %.  

**Learnings**  
I realized that even small data format choices can cascade into measurable cost and latency savings—an insight I now apply whenever evaluating schema design in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
