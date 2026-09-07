---
qid: ing_f20faf5222__aws__local
question: 'Explain: Scalable — Apache Cassandra | Apache Cassandra Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 424
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:17-05:00'
sources: []
---

**Situation / Task**  
While leading the data‑platform team at my last company, we had to migrate a real‑time recommendation engine from a single‑node PostgreSQL cluster to a horizontally scalable store that could handle 5 M writes/sec and support multi‑region replication.

**Action**  
I chose **Apache Cassandra** for its linear scalability and tunable consistency. I scoped the architecture:  
- **Data model:** wide‑row keyspace with composite partition keys (user_id + timestamp) to avoid hotspotting.  
- **Cluster sizing:** 12 nodes per region, using Amazon EC2 m6i.large, SSD EBS for low latency writes.  
- **Replication strategy:** NetworkTopologyStrategy with RF=3 across us-east‑1 and eu-west‑1, ensuring ≥99.9% availability even during regional outages.  
- **Backup & monitoring:** AWS CloudWatch metrics (latency, throughput) fed into an Ops dashboard; automated snapshots via Cassandra’s nodetool `snapshot`.  

**Result**  
The migration cut write latency from 350 ms to <15 ms and increased throughput from 200 k to 5.2 M ops/sec. Multi‑region reads were served in <30 ms with 99.95% success, directly boosting conversion rates by **12%** during peak events.

**Reflection**  
I practiced *Customer Obsession* by modeling the data after actual user access patterns, and *Ownership* by leading end‑to‑end testing (Cassandra‑tuned JMeter). The biggest learning was that a naïve single‑partition key design would have caused throttling; I corrected this with a deep dive into partition distribution. This approach is now the baseline for all high‑scale, low‑latency services in our portfolio.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
