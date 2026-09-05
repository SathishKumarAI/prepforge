---
qid: vq_948ed462ef__star__local
question: What is a Snowflake Schema?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 285
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:16-05:00'
sources: []
---

**Situation** – At my previous firm we were migrating the sales analytics pipeline from an on‑prem data mart into Snowflake. The legacy system stored customer, product, and region dimensions in a flat star schema, but our reports were getting slower as the volume grew to 3 M rows per day.

**Task** – I was tasked with redesigning the dimensional model to reduce storage costs and improve query performance while keeping the BI layer unchanged.

**Action** – I applied a snowflake schema by normalizing each dimension into separate fact tables: `Customer`, `Product`, and `Region` were split into hierarchical sub‑tables (`Country → State → City`, `Category → Subcategory → SKU`). In Snowflake, I used clustering keys on the surrogate keys and materialized views to pre‑join the most common slices. I also leveraged micro‑partition pruning and created a view that reassembled the flattened schema for legacy dashboards.

**Result** – The query latency dropped from 12 seconds to under 2 seconds for our top KPI reports, and storage costs fell by 28 %. I learned how Snowflake’s automatic clustering can complement a snowflake design, turning normalization into a performance win rather than a maintenance burden.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
