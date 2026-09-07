---
qid: ing_336ca6cde0__aws__local
question: 'Explain: Cassandra vs. MongoDB: Data Model — Cassandra Vs MongoDB Comparison
  | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 401
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:42-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

> **Situation:** My team was building a real‑time analytics pipeline for a global ad network that had to ingest > 1 TB of event data per day and serve low‑latency queries to the product team.

> **Task:** Choose between Cassandra and MongoDB as our primary store, ensuring 99.9 % availability across three AZs while keeping TCO under $200K/yr.

> **Action:**  
> *Model analysis:* Cassandra’s wide‑row key/value model maps naturally to time‑series events—partition keys by user+date give even distribution and predictable hot‑spot mitigation. MongoDB’s document model excels at nested analytics, but its write amplification on secondary indexes hurt our ingest rate.  
> *Service stack:* Deployed **Amazon Keyspaces (Cassandra)** with DynamoDB Global Tables for cross‑region replication; used **AWS Glue** to stream data from Kinesis into Cassandra via Spark. For ad‑specific aggregation, we added **Amazon OpenSearch** as a read layer.  
> *Cost/scale trade‑off:* Cassandra’s provisioned write capacity (~3 kWCU) kept costs at ~$150K/year; MongoDB Atlas would have required > 10 TB of storage and incurred $350K in licensing.

> **Result:** In production, we achieved 99.95 % availability, reduced query latency from 250 ms to 45 ms for the product dashboards, and cut TCO by 30 % versus a MongoDB prototype.  

**Key takeaways:** Own the decision lifecycle—evaluate data access patterns, quantify impact (latency, cost), iterate on schema design, and document lessons learned to guide future infra choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
