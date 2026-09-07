---
qid: ing_1602f8464a__aws__local
question: 'Explain: Query a document by ID — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 468
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:03-05:00'
sources: []
---

**Situation / Task**  
I was tasked to migrate an existing “query‑by‑ID” workload from Cassandra to MongoDB for a fintech app that needed faster read latency and richer analytics. The goal was to cut the average query time from **120 ms** (Cassandra) to under **30 ms** while keeping costs < 20% higher.

**Action**  
1. **Requirements & Design** – I mapped the use case to *event‑driven* reads, so I chose **Amazon DocumentDB (MongoDB‑compatible)** for its managed schema and automatic sharding.  
2. **Indexing Strategy** – Created a compound index on `{_id: 1}` and used the `readConcern` “local” with `maxStalenessSeconds=0` to guarantee strong consistency.  
3. **Scalability & Availability** – Leveraged DocumentDB’s multi‑AZ replication (5 replicas) for HA, and used **AWS Aurora Serverless v2** as a fallback cache for hot documents.  
4. **Cost Control** – Implemented auto‑scaling on compute nodes and reserved instance pricing, reducing monthly spend from **$3,200** to **$1,800**.

**Result**  
- Query latency dropped to **22 ms** (≈ 82% improvement).  
- Throughput increased from 4,500 QPS to 12,000 QPS.  
- Operational overhead decreased by 30 % due to managed backups and patching.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered a faster, more reliable API for end‑users.  
- **Ownership & Dive Deep** – I owned the migration end‑to‑end, digging into index tuning and replication nuances.  

### Bar‑raiser Expectations
- Quantified impact (latency, QPS, cost).  
- Demonstrated deep technical knowledge of AWS services and trade‑offs.  
- Showed learning: early trials with Cassandra’s read repair caused staleness; switching to DocumentDB resolved it while preserving ACID guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
