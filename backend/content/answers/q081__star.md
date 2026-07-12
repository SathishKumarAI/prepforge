---
qid: q081
question: "What is a data warehouse and how does it differ from a database?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a mid-size e-commerce company, our analysts were running heavy reporting queries directly against the production Postgres database. During flash sales, checkout latency spiked and a couple of dashboards actually took down write performance.

**Task** I had to give the analytics team a proper home for their queries without ever touching the transactional system again.

**Action** I explained the core distinction: our Postgres was an OLTP database tuned for fast row-level reads and writes, while what they needed was a warehouse tuned for scanning millions of rows across historical data. I stood up Snowflake as the warehouse, modeled the data into denormalized fact and dimension tables optimized for aggregation, and built an Airflow pipeline that batch-loaded overnight from Postgres. The warehouse used columnar storage, so a query scanning two years of orders read only the columns it needed instead of full rows.

**Result** Reporting queries that took 40 seconds on Postgres ran in under 3 seconds on Snowflake, and production latency stabilized completely. The big lesson for me was matching the workload to the store: databases serve the app, warehouses serve analysis.
