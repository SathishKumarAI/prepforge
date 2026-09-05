---
qid: ing_97b5ed0dd3__star__local
question: 'Explain: Characteristic #1: It doesn’t share database tables with another
  service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 312
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:01-05:00'
sources: []
---

**Situation:**  
At my previous company we were rolling out an anomaly‑detection model for the payment gateway. The production environment already had a monolithic legacy system that stored all transaction logs in a shared PostgreSQL database used by multiple services.

**Task:**  
I needed to deploy the new ML service so it could ingest transaction data without risking accidental writes or schema changes that would break the other services. The goal was to keep the model isolated while still feeding it real‑time events.

**Action:**  
I designed a dedicated “analytics” database cluster with its own tables (`transactions_raw`, `anomaly_scores`). Using Kafka, I set up a producer in the payment service to stream transaction records into the analytics topic. The ML service consumed that topic, performed inference locally, and wrote results back to its own table via an async bulk writer. This ensured zero coupling at the schema level; no tables were shared, and each service managed its own migrations.

**Result:**  
The model processed 150k transactions per hour with <2 ms latency, while the legacy services remained unaffected by any schema changes. After deployment, we saw a 25% reduction in false positives on fraud alerts. I learned that database isolation is critical for rapid iteration and safe scaling of ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
