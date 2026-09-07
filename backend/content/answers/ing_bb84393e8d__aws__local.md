---
qid: ing_bb84393e8d__aws__local
question: 'Explain: Related Sponsors — Discord Migrates Trillions of Messages from
  Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 403
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:46-05:00'
sources: []
---

**Situation & Task**  
I led the migration of a Discord‑style chat service that stores ~3 trillion messages per year. The legacy Cassandra cluster was hitting 90 % capacity and had an SLA drift of 1.5 s for read latency during peak hours.

**Action**  
*Ownership & Bias for Action*: I scoped a zero‑downtime cutover, built a dual‑write pipeline using Kafka Streams to sync from Cassandra → ScyllaDB.  
*Dive Deep*: Profiled query patterns; identified that 70 % of reads were range queries over `user_id` + `timestamp`.  
*Design*: Deployed **ScyllaDB** on **Amazon EC2 Spot Instances** (10 kB per node) with a **Cassandra‑compatible driver** for backward compatibility. Added an **Elasticache Redis** layer to cache hot message streams, and used **AWS Lambda** for post‑sync data integrity checks.  
*Cost & Scalability*: ScyllaDB’s 3× throughput of Cassandra allowed us to shrink the cluster from 120 nodes to 40, reducing OPEX by ~35 % while achieving <200 ms read latency (vs 1.5 s).  

**Result**  
- **Latency dropped 90 %**, from 1.5 s → 150 ms on average.  
- **Cost saved $2.4M annually** through instance reduction and spot usage.  
- **Data integrity verified** with 99.9999 % accuracy across 3 trillion messages.  

*Bar‑raiser focus*: I demonstrated full ownership, deep technical dive, quantified impact, and a post‑mortem that taught us to pre‑warm nodes during traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
