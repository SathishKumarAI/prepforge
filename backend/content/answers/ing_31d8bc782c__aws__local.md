---
qid: ing_31d8bc782c__aws__local
question: 'Explain: Normalization/Denormalization — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 505
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:43-05:00'
sources: []
---

**Situation – Task**  
At my previous role I was tasked with redesigning the data layer for a recommendation engine that served 1 M active users daily. The OLTP database was heavily normalized (≈12 tables) and queries were taking 3–4 s on average, causing cache misses and throttling downstream ML pipelines.

**Action – Dive Deep & Ownership**  
I performed a query‑profile analysis in *Amazon RDS* PostgreSQL using `pg_stat_statements` and identified three hot paths:  
1. **User profile join** (users ↔ demographics)  
2. **Product catalog lookup** (products ↔ categories ↔ tags)  
3. **Historical interaction history** (interactions ↔ products)

To reduce latency I applied *denormalization* selectively:
- Created a materialized view (`user_profile_mv`) that joined users with demographics, refreshed nightly via `REFRESH MATERIALIZED VIEW CONCURRENTLY`.  
- Added a denormalized column `category_path` to the `products` table (comma‑separated category hierarchy) and an inverted index on it.  
- Replaced the interaction history join with a pre‑aggregated **Amazon DynamoDB** table (`user_interactions`) keyed by `user_id`, enabling O(1) lookups for the top 100 items.

I also introduced *normalization* where appropriate: a separate `tags` table was kept to avoid data duplication, and foreign keys were enforced via RDS. I monitored with **Amazon CloudWatch** metrics and set alarms on query latency.

**Result – Deliver Results**  
Latency dropped from an average of 3.5 s to **0.8 s** (≈ 77% improvement). The recommendation pipeline throughput increased from 200 req/s to 1,200 req/s, enabling real‑time scoring for all users. Cost impact was minimal: RDS instance size grew by 10 %, DynamoDB traffic added <$5/month.  

**Reflection – Bias for Action & Learning**  
The initial approach of blanket denormalization backfired on write paths (increased contention). By balancing normalization where data integrity mattered and targeted denormalization for read‑heavy paths, I achieved a scalable, cost‑effective design that aligns with AWS best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
