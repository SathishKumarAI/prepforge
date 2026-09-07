---
qid: ing_2f561ca59a__aws__local
question: 'Explain: Common Mistakes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 438
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:23-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science team at my previous role, we built a recommendation engine that served 1 M active users daily. The model was trained on a click‑through dataset stored in S3 and accessed via Athena for feature extraction.

**Action**  
I discovered the table was **not indexed** on the user ID column; every query performed a full scan of the 50 GB Parquet file, causing latency to jump from ~200 ms to >5 s during peak traffic.  
*Design fix:*  
- Added a partitioned **Redshift Spectrum** view with a `user_id` bucket index and materialized views for the most common filters.  
- Migrated hot features to an **Amazon DynamoDB** table with a composite key (`user_id, timestamp`) for O(1) lookups.  
- Implemented a caching layer using **ElastiCache‑Redis** to store recent feature vectors (≈10 % of traffic).  

**Result**  
Query latency dropped by **93 %** (from 5 s → 300 ms), reducing the recommendation pipeline time from 12 s to 2.5 s. The cost savings were $18K/month on Redshift Spectrum and DynamoDB provisioned throughput. User engagement increased by **4 % CTR**, directly tied to faster, more accurate recommendations.

**Leadership Principles**  
- *Customer Obsession*: We focused on the end‑user experience—latency directly impacts satisfaction.  
- *Dive Deep & Ownership*: I identified the root cause in the data layer and took full responsibility for redesigning the ingestion pipeline.

**What a bar‑raiser looks for**  
- Quantified impact (latency, cost, CTR).  
- Depth: detailed understanding of AWS services, trade‑offs between Redshift Spectrum vs. DynamoDB vs. Redis.  
- Learning from failure: I documented the indexing oversight and added automated schema checks to prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
