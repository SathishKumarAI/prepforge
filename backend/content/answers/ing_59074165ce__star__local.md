---
qid: ing_59074165ce__star__local
question: 'Explain: 4.1 Relational Database for Structured Data'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 346
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:25:38-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with building a recommendation engine for an e‑commerce platform that had 12 million users and 3 million products. The clickstream data were in JSON logs, but the user profiles, purchase history, and product attributes lived in a legacy relational database (PostgreSQL). **Task** – I needed to design a data pipeline that could efficiently feed structured features into my ML model while keeping latency under 200 ms for real‑time inference. **Action** – I first profiled the SQL queries and discovered N+1 joins were killing performance. I redesigned the schema: added composite indexes on `(user_id, product_id)` and materialized a nightly “feature cube” table that pre‑aggregated purchase counts, recency scores, and category affinities. For real‑time lookups I used PostgreSQL’s `WITH` clause to pull only relevant rows, then pushed them into a Redis cache keyed by user ID for sub‑millisecond access. The pipeline was orchestrated with Airflow, and I added a CI/CD step that ran SQL linting and unit tests on the schema changes. **Result** – Feature extraction time dropped from 1.2 s to 120 ms, increasing recommendation throughput by 4×. Accuracy improved by 3% in AUC because richer, up‑to‑date features were available. I learned that thoughtful schema design and caching are as critical to ML performance as model choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
