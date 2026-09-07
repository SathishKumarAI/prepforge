---
qid: vq_35a2f8b828__aws__local
question: Do we need exactly-once processing guarantees?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 517
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:46:42-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was building a real‑time analytics pipeline for an e‑commerce platform that streamed click events into a data lake on S3 and fed downstream dashboards. The business required *exactly‑once* semantics because even a single duplicate sale record could inflate revenue figures by 2–3 %.  

**Action – Technical Design**  
I scoped the problem, clarified that “exactly‑once” meant *idempotent writes to the data store* rather than guaranteeing no duplicates in transit. I designed:  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Ingest | **Amazon Kinesis Data Streams** (shard‑level checkpointing) | Guarantees at‑least‑once delivery and scales horizontally |
| Processing | **AWS Lambda** with **DynamoDB** as a de‑duplication store (partition key = eventId, TTL 24 h) | Idempotent writes; Lambda’s retry policy ensures no loss |
| Storage | **S3 + Athena** for long‑term analytics | Cost‑effective, highly durable |
| Monitoring | **CloudWatch Alarms** on DLQ metrics | Detect processing failures quickly |

I implemented a *watermark* in Lambda that writes to DynamoDB only if the eventId is new. Duplicate events hit the same key and are ignored—achieving effectively exactly‑once at the data lake level while keeping cost low (≈$0.02 per 1 M records).  

**Result**  
After deployment, dashboard accuracy improved by **99.999%**, eliminating revenue overestimates that had previously cost the company ~$12K/month. The system handled 200k events/s with <2 s latency and stayed under $5K/month.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered precise metrics critical for executive decision‑making.  
- **Ownership & Dive Deep** – Took full responsibility for end‑to‑end reliability, dissecting each failure mode and iterating until the SLA was met.  

Bar‑raisers expect: ownership of impact, deep technical trade‑offs (e.g., idempotency vs. throughput), quantified results, and lessons learned from early duplicate‑data failures that led to the final design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
