---
qid: ing_a47341135f__aws__local
question: 'Explain: Summary — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 366
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:14-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: A SaaS analytics platform served millions of users per day, but report generation lagged during peak hours (average latency > 4 s).  
*Task*: Reduce query response time while keeping cost in check.  
*Action*: I introduced a **distributed caching layer** using Amazon ElastiCache‑Redis.  
- **Requirements**: Cache key = user‑id + query‑hash; TTL 15 min for fresh data, manual invalidate on data change.  
- **Design**:  
  - *Cache Hit Path*: Direct read from Redis → latency < 50 ms.  
  - *Cache Miss Path*: Query DynamoDB → write result to Redis, return to user.  
  - Use Amazon CloudWatch alarms to auto‑scale the cache cluster (0–4 nodes) based on hit‑rate metrics.  
- **Scalability/Availability**: Multi‑AZ Redis replication ensures < 1 ms failover; read replicas handle burst traffic.  
- **Cost Trade‑off**: Savings of ~$12k/month in DynamoDB provisioned capacity vs. $3k/month for cache, net +$9k.

*Result*: Cache hit rate rose to 92%, average query latency dropped from 4 s to 120 ms (90% reduction), and system throughput increased by 150%.  
*Learnings*: Early monitoring revealed stale data drift; added a versioned key strategy. This iteration shows ownership, deep dive into metrics, and measurable impact—hallmarks of an Amazon bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
