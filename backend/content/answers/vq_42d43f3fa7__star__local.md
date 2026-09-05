---
qid: vq_42d43f3fa7__star__local
question: Normalization vs Denormalization?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 300
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:56:27-05:00'
sources: []
---

**Situation:** In a recent data‑lake project for an e‑commerce retailer, our analytics team was struggling with slow query performance on the sales fact table; ad‑hoc reports were taking over ten minutes to return results, hurting decision makers.

**Task:** I needed to redesign the schema so that real‑time dashboards could refresh in under two seconds without sacrificing data integrity or maintenance overhead.

**Action:** First, I performed a cost‑benefit analysis of normalization versus denormalization. I kept the core dimension tables (products, customers) fully normalized to avoid duplication and ensure consistency. For the fact table, I introduced targeted denormalization: I materialized key aggregates (total sales per product category, daily revenue trends) into separate micro‑tables and added redundant columns like `category_name` and `customer_region`. Using Snowflake’s clustering keys on the surrogate keys, I reduced scan times dramatically. I also set up incremental ETL pipelines with dbt to refresh only changed rows.

**Result:** Query latency dropped from 10 minutes to under 2 seconds for the most critical dashboards—an 85% performance gain. The denormalized tables simplified report logic and cut developer time by 30%. I learned that selective denormalization, combined with proper clustering and incremental loading, can deliver near‑real‑time analytics while preserving data quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
