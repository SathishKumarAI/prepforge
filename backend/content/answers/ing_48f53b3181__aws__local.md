---
qid: ing_48f53b3181__aws__local
question: 'Explain: High and Low Database Cardinality Definition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 475
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:33-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my role as a Machine‑Learning Engineer at AWS, I led the migration of our recommendation pipeline from an on‑prem RDBMS to Amazon Redshift. The first challenge was understanding **database cardinality**—the number of distinct values in a column relative to the total rows.

| Cardinality | Definition | Typical Use |
|-------------|------------|--------------|
| **High (low selectivity)** | Few unique values spread across many rows (e.g., gender, country). | Good for *wide* joins; index on low‑card columns is often unnecessary. |
| **Low (high selectivity)** | Many distinct values per row (e.g., user IDs, timestamps). | Requires efficient indexing or partitioning to avoid full scans. |

**Situation:** Our prod table had 10M rows but only 3 unique “event_type” values—high cardinality. A join on this column caused a 12‑second scan during nightly training jobs.

**Task:** Reduce query time without incurring extra storage cost.

**Action:**  
1. Added a **composite GSI** on (`event_type`, `user_id`) in DynamoDB, leveraging its native support for high‑cardinality keys.  
2. Partitioned the Redshift table by `event_date` to keep hot data local.  
3. Used **Amazon Athena** for ad‑hoc analytics, avoiding duplicated scans.

**Result:** Query latency dropped from 12 s to **0.8 s** (≈ 85% reduction), training throughput increased by 30%, and storage costs fell by 15%.  

*Leadership Principles:* **Ownership** – I took full responsibility for the pipeline’s performance; **Dive Deep** – I analyzed cardinality patterns, benchmarked multiple solutions, and chose the most cost‑effective one.  

Bar‑raiser cue: The candidate demonstrates ownership, dives into data, quantifies impact, and shows learning—e.g., iterating from DynamoDB to Redshift partitioning after observing performance bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
