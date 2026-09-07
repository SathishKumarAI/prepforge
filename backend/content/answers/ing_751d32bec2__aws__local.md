---
qid: ing_751d32bec2__aws__local
question: 'Explain: Data Collection: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 456
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:50:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we collect only what drives product value; *Ownership* – I own the pipeline from ingestion to model input.

**Situation & Task**  
In 2023, my team was asked to support a real‑time recommendation engine for a video platform. The requirement: feed user activity into ML models with < 1 s latency while keeping batch historical data for retraining.

**Action (Design)**  
I architected two parallel pipelines:

| Pipeline | AWS Service(s) | Use Case | Latency | Cost |
|----------|----------------|----------|---------|------|
| **Stream** | Kinesis Data Streams → Lambda → S3 + DynamoDB | Real‑time click events → immediate feature updates | < 500 ms | $0.015/10M records |
| **Batch** | S3 Event Trigger → Glue ETL → Redshift | Daily aggregation for model retraining | 4–6 hrs | $0.25/hour |

*Key differences highlighted:*  
- **Throughput vs Latency:** Streams handle high‑velocity, low‑delay ingestion; Batch aggregates large volumes offline.  
- **Statefulness:** Stream uses Kinesis shards (partitioned) to preserve order per user; Batch writes idempotently to Redshift.  
- **Cost & Scaling:** Streams auto‑scales with shard count; Batch scales via Glue workers.

**Result**  
Latency dropped from 4 s to < 500 ms, increasing click‑through rate by **12%** in the next quarter. Cost savings of **$18k/month** were realized by moving non‑critical data to batch and optimizing shard allocation.

**Learning & Bar‑raiser Insight**  
I *dived deep* into Kinesis metrics (put record latency, shard utilization) to avoid over‑provisioning. The bar‑raiser expects evidence that I own the trade‑off space: balancing cost, latency, and reliability while delivering measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
