---
qid: ing_211c716c7a__star__local
question: How would you shard the data if you were working with SQL DB?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 350
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:46-05:00'
sources: []
---

**Situation:**  
During a migration of our recommendation engine to a new micro‑service, we hit a bottleneck: the user‑interaction table in PostgreSQL held 200 M rows and each training run was timing out because the query planner kept scanning the whole table.

**Task:**  
I had to shard the data across multiple database instances so that the ML pipeline could pull only the relevant slice of interactions for each model version, without sacrificing consistency or introducing too much operational overhead.

**Action:**  
I chose a hash‑based sharding scheme on `user_id` because it evenly distributed users and kept all interactions for a single user together. I created four read replicas, each hosting 25 % of the hash space, and updated our data ingestion job to write to the appropriate replica using a lightweight lookup table that maps hash ranges to hostnames. For training, my script first queried the metadata service to find which shard contained the target cohort, then ran a bounded window query (`LIMIT 10M OFFSET …`) to fetch only the most recent interactions per user. I also added a nightly materialized view on each shard to pre‑aggregate interaction counts, cutting the query time from 15 min to under 30 s.

**Result:**  
The training pipeline now completes in ~45 minutes instead of hours, and we can run daily retraining without impacting production traffic. The sharding also reduced our read load per replica by ~75 %, proving the approach scalable for future growth. I learned that careful hash partitioning combined with targeted pre‑aggregation can turn a monolithic data lake into a lean, high‑throughput training feed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
