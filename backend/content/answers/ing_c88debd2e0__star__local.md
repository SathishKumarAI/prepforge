---
qid: ing_c88debd2e0__star__local
question: 'Explain: Primary and Unique Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 380
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:10:38-05:00'
sources: []
---

**Situation**  
At my last company we built a real‑time recommendation engine that pulled user embeddings from a Postgres feature store and served them to a TensorFlow model via an API. Our latency SLA was 50 ms per request, but during peak traffic the query time spiked to 180 ms because lookups on the `user_id` column were scanning the entire table.

**Task**  
I needed to reduce lookup latency to meet the SLA while keeping write throughput high for daily batch ingestion of new user features.

**Action**  
I first profiled the queries and discovered that every request performed a simple equality search on `user_id`. I added a **primary key index** on `(user_id)` to guarantee uniqueness and provide the fastest possible lookup. To avoid accidental duplicate writes during our nightly ETL, I also created a **unique constraint** on `(user_id, feature_version)`, which internally creates another unique index. During the migration I used `pg_repack` to rebuild the indexes in place, minimizing lock time. For read scaling I set up a read‑replica and configured the API to route reads there, ensuring that writes still hit the primary.

**Result**  
Post‑migration average lookup latency dropped from 180 ms to 35 ms, comfortably under our SLA. The unique index prevented duplicate feature rows, eliminating data quality issues that previously caused model drift. I learned that a single well‑placed primary key can solve both performance and correctness problems, while an additional unique index enforces business rules without extra application logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
