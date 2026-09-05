---
qid: ing_5f4dec1220__star__local
question: 'Explain: Common Mistakes — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 331
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:53-05:00'
sources: []
---

**Situation:**  
At my previous company we built a recommendation engine that served personalized product suggestions to millions of users. The model training pipeline was written in Python and persisted intermediate results into a PostgreSQL database for auditability.

**Task:**  
I had to redesign the data ingestion layer so it could handle high‑throughput streaming updates without sacrificing consistency, while keeping latency under 200 ms per request.

**Action:**  
We first identified that wrapping every model update inside a single ACID transaction was causing lock contention and slow batch writes. I broke the process into two phases: (1) an *event* table with lightweight INSERTs for each user interaction, using `INSERT … ON CONFLICT DO NOTHING` to avoid locks; (2) a nightly aggregation job that runs in a separate transaction to compute feature vectors and update the model parameters in bulk. We also switched from PostgreSQL to a distributed log (Kafka) for event ingestion and used Debezium to capture CDC events into a NoSQL store (Cassandra) for low‑latency reads.

**Result:**  
Transaction lock time dropped from 35 % of total processing to under 5 %. The recommendation latency improved from 350 ms to 120 ms, while the model accuracy remained unchanged. I learned that over‑using ACID guarantees in a data‑pipeline can become a bottleneck; selective transactional boundaries and event‑driven architectures often yield better scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
