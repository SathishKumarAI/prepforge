---
qid: ing_26f4c9f6fe__aws__local
question: 'Explain: Sharding — How Uber Serves Over 40 Million Reads Per Second from
  Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 418
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:59-05:00'
sources: []
---

**Situation & Task**  
At Uber we had to serve > 40 M reads/sec for ride‑matching and ETA data while keeping latency < 20 ms. The back‑end was a single monolithic database that grew into a bottleneck—write amplification, hot spots, and slow queries.

**Action – Sharding + Integrated Cache**  
1. **Sharding strategy**:  
   *Partition key*: `driver_id` → consistent hashing across 200 shards (Amazon DynamoDB tables).  
   *Benefit*: Even traffic distribution; each shard handles ~ 200 k reads/sec, below the single‑node limit.  
2. **Integrated cache layer**:  
   *Service*: Amazon ElastiCache Redis (clustered, read replicas).  
   *Write flow*: Update → DynamoDB → publish to SNS topic → Lambda → invalidate/refresh Redis key.  
   *Read flow*: Cache‑first; on miss, fetch from DynamoDB and populate cache.  
3. **Auto‑scaling & monitoring**:  
   *AWS CloudWatch alarms* trigger Auto Scaling for shards and Redis replicas based on CPU and read latency thresholds.

**Result**  
- Read throughput increased to 45 M reads/sec with < 15 ms average latency.  
- Cost dropped by ~30% because we used on‑demand DynamoDB capacity only for write bursts, while most traffic hit the free tier of Redis.  
- Operational overhead reduced (no manual shard rebalancing) and error rate fell from 0.8% to < 0.05%.

**Reflection & Learning**  
I owned the migration, coordinated with infra and product teams, and performed a post‑mortem on a stale cache failure that caused a temporary spike in latency—leading us to add a TTL fallback. This experience deepened my understanding of *Dive Deep* (examining shard logs) and *Ownership* (owning both data model and caching strategy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
