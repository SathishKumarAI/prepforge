---
qid: ing_1b807ff9e9__aws__local
question: 'Explain: Audit and Compliance — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 717
total_tokens: 952
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:28:25-05:00'
sources: []
---

**Situation & Task**  
While leading the data‑engineering team at a fintech startup, we were required by regulators to provide an auditable trail of every change to customer‑profile tables in our PostgreSQL warehouse. The goal was to deliver a Change Data Capture (CDC) pipeline that could ingest 200 k rows/sec, store lineage for 90 days, and expose it via API for audit reports—all within our $50K/month budget.

**Action**  
1. **Architecture** – Built an *event‑driven* CDC system using:  
   - **Amazon RDS PostgreSQL** with logical replication slots to stream changes.  
   - **AWS Database Migration Service (DMS)** as the source connector, pushing WAL records to **Amazon Kinesis Data Streams**.  
   - A **Kinesis Producer Library (KPL)** on our application servers to batch and compress events, reducing inbound payload by 60 %.  
   - **Lambda** functions triggered per shard to transform CDC records into JSON logs and write them to **S3 Glacier Deep Archive** for long‑term retention.  
   - A **Glue** job nightly aggregates logs into an **Amazon Athena** catalog; the audit API queries Athena via **AWS AppSync** (GraphQL) for real‑time reporting.

2. **Scalability & Availability** – Kinesis shards auto‑scaling handled peak bursts; DMS replicated across AZs to avoid single points of failure.  
3. **Cost Optimization** – Used S3 Glacier Deep Archive (≈$0.004/GB/month) and retained only 90 days, keeping storage under $1K/month.

4. **Compliance Checks** – Implemented automated Lambda validation that flagged any missing sequence numbers or gaps; the pipeline logged failures to CloudWatch and sent alerts via SNS.

5. **Learning from Failure** – Early tests showed ~30 % of WAL records were lost during a DMS outage. We introduced *retry logic* in Kinesis Producer and added a “dead‑letter” queue to capture dropped events, which reduced loss to <0.01 %.

**Result**  
- Achieved **99.999% data durability** with zero audit gaps for 12 months.  
- Reduced audit report generation time from 4 h to **15 min** (a 94 % speedup).  
- Cut compliance costs by **40 %** versus a traditional on‑prem CDC solution.

---

### Leadership Principles Highlighted
- **Ownership** – Took end‑to‑end responsibility for the audit system, from design through incident response.  
- **Dive Deep & Deliver Results** – Analyzed replication logs, tuned Kinesis batch sizes, and quantified performance gains, turning a regulatory requirement into a competitive advantage.

---

### What a Bar‑Raiser Listens For
| Signal | Why It Matters |
|--------|----------------|
| Clear ownership narrative (S‑T‑A) | Shows initiative & accountability |
| Quantified impact (metrics, cost savings) | Demonstrates business value |
| Deep technical dive (service choices, trade‑offs) | Validates problem‑solving depth |
| Failure learning loop | Indicates resilience and continuous improvement |

This blend of customer‑centric data fidelity, scalable AWS services, and measurable ROI is exactly the type of solution that meets Amazon’s high standards for compliance systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
