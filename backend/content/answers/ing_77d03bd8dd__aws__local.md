---
qid: ing_77d03bd8dd__aws__local
question: 'Explain: We kept the metadata in like an — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 574
total_tokens: 821
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:11-05:00'
sources: []
---

**Situation & Task**

At a mid‑size fintech we had to store millions of transaction metadata records (timestamp, user ID, status flags, tags). The system required low‑latency reads (<5 ms), write throughput >10k ops/s, and the ability to add new attributes on the fly. I owned the decision: choose a NoSQL database that would scale horizontally while keeping costs under $50k/month.

**Action**

I applied *Dive Deep* by profiling access patterns (80 % reads, 20 % writes) and *Customer Obsession* by speaking with data‑science teams to understand schema evolution needs. I evaluated DynamoDB, DocumentDB, and MongoDB Atlas:

| Service | Pros | Cons |
|---------|------|------|
| **DynamoDB** | Fully managed, single‑digit ms latency, auto‑scaling, fine‑grained billing | No native secondary indexes for complex queries |
| **DocumentDB** | SQL‑like query language, easy migration from MongoDB | Higher per‑request cost, limited scalability beyond 30 GB/instance |
| **MongoDB Atlas** | Rich aggregation framework, flexible schema | Requires sharding logic; cluster scaling slower |

I chose **Amazon DynamoDB** with Global Secondary Indexes (GSIs) for user‑by‑date queries. I designed the table to use a composite key (`PK = "TXN#<transaction_id>"`, `SK = "META"`), and added GSIs on `user_id` + `status`. I configured auto‑scaling with minimum 5 read/write units, set up CloudWatch alarms for throttling, and enabled DynamoDB Accelerator (DAX) for read‑heavy workloads.

**Result**

- **Throughput:** Sustained 12k write ops/s and 50k read ops/s without throttling.  
- **Latency:** Average 3 ms for reads, 4 ms for writes.  
- **Cost:** $42k/month (including DAX), 30 % lower than projected on‑premise spend.  
- **Business impact:** Data‑science pipelines processed metadata 40 % faster, enabling real‑time fraud alerts.

**Bar‑raiser notes**

* Ownership: I led the end‑to‑end decision, from requirement gathering to cost modeling.  
* Dive Deep: I benchmarked each candidate and built a custom latency/throughput model.  
* Quantified impact: 40 % faster analytics, $42k/month savings.  
* Learning: Initial over‑provisioning of read units led to unnecessary spend; we adjusted auto‑scaling thresholds after the first month.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
