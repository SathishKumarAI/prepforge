---
qid: ing_f9d155722c__star__local
question: 'Explain: Materialized Views — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 337
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:09-05:00'
sources: []
---

**Situation:** In my last role at FinTechCo, our risk‑scoring service hit a bottleneck during peak trading hours. The analytics engine had to run complex SQL queries against a 12 TB table of transaction logs every minute, and latency spiked from 200 ms to over 2 seconds.

**Task:** I needed to redesign the data layer so that real‑time risk scores could be delivered under 500 ms while keeping the batch ingestion pipeline efficient and cost‑effective.

**Action:** I introduced a set of materialized views (MVs) on Snowflake. First, I identified the most frequent aggregation patterns—sum of transaction amounts per user, average fraud score per region, and top‑10 merchants by volume—and created incremental MVs for each. Using Snowflake’s “REFRESH ON COMMIT” option, the views stayed up to date with minimal overhead. To handle the 12 TB base table, I partitioned it by day and leveraged clustering keys on `user_id` and `merchant_id`. For scaling, I provisioned a multi‑cluster warehouse that automatically spun up during market open, and set up auto‑scale policies to cap compute costs.

**Result:** Query latency dropped from 2 seconds to 350 ms, achieving a 90% reduction. The cost of the compute layer fell by 35% thanks to efficient clustering and incremental refreshes. I learned that careful MV design—choosing the right aggregation granularity and refresh strategy—is key to balancing performance and cost in large‑scale analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
