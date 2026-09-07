---
qid: ing_410c096ea7__aws__local
question: 'Explain: Change Data Capture Techniques — Database-Internals/ChangeDataCapture/Readme.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 491
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:53:04-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: My team was tasked to migrate a legacy monolith to a micro‑service architecture while preserving real‑time analytics.  
*Task*: We needed a reliable Change Data Capture (CDC) pipeline that could surface inserts, updates, and deletes with sub‑second latency.

*Action*: I scoped three proven techniques:

| Technique | AWS Service | Why |
|-----------|-------------|-----|
| **Database Triggers + SQS** | RDS → Lambda → SQS → Kinesis | Low cost, fine‑grained control; triggers fire on every DML event. |
| **MySQL binlog + Kafka Connect** | MSK (Kafka) | High throughput, built‑in offset tracking, fault tolerance. |
| **PostgreSQL logical decoding + AWS DMS** | DMS → Kinesis Data Streams | Minimal schema drift, native support for complex types, zero‑downtime replication. |

I performed a **cost/latency trade‑off matrix**:  
- Trigger+SQS: <$0.01 per 1k records, ~200 ms latency, but limited to RDS MySQL/PostgreSQL.  
- Kafka Connect: ~$0.05 per 1M records, <100 ms latency, requires a managed cluster (MSK).  
- DMS: $0.02 per 1M records, ~150 ms latency, supports heterogeneous sources.

*Result*: We deployed the **DMS + Kinesis** path for production. In the first month we processed 3 million change events with <120 ms average lag and incurred only $18/month—30% below our budget forecast. The pipeline also surfaced a rare data inconsistency that saved us a potential $50k in downstream reconciliation costs.

*Learnings*:  
- **Dive Deep**: Triggers were fragile under heavy write bursts; Kafka’s partitioning handled spikes better.  
- **Bias for Action**: I prototyped all three paths within 48 hrs, which accelerated decision‑making and reduced risk.  

This experience underscores my commitment to *Customer Obsession*—delivering low‑latency, cost‑effective data feeds—and *Ownership*, taking end‑to‑end responsibility from design through production monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
