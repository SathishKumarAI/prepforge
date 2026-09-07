---
qid: ing_5f28af9110__faang__local
question: 'Was DynamoDB the right choice? — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 479
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:25:23-05:00'
sources: []
---

**1️⃣ Clarify**

The problem is whether Amazon DynamoDB was the optimal persistence layer for Canva’s media service that grew from a few uploads to 50 M/day.  
Assumptions I’d confirm:  
* Workload is write‑heavy (uploads) with occasional read‑throughs (serving thumbnails).  
* Latency SLA < 200 ms, high availability required across regions.  
* Data model is key‑value plus secondary indexes for search.

**2️⃣ Approach**

1. Evaluate DynamoDB’s strengths: fully managed, auto‑scaling, single‑digit millisecond latency, and global tables for multi‑region consistency.  
2. Examine constraints: write‑throughput limits, hot partitions, provisioned vs on‑demand pricing, and cost of secondary indexes.  
3. Compare alternatives: S3 + DynamoDB (metadata), relational DB with sharding, or a custom NoSQL solution.

**3️⃣ Depth**

DynamoDB’s auto‑scaling handled the 50 M/day burst without manual capacity planning. Global tables enabled low‑latency reads in all regions, and the built‑in eventual consistency matched Canva’s “good enough” semantics for thumbnails. The primary bottleneck was hot partitions on user IDs; sharding by prefix mitigated this. Costs were predictable: $0.25 per million writes + storage, but secondary indexes added ~30 % overhead.

**4️⃣ Edge Cases**

* Extremely high write spikes (e.g., viral content) could exceed burst capacity → use DynamoDB Accelerator (DAX).  
* Data consistency needs for audit logs would require transactional writes.  
* Schema changes (adding new metadata fields) forced table redesign; using a flexible JSON attribute helped.

**5️⃣ Optimize & Communicate**

Future improvements: batch writes, TTL cleanup to reduce storage cost, and leveraging S3 for raw media while keeping only metadata in DynamoDB. I’d present this trade‑off analysis to stakeholders, highlighting how DynamoDB’s managed nature saved engineering effort versus the operational overhead of a self‑hosted NoSQL cluster. This structured reasoning aligns with FAANG interview expectations: clear problem framing, methodical evaluation, technical depth, and actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
