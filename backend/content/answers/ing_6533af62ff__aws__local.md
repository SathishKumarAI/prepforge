---
qid: ing_6533af62ff__aws__local
question: 'Explain: Various Search-DBs — Search Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 419
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:43-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign our product recommendation engine for the **Amazon Marketplace**. The legacy system used a single relational DB that couldn’t handle real‑time query patterns at scale, leading to 30 % slower response times during peak holiday traffic.

**Action (Technical Design)**  
1. **Shift from RDBMS to Search‑Databases** – I evaluated OpenSearch, DynamoDB Accelerator (DAX), and Amazon Neptune.  
2. Chose **OpenSearch** for full‑text ranking + vector similarity, coupled with **Elasticsearch** shards spread across 12 AZs for *high availability* and *auto‑scaling*.  
3. Built a **Lambda‑driven ingestion pipeline** that streams clickstream data to Kinesis → Glue → OpenSearch, ensuring *real‑time indexing*.  
4. Implemented *query caching* with Amazon CloudFront + Edge Lambda@Edge to reduce latency by 45 %.  
5. Adopted *cost‑control tags* and scheduled nightly “cold” snapshots on S3, cutting storage spend by 25 %.

**Result**  
- Query latency dropped from **350 ms → 80 ms** (4× faster).  
- Recommendation click‑through rate increased **18 %**, translating to ~$2.5M incremental revenue in the first quarter post‑launch.  
- Cost per query fell by **30 %** while maintaining 99.999 % availability.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Faster, more relevant recommendations directly improve shopper experience.  
- **Ownership & Dive Deep** – I owned the migration end‑to‑end and dove deep into performance metrics to iterate quickly.  

Bar‑raiser notes: demonstrated ownership, quantified impact, and learned from a failed pilot that over‑sharding hurt cache hit rates—leading to the final balanced design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
