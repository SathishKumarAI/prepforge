---
qid: ing_53835d20a7__star__local
question: 'Explain: Adding read replicas could also help with'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 336
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:15:05-05:00'
sources: []
---

**Situation**  
In a recommendation engine project at my last company, we were deploying a nightly batch that pulled user interaction data from our PostgreSQL warehouse to train a new collaborative filtering model. By early March the training pipeline stalled because every worker spun up its own heavy query against the master DB; read latency spiked to 350 ms and the job ran 4× slower than the SLA.

**Task**  
I needed to cut read latency by at least 50% so that the nightly job could finish within the 2‑hour window while keeping the write workload on the primary untouched.

**Action**  
I introduced a set of PostgreSQL read replicas and rewrote the data extraction script to route all SELECTs through libpq’s “replication slot” connection string. I also added a simple round‑robin pooler in front of the replicas using PgBouncer, which kept connection churn low. To avoid stale reads during training, I enabled “read committed” isolation on the replicas and scheduled the replica sync to run every 30 seconds.

**Result**  
Read latency dropped from 350 ms to 80 ms per query; the nightly job shaved 1.5 hours off its runtime, hitting the 2‑hour SLA consistently. I learned that even a modest replica set can dramatically improve read throughput for data‑intensive ML pipelines, and that careful connection pooling is key to realizing those gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
