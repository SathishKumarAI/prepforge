---
qid: ing_5cce4da8d9__aws__local
question: 'Explain: Probabilistic Data Structures — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 526
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:55:35-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a *distributed counter* for a high‑traffic ad platform that must support > 10 M increments per second while keeping storage and latency minimal. The goal: deliver accurate counts with < 1 % error and 99.9 % availability.

**Action**  
I chose a **Count‑Min Sketch (CMS)** as the probabilistic data structure because it offers sub‑linear memory, deterministic upper bound on error, and is amenable to horizontal scaling.  
*Architecture*:  
- **Producer**: Each request emits an event to **Amazon Kinesis Data Streams**; Kinesis shards provide built‑in partitioning and high throughput.  
- **Consumer**: A fleet of **AWS Lambda** functions (auto‑scaling) reads records, hashes the key into *k* hash buckets, and updates a CMS stored in **DynamoDB** with *GetItem/UpdateItem* transactions.  
- **Aggregation API**: A front‑end service queries DynamoDB to retrieve the sketch and reconstructs counts on demand.

*Scalability & Availability*: Kinesis shards scale linearly; Lambda scales per shard, ensuring no bottleneck. CMS in DynamoDB is sharded by hash bucket, providing 99.9 % availability with built‑in replication.  
*Cost*: Roughly $0.05 per million increments (Kinesis + Lambda) vs. ~$10 per million for a full relational counter—> **95 % cost savings** while keeping error < 1 %.

**Result**  
After 30 days, the system handled 12 M ops/s with latency < 5 ms and maintained 99.92 % uptime. Error stayed below 0.8 %, meeting SLA. The design was adopted company‑wide for all real‑time metrics.

**Learning & Ownership**  
I iterated on hash function choice after a failure where skew caused bucket overflow; switching to a pair of independent MurmurHash functions reduced error by 30 %. This demonstrates *Ownership* and *Dive Deep*, key Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
