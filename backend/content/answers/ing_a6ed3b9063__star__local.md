---
qid: ing_a6ed3b9063__star__local
question: 'Explain: 🗄️ Database Fundamentals — Awesome System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 300
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:43-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we had to build an ML pipeline that scored credit risk in real time. The existing data lake was a flat CSV dump; latency on model inference hit 350 ms, far above the 100 ms SLA.

**Task:**  
I needed to design a database layer that would supply feature vectors instantly while still supporting batch training updates and compliance audits.

**Action:**  
I chose PostgreSQL for ACID guarantees, partitioned tables by customer region, and added a materialized view per model version. I implemented row‑level security so only the inference service could read live data. For low‑latency reads I used Redis caching with a write‑through policy: every feature update in Postgres triggered a Pub/Sub event that refreshed the cache. To keep training data fresh, I set up an Airflow DAG to snapshot the cached features into S3 nightly and reload them into the training cluster via Spark.

**Result:**  
Inference latency dropped from 350 ms to 45 ms, meeting the SLA. Training throughput increased by 4× due to the efficient cache‑to‑storage pipeline. I learned that a hybrid SQL/NoSQL approach balances consistency with speed, and that caching must be tightly coupled with change data capture for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
