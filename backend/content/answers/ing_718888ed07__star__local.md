---
qid: ing_718888ed07__star__local
question: 'Explain: Create indices that cover longer time periods'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 292
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:26-05:00'
sources: []
---

**Situation** – In a fraud‑detection platform, our model’s recall dropped to 72 % after we rolled out a new payment gateway. The training data were indexed by daily transaction timestamps, so the model only saw patterns from the past 30 days.

**Task** – I needed to rebuild the feature indices so that the model could learn from multi‑year trends without blowing up storage or query latency.

**Action** – First, I added a “transaction_year” column and created a composite B-tree index on (customer_id, transaction_year). Then I implemented a materialized view that aggregated daily counts into monthly buckets per customer. Using PostgreSQL’s `pg_partman`, I partitioned the raw table by year to keep each segment under 200 GB. For inference, I switched from pulling raw rows to querying the pre‑aggregated view, which cut the feature extraction time from 2.3 s to 0.6 s per batch.

**Result** – The updated indices allowed the model to incorporate three years of historical behavior, raising recall to 85 % while keeping inference latency below 1 second. I learned that thoughtful partitioning and pre‑aggregation can dramatically improve both performance and data coverage without overhauling the entire pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
