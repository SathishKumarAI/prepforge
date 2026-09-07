---
qid: ing_c31f8bef44__aws__local
question: 'Explain: Isolation Levels — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 440
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:44:12-05:00'
sources: []
---

**Situation & Task**  
While leading the ML model registry for a global recommendation engine, I discovered that concurrent training jobs were corrupting the metadata table—leading to stale feature versions and downstream latency spikes. The requirement was to introduce ACID‑compliant isolation without sacrificing the 10 ms SLA of the inference API.

**Action**  
I scoped the problem with *Dive Deep* by instrumenting the DynamoDB streams, discovering that **Read Committed** level caused phantom reads during batch updates. I designed a solution around **Amazon Aurora Serverless v2** (PostgreSQL) for the metadata store, enabling **Snapshot Isolation** and row‑level locks.  
- **Schema**: `features(id PK, version, schema_hash, created_at)`; indexes on `(id, version DESC)`.  
- **Transactions**: Wrap each feature upload in a single SQL transaction (`BEGIN … COMMIT`).  
- **Cache**: Use *Amazon ElastiCache for Redis* to store the latest feature vector pointers, refreshed via Aurora’s `NOTIFY`/`LISTEN`.  
- **Cost & Scale**: Aurora Serverless auto‑scales from 2 ACUs to 512 ACUs during peak training bursts (≈ 15 k TPS) while remaining < $0.12/hr in idle mode. Redis cache keeps read latency < 5 ms even under 100 k concurrent inference requests.

**Result**  
After deployment, we eliminated metadata corruption incidents by **99.9%**, cut inference cache miss rates from 8% to 1%, and maintained the 10 ms SLA during peak load—saving ~30 % in compute costs versus a legacy RDS instance.

**Reflection**  
I learned that *Ownership* means iterating until the system behaves predictably under edge conditions. Future iterations will benchmark alternative isolation levels (Serializable) to assess any hidden contention, ensuring we keep delivering results at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
