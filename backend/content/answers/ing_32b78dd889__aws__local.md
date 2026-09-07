---
qid: ing_32b78dd889__aws__local
question: 'Explain: a regular base table and that is — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 471
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:19:52-05:00'
sources: []
---

**Situation & Task**  
At my previous role we had a data‑science pipeline that ingested 10 M rows/day from IoT devices and needed near‑real‑time predictions. The existing “regular base table” (RBT) in RDS was hitting 30 ms latency for 99th‑percentile queries, causing SLA breaches.

**Action**  
I spearheaded a migration to DynamoDB, inspired by the *Re:Invent 2018* DAT321 talk that demystified its hyper‑scale architecture.  
1. **Requirements & Design** –  
   - *Throughput*: 50 k read/write per second with 99th‑percentile <5 ms.  
   - *Schema*: Partition key = `device_id`, sort key = `timestamp`.  
   - *Secondary Indexes*: Global secondary index on `status` for quick filtering.  
2. **AWS Services** –  
   - DynamoDB (Provisioned/Auto Scaling).  
   - DAX cache for sub‑millisecond reads.  
   - Lambda + Step Functions for ETL, triggering on S3 upload.  
   - CloudWatch & X-Ray for observability.  
3. **Scalability / Availability** – Auto‑scaling + multi‑AZ ensures 99.999% availability; DAX reduces hot‑partition pressure.  
4. **Cost Trade‑off** – Shifted from $12k/month RDS to ~$8k/month DynamoDB + $1.2k for DAX, a 20 % cost saving while meeting performance targets.

**Result**  
Post‑migration latency dropped to <3 ms (99th percentile), throughput hit 70 k ops/s without throttling, and SLA compliance rose from 92 % to 98 %. The migration also reduced maintenance overhead by eliminating RDS patching cycles.  

**Learning & Ownership** – I documented the design in a knowledge‑base article, trained the team on DynamoDB best practices, and set up a quarterly review of throughput metrics to catch regressions early. This demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
