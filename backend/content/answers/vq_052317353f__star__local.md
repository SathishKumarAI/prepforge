---
qid: vq_052317353f__star__local
question: What is a Star Schema?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 278
total_tokens: 510
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:46:10-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the analytics pipeline for our retail client’s sales reporting system. Their existing data lake had ad‑hoc tables that caused slow query times and inconsistent metrics across departments.

**Task** – My goal was to build a clean, performant schema that would allow analysts to slice revenue by product, store, time, and promotion in under two seconds while keeping the ETL process maintainable.

**Action** – I chose a star schema: a central fact table (sales) linked via foreign keys to four dimension tables—Product, Store, Date, and Promotion. Using Snowflake, I created clustering keys on the fact table’s date_id and store_id columns, and materialized views for common aggregates like monthly revenue per region. I also implemented slowly changing dimensions type 2 for product attributes so historical pricing could be tracked without duplicating rows.

**Result** – Query performance improved from an average of 12 seconds to 1.3 seconds—a 90% reduction—while the data model’s clarity cut the time analysts spent reconciling metrics by 70%. I learned that a well‑structured star schema not only speeds queries but also makes downstream analytics far more reliable and easier to maintain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
