---
qid: vq_07d7205f6d__star__local
question: What are the types of dimension tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 411
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:46:48-05:00'
sources: []
---

**Situation** – While revamping the retail analytics platform for a mid‑size e‑commerce client, I noticed that their sales reports were lagging behind real time and were missing key customer insights. The existing data mart had only a flat product dimension; it couldn’t capture evolving attributes or handle complex hierarchies.

**Task** – My goal was to redesign the dimensional model so that the warehouse could support fast slice‑and‑dice queries, track attribute changes over time, and allow for multi‑level segmentation (e.g., store → region → country). I needed to define clear dimension types, implement them in Snowflake, and ensure the ETL process remained efficient.

**Action** – First, I introduced **degenerate dimensions** for transaction IDs that appeared in fact tables but didn’t need a full dimension. Next, I built **factless fact tables** to capture event‑driven data like inventory stock changes. For attributes that evolve (price, SKU status), I created **slowly changing dimensions (SCD)**: type 1 for overwriteable fields and type 2 with surrogate keys for historical tracking. To model product hierarchies, I added a **bridge table** linking products to multiple categories, enabling many‑to‑many relationships without duplicating rows. Finally, I used dbt to materialize these dimensions as incremental models, keeping load times under 30 minutes.

**Result** – After deployment, query performance improved by 45 % on average, and the reporting team could now drill from country down to individual SKU with full historical context—reducing ad‑hoc data pulls by 70 %. I learned that choosing the right dimension type not only simplifies maintenance but also unlocks richer analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
