---
qid: ing_e09ea73dcf__star__local
question: What Is Cardinality in Data Modeling? — What Is Cardinality in a Database?
  - SolarWinds Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 339
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:01-05:00'
sources: []
---

**Situation** – In my last role I was building a recommendation engine for an e‑commerce platform that had over 12 million users and 3 billion product interactions stored in a relational data warehouse. The nightly ETL job started to stall because the cardinality of the user‑item interaction table exploded.

**Task** – My goal was to reduce query time for the feature extraction pipeline by 40% while keeping all necessary information for training the model intact.

**Action** – I first analysed the cardinality of each dimension: users (12M), items (450K), timestamps (3B rows). Using Snowflake’s clustering keys, I created a composite key on `(user_id, item_id)` to enforce high cardinality partitioning. I also applied column pruning and materialised views for the most frequent user‑item pairs (top 1% by interaction count). To handle low‑cardinality columns like `device_type`, I denormalised them into a lookup table, reducing joins during extraction. Finally, I tuned the warehouse size to match peak load and added caching for the derived feature tables.

**Result** – The ETL runtime dropped from 4 hours to 2 30 minutes, a 42% improvement. Accuracy of the recommendation model stayed the same (precision‑@10: 0.18). I learned that understanding cardinality lets you partition and index strategically, turning raw data volume into manageable features for ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
