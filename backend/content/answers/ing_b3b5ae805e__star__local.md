---
qid: ing_b3b5ae805e__star__local
question: 'Explain: Indexing — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 350
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:23-05:00'
sources: []
---

**Situation:**  
While leading a data‑science team for a fintech startup, we built a recommendation engine that queried user‑transaction tables millions of times per day. Our nightly batch jobs were taking 18 minutes, and latency spikes during peak hours caused user churn.

**Task:**  
I had to reduce query runtimes by at least 70% and ensure the OLAP queries stayed within a 5‑minute window for real‑time dashboards.

**Action:**  
First, I profiled the workload with *pg_stat_statements* (PostgreSQL) and found that most slow queries scanned entire tables on columns like `user_id`, `transaction_date`, and `merchant_category`. I designed composite B‑Tree indexes: `(user_id, transaction_date)` for point lookups, and a partial index on `merchant_category` where the category was in the top 10% of spenders. For analytic scans, I added a covering GIN index on the JSONB payloads to avoid tuple fetches. I also tuned `work_mem`, set `effective_cache_size` higher, and switched the database to use *pg_repack* to reorganize tables without downtime.

**Result:**  
Query times dropped from 18 minutes to under 4 minutes for batch jobs, and peak latency fell below 200 ms. The recommendation throughput increased by 3×, leading to a 12% lift in daily active users. I learned that indexing is not just about adding columns; it’s about matching query patterns, understanding data distribution, and balancing write overhead against read performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
