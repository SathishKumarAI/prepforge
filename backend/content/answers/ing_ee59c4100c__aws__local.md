---
qid: ing_ee59c4100c__aws__local
question: 'Explain: Data storage — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 739
total_tokens: 972
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:01-05:00'
sources: []
---

**Context – The problem**

A startup wants a “cheat‑sheet” service that lets users upload, version, and query machine‑learning datasets at scale. I led the design of the data‑storage layer for the first prototype.

---

### **S – Situation**
We had to support 5 M+ users uploading ~50 TB of raw CSV/Parquet files while keeping latency < 200 ms for metadata lookups and ensuring cost ≤ $0.02 per GB/month.

### **T – Task**
Architect a storage solution that is highly available, scalable, and cheap, with auditability and versioning.

### **A – Action**

| Requirement | AWS Service(s) | Design Reasoning |
|-------------|----------------|------------------|
| **Durable object store** | **Amazon S3 (Standard + Intelligent‑Tiering)** | 99.999999999% durability; auto‑replication across AZs. Intelligent‑Tiering reduces cost for infrequently accessed “archive” datasets. |
| **Metadata & version control** | **Amazon DynamoDB (global tables)** | Sub‑ms reads/writes, automatic multi‑region replication for latency and fail‑over. Stores dataset IDs, owner, tags, checksum, and S3 URI. |
| **Querying on the fly** | **AWS Glue Data Catalog + Athena** | Schema inference, serverless SQL queries without moving data; pay per query. |
| **Audit & compliance** | **CloudTrail + S3 Access Logs + DynamoDB Streams** | Full audit trail of uploads, deletions, and access patterns. Streams trigger Lambda to enforce policy. |
| **Cost control** | **S3 Lifecycle + Glacier Deep Archive** | Move 70% of “cold” data to Glacier at $0.004/GB/month after 30 days. |
| **Scalability & availability** | **Lambda (for ingestion pipeline)** + **API Gateway** | Auto‑scales, zero‑ops; API Gateway throttles to protect downstream services. |

*Trade‑offs:* We chose S3 over EFS for cost and object semantics; DynamoDB over RDS for low‑latency metadata queries. The only potential bottleneck is Glue jobs on very large partitions – mitigated by partition pruning.

### **R – Result**

- Achieved **99.999% uptime** in 12 months, with no major outages.
- Reduced storage cost to **$0.015/GB/month**, saving ~30 % vs the initial estimate.
- Metadata query latency averaged **45 ms** (≤ 200 ms target).
- In a load test of 10k concurrent uploads, Lambda handled peak traffic without throttling.

### **Reflection**

I took full ownership: drafted the architecture diagram, wrote cost‑model scripts, and presented to executives. I dove deep into S3’s request pricing to spot a hidden $0.001/1 000 requests charge that could have inflated costs by 20 %. The biggest learning was that DynamoDB Streams + Lambda can replace manual sync jobs, cutting dev effort by 40 % and reducing data drift risk.

**Leadership Principles Highlighted:**  
- **Ownership** – drove the project from concept to production.  
- **Dive Deep** – quantified request costs, latency, and cost per GB.  
- **Deliver Results** – met uptime, latency, and budget goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
