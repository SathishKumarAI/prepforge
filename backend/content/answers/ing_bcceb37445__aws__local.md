---
qid: ing_bcceb37445__aws__local
question: 'Explain: Each of them have their pros and — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 587
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:30:24-05:00'
sources: []
---

**Situation & Task (S)**  
During a recent product‑launch, our ML pipeline had to ingest > 10 TB of streaming telemetry while guaranteeing < 2 s latency for inference and > 99.9 % uptime. I was asked to choose the database layer that would support feature engineering, model training, and online serving.

**Action (A)**  
I mapped each candidate—RDS/MySQL, DynamoDB, Aurora Serverless, and Amazon Timestream—to our constraints:

| Database | Pros | Cons | Fit |
|----------|------|------|-----|
| **DynamoDB** | Unlimited horizontal scale; single‑digit ms latency; built‑in auto‑sharding | Strong consistency optional; complex secondary indexes cost extra | **Online inference** – low‑latency feature store |
| **Aurora Serverless** | SQL compatibility; automated scaling; transactional guarantees | Cold start > 1 s; higher per‑query cost | **Batch training data** – relational joins for feature pipelines |
| **Timestream** | Time‑series optimized compression; automatic tiering | Limited query language; no cross‑region replication yet | **Telemetry ingestion** – high‑write throughput |
| **RDS MySQL** | Mature tooling; ACID compliance | Vertical scaling limits; 1 s cold start | Not suitable for our scale |

I proposed a hybrid architecture:  
- **DynamoDB** as the real‑time feature store, backed by a **Kinesis Data Stream** that feeds into an **S3 lake**.  
- **Aurora Serverless** for nightly ETL jobs that join S3 data with DynamoDB snapshots to generate training sets.  
- **Timestream** for raw ingestion, auto‑tiering cold data to Glacier.

This design delivered 99.95 % availability, reduced inference latency from 15 ms to < 2 ms, and cut operational cost by ~30 % versus a monolithic RDS solution.

**Result (R)**  
- **Customer Obsession:** End users experienced near‑instant predictions.  
- **Ownership & Dive Deep:** I owned the trade‑off analysis, quantified latency, cost, and scalability, and iterated on the schema after observing production spikes.  
- **Learning from Failure:** A pilot with only DynamoDB led to 3 % data loss during a burst; we added a read‑replica layer and automated backup scripts.

*Key take‑away:* choose databases by aligning their strengths with specific workload patterns—real‑time, batch, or time‑series—and leverage AWS services (Kinesis, S3, Aurora) to stitch them into an end‑to‑end, cost‑effective ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
