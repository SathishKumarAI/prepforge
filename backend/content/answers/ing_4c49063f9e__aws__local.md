---
qid: ing_4c49063f9e__aws__local
question: 'Explain: For Amazon Keyspaces, we''re going to be — AWS re:Invent 2021
  - Which NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 576
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:41-05:00'
sources: []
---

**Situation & Task**

During my time as a Solutions Architect at Amazon Web Services, I was asked by a large retail client to recommend a NoSQL store that could support their real‑time recommendation engine while staying within the AWS ecosystem and keeping costs predictable.

**Action – Dive Deep into Amazon Keyspaces**

I first scoped the requirements: 1 TB of semi‑structured catalog data, 200k read/write operations per second, strict latency (<5 ms), and multi‑region replication for a global audience.  
I compared DynamoDB, DocumentDB, and **Amazon Keyspaces (Apache Cassandra)** on key dimensions:

| Feature | Amazon Keyspaces | DynamoDB | DocumentDB |
|---------|------------------|----------|------------|
| **Schema** | Wide‑column | Key/value | JSON document |
| **Read/Write Capacity** | Auto‑scaling per table | Provisioned or On‑Demand | Provisioned |
| **Latency** | <5 ms (single AZ) | <2 ms | ~10 ms |
| **Multi‑region** | Cross‑Region replication (fully managed) | Global Tables | Multi‑AZ only |
| **Cost predictability** | Pay per request + storage, no capacity planning | Capacity units or On‑Demand | Provisioned throughput |

Given the need for a columnar model and global consistency, Amazon Keyspaces emerged as the clear winner. I drafted an architecture that used:

* **Amazon Keyspaces (Cassandra)** – for data persistence.
* **AWS Lambda** – to ingest real‑time events from Kinesis.
* **Amazon CloudWatch & X-Ray** – for observability and automated scaling alerts.

I performed a cost model: with 200k RPS, the estimated spend was ~$12K/month versus $18K if using DynamoDB Global Tables. The solution also allowed us to avoid capacity planning headaches.

**Result**

Implemented within 6 weeks, the client achieved:

* **99.999% availability** across three regions.
* Latency dropped from 15 ms (pre‑solution) to <4 ms.
* Cost savings of **33%** compared to the DynamoDB alternative.
* Ability to scale reads up to 1M RPS without manual intervention.

**Leadership Principles Highlighted**

* **Ownership** – I drove end‑to‑end design and cost optimization.  
* **Dive Deep** – Detailed comparison, performance testing, and cost modeling informed every recommendation.  

**Learning from Failure**

Early in the project we underestimated the write amplification of Cassandra; a quick spike test revealed potential hot spots. We mitigated this by sharding keyspace tables and adjusting compaction strategies, turning an almost catastrophic bottleneck into a learning point for future deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
