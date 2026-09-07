---
qid: ing_39c007e602__aws__local
question: 'Explain: Cardinality — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 534
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:09-05:00'
sources: []
---

**Question:** *Explain cardinality – what is database sharding and why do we shard on AWS?*  

**Situation / Task**  
At my previous role, our recommendation engine served 15 M active users with a 4‑hour latency SLA. The monolithic PostgreSQL cluster hit CPU saturation at 90 % during peak traffic, and the write throughput plateaued at ~2K ops/sec. Our goal was to increase write capacity by 5× while keeping read latency <50 ms.

**Action**  
I proposed a *horizontal sharding* strategy based on user ID hash (cardinality = number of unique users). Each shard lives in its own Aurora PostgreSQL cluster, automatically replicated across three AZs for high availability.  
- **Sharding key**: `user_id % 64` → 64 shards, balancing load.  
- **AWS services used**: Amazon Aurora Serverless (for auto‑scale), Elastic Load Balancer + Route 53 latency routing, AWS Lambda for shard discovery, and DynamoDB to store the shard map.  
- **Scalability**: Each shard can scale independently; with Aurora Serverless we pay per actual write volume.  
- **Availability**: Cross‑AZ replication guarantees 99.999% uptime; failover is automatic within seconds.  
- **Cost trade‑offs**: Sharding adds operational overhead (multiple clusters, more snapshots) but reduces per‑cluster IOPS cost by ~30 % and eliminates the single‑point bottleneck.

**Result**  
After migration, write throughput increased to 12K ops/sec (6×), read latency dropped from 120 ms to 35 ms, and we maintained a 99.999% uptime SLA. The solution also enabled us to add new features (e.g., per‑user analytics) without impacting the core service.

**Leadership Principles Anchored**  
- **Customer Obsession**: Delivered faster recommendations, improving user engagement by 12%.  
- **Ownership**: Designed end‑to‑end shard architecture and owned post‑migration monitoring.  

**Bar‑raiser takeaways**  
- Demonstrated *ownership* (full design to production).  
- Showed *deep dive* into cardinality, sharding key selection, and trade‑offs.  
- Quantified impact with real metrics (write ops/sec, latency, cost).  
- Learned from failure: initial 8‑shard plan caused uneven load; pivoting to hash‑based 64 shards fixed the imbalance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
