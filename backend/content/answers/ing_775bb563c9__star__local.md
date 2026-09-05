---
qid: ing_775bb563c9__star__local
question: 'Explain: Unique, Primary, and Clustered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 378
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:38-05:00'
sources: []
---

**Situation:**  
While building a recommendation engine at my last company, we had to ingest and serve user interaction logs in real time. The raw log table grew to 50 GB per day and our batch training jobs were hitting the database for feature extraction every hour.

**Task:**  
I needed to redesign the schema so that feature queries could run under 200 ms while still supporting high write throughput, without changing the ML pipeline code.

**Action:**  
I introduced a composite primary key on `(user_id, event_timestamp)` to enforce uniqueness and guarantee fast lookups per user. Because most training jobs only needed the latest interactions, I turned that column into a clustered index so rows were physically ordered by `event_timestamp`. For fast filtering on event type (e.g., “click”, “purchase”), I added a unique non‑clustered index on `(user_id, event_type)` to avoid duplicate records per user–type pair. Finally, I created a covering non‑clustered index on `(user_id, feature_value)` so the training job could read all needed columns in one seek.

**Result:**  
Query latency dropped from 1.2 s to 0.15 s (an 88% reduction). Write throughput increased by ~30% because the clustered index minimized page splits. The ML model training time shrank from 45 min to 20 min per batch, enabling a near‑real‑time recommendation loop. I learned that choosing the right primary/clustered combination can dramatically shift performance for data‑intensive ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
