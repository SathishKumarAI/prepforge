---
qid: ing_593382ebf7__aws__local
question: 'Explain: Stage 2: Separate Database (10K-100K users)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 600
total_tokens: 836
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:42-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a product that needed a recommendation engine for 15 K active users. The engineering team was using the same relational DB that stored user profiles and purchase history, which caused contention during nightly model training. My goal was to isolate ML data in a separate database while keeping latency <20 ms for read‑writes.

**Action**  
I scoped requirements: *write throughput 2 k ops/s*, *read latency 10 ms*, *data freshness 5 min*. I chose **Amazon Aurora Serverless v2 (PostgreSQL)** for the ML dataset because it auto‑scales, supports point‑in‑time recovery, and keeps a copy of the data in memory.  
I built an incremental ETL with **AWS Glue** that pulls delta changes from the main RDS via CDC, transforms them into a denormalized schema, and writes to Aurora. For real‑time updates I added a **Kinesis Data Stream** feeding Lambda functions that upsert into Aurora.  

To keep costs low, I enabled **Aurora Serverless’ pay‑per‑second** model; the cluster stayed idle 70 % of the day, saving ~35 %. The Glue job completed in under 4 min and was scheduled to run every 5 min, keeping data freshness within requirements.

**Result**  
After migration, model training time dropped from 2 h to 15 min (95 % reduction). Production latency for recommendation queries fell from 35 ms to 12 ms. Revenue grew by 18 % in the first quarter due to more accurate recommendations and fewer DB throttles.

---

**Leadership Principles Highlighted**

- **Ownership** – I identified bottlenecks, proposed a new architecture, and drove it through design, implementation, and monitoring.
- **Dive Deep** – I evaluated multiple database options, benchmarked latency, throughput, and cost, and chose Aurora Serverless after rigorous testing.  
- **Bias for Action** – The solution was delivered within 6 weeks, ahead of the 3‑month roadmap.

---

### What a Bar‑raiser Listens For

| Signal | Why It Matters |
|--------|----------------|
| Quantified impact (latency drop, cost savings) | Shows ownership and business value. |
| Clear trade‑off discussion (Aurora vs DynamoDB vs RDS) | Demonstrates depth & technical judgment. |
| Learning from a failed pilot (e.g., initial Glue job timeouts) | Indicates resilience and continuous improvement. |

By anchoring the answer in concrete metrics, AWS services, and Amazon’s Leadership Principles, I demonstrate both strategic thinking and hands‑on execution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
