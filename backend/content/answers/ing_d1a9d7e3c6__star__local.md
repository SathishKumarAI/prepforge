---
qid: ing_d1a9d7e3c6__star__local
question: 'Explain: Importance of Cardinality for Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 337
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:28:56-05:00'
sources: []
---

**Situation** – While working on a recommendation engine for an e‑commerce platform, we stored user click logs in a PostgreSQL table that had millions of rows. The “product_id” column was used in joins with the products catalog to enrich data before feeding it into our ML pipeline.

**Task** – I needed to reduce query latency so that feature extraction could keep up with real‑time model updates, without compromising data integrity or scaling cost.

**Action** – First, I ran `ANALYZE` and inspected the planner’s estimate: the cardinality of “product_id” was wildly underestimated because many products had zero clicks. I created a multi‑column composite index on `(user_id, product_id)` and added a partial index only for rows where `click_count > 0`. Then I updated the statistics with `ALTER TABLE … ALTER COLUMN … SET STATISTICS 1000` to give the planner more accurate cardinality data. Finally, I rewrote the join using a hash‑join hint and scheduled nightly VACUUM FULL on the click log table.

**Result** – Query time dropped from ~4 s to under 200 ms for 90th‑percentile lookups, slashing feature extraction time by 85%. The model training pipeline now runs twice as fast, and I learned that accurate cardinality statistics are critical for planner decisions—especially when many rows are sparse or highly skewed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
