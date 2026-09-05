---
qid: vq_de6d158391__star__local
question: What are the different types of Restricted Joins?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 384
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:23:30-05:00'
sources: []
---

**Situation** – While migrating our customer analytics pipeline from on‑prem Hadoop to Snowflake, we noticed that the clickstream table had millions of records per day, but only a handful matched the active users in the CRM dimension. The downstream dashboards were timing out because every user row was being joined with all clicks.

**Task** – I needed to rewrite the join logic so that it only produced rows for users who actually had activity, without blowing up compute costs or missing late‑arriving data.

**Action** – First, I replaced the classic inner join with a **semi‑join** (SELECT … WHERE EXISTS) to filter the CRM table down to those with matching click IDs. Next, I used an **anti‑join** to flag users who had no clicks at all for a rolling 30‑day window—this fed into our churn model. For range‑based filtering (e.g., events within ±5 minutes of a session start), I implemented a **range join** using Snowflake’s `JOIN … ON` with inequality conditions and leveraged the clustering key on timestamp to keep the scan fast. Finally, I wrapped all joins in a single query that used `LEFT JOIN LATERAL` only where necessary to preserve nullability for optional dimensions.

**Result** – The new pipeline cut runtime from 12 minutes to under 2 minutes per day (≈80% CPU savings). Dashboard latency dropped below 30 seconds, and we gained accurate churn signals. I learned that choosing the right restricted join—semi, anti, or range—can drastically reduce data movement while keeping semantics clear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
