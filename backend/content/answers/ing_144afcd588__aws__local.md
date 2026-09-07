---
qid: ing_144afcd588__aws__local
question: 'Explain: 4 System Design - Types of Databases — 15 Types of Databases and
  When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 684
total_tokens: 927
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:58-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with redesigning the data layer for a global e‑commerce recommendation engine that served millions of users daily. The system had to ingest user clicks, transaction logs, and product metadata, then expose real‑time feature vectors to an ML model while keeping latency < 50 ms.

**Action**  
I first **dive deep** into the data characteristics: high write throughput (≈ 10k ops/s), strict consistency for personalization, and heavy analytical reads. I mapped these needs onto a *catalog of 15 database types*:

| Category | Typical Use‑Case | Example Services |
|----------|------------------|-----------------|
| **Relational** | ACID transactions, joins | Amazon RDS, Aurora |
| **NewSQL** | Horizontal scale + SQL | AWS Timestream (time series) |
| **Document** | Flexible schemas | DynamoDB, DocumentDB |
| **Key‑Value** | Ultra‑low latency lookups | ElastiCache Redis, DynamoDB |
| **Graph** | Relationship traversal | Neptune |
| **Column‑Family** | Wide rows & analytics | Bigtable (GCP) / DynamoDB |
| **Time‑Series** | Sensor/event streams | Timestream, InfluxDB |
| **Search** | Full‑text + faceted search | OpenSearch Service |
| **Object Store** | Immutable blobs | S3 |
| **Queue** | Decoupled ingest | SQS, Kinesis |
| **Stream** | Real‑time analytics | Kafka (MSK), Kinesis Data Streams |
| **Cache** | Hot data | ElastiCache |
| **Data Lake** | Raw & curated data | Lake Formation |
| **NoSQL** | High write, flexible schema | DynamoDB |
| **Distributed Ledger** | Immutable audit trail | Amazon QLDB |

For the recommendation engine I chose:

1. **DynamoDB** (key‑value + document) for fast user profile lookups.  
2. **Amazon Kinesis Data Streams** to buffer click streams and feed a Lambda pipeline that writes to an **Elasticsearch domain** for quick feature retrieval.  
3. **Aurora Serverless** for transactional order data that the model needs for ground truth.

I modeled the system with **AWS Well‑Architected** lenses: *Cost Optimization* (using on‑demand vs. reserved capacity), *Reliability* (multi‑AZ deployments, DynamoDB Global Tables), and *Performance Efficiency* (query partitioning, secondary indexes).

**Result**  
Latency dropped from 250 ms to < 30 ms; throughput increased by 4× without a proportional cost increase (overall spend down 18%). The design also reduced operational overhead by automating scaling via Aurora Serverless and Kinesis auto‑scaling.

**Reflection**  
The key takeaway: *Ownership*—I took full responsibility for the data stack, validated each choice against real metrics, and iterated quickly. *Dive Deep* was essential to understand every database’s strengths and trade‑offs. This experience reinforced that a well‑architected data layer is the backbone of any scalable ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
