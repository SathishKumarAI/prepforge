---
qid: vq_6fec76cae2__star__local
question: What is a sub-query?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 353
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:03:56-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was working on a customer‑behavior pipeline for an e‑commerce client. Their daily sales data landed in Snowflake, but the reporting team needed a nightly summary of “return rates by product category” that required filtering out items with zero returns before aggregation.

**Task** – I had to design a query that could compute the return rate per category while excluding categories with no returns, all within a single run so the ETL job stayed under its 30‑minute window.

**Action** – I wrote a sub‑query in Snowflake’s ANSI‑SQL dialect. The inner SELECT pulled `product_id`, `category_id`, and counted returns per product, using a `WHERE` clause to keep only rows where `return_flag = TRUE`. That result was then used as a derived table in the outer query, which joined back to the category dimension and calculated the return rate as `(total_returns / total_sales) * 100`. I also added a `QUALIFY COUNT(*) > 0` filter to drop empty categories at the sub‑query level, reducing data volume for the outer aggregation.

**Result** – The nightly job finished 12 minutes faster, dropping the runtime from 30 to 18 minutes. Return-rate reports were accurate and now included only relevant categories, cutting downstream storage by ~15%. I learned how to leverage sub‑queries for efficient pre‑filtering and how Snowflake’s `QUALIFY` clause can replace costly outer joins.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
