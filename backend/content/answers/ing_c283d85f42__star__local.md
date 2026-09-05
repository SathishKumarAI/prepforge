---
qid: ing_c283d85f42__star__local
question: 'Explain: System Design Guided Practice - Sponsor — Cloud Spanner Database
  - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 361
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:52-05:00'
sources: []
---

**Situation:**  
I was hired as a senior ML engineer at a fintech startup that needed to onboard a large institutional client. The client required real‑time fraud detection on transaction streams, but their existing database (PostgreSQL) couldn’t scale past 10k TPS and had inconsistent latency during peak hours.

**Task:**  
Design an end‑to‑end system that could ingest millions of transactions per day, keep the model updated in near‑real time, and guarantee ACID compliance for audit logs—all while staying within a $200K annual cloud budget.

**Action:**  
I chose Google Cloud Spanner as the primary datastore because it offers horizontal scalability, strong consistency, and global replication. I built a Pub/Sub ingestion pipeline that streams raw transactions into Dataflow jobs; each job performs feature engineering and writes to Spanner using batched RPCs to keep write latency under 30 ms. For model training, I used Vertex AI Pipelines to pull data from Spanner, train a Gradient‑Boosted Tree ensemble on BigQuery ML, and push the updated model back into Cloud Storage for serving. The serving layer is built with TensorFlow Serving behind a managed GKE cluster, which queries Spanner only for transaction IDs needing validation.

**Result:**  
The new architecture handled 1 million TPS during peak load with <45 ms latency, reduced audit‑log write failures to <0.01%, and cut operational costs by 35% compared to the legacy setup. I learned how Spanner’s distributed SQL can be a backbone for ML pipelines that require strict consistency without sacrificing scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
