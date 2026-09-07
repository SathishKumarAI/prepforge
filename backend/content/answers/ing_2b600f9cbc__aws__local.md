---
qid: ing_2b600f9cbc__aws__local
question: 'Explain: Directory-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 469
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:02:59-05:00'
sources: []
---

**Situation & Task**  
At a streaming‑media startup I led the redesign of our user‑profile service after traffic spiked 4× during a new feature launch. The monolith was hitting the DB’s write‑throughput limit and latency grew from 20 ms to 200 ms, hurting user engagement (daily active users dropped 12%).  
**Action** – *Dive Deep* & *Ownership*  
I chose **directory‑based sharding** because it keeps related data together while allowing horizontal scaling.  
1. **Requirements**: each user profile must be read/write‑consistent; cross‑user analytics needed a global view; cost per request < $0.0002.  
2. **Design**  
   * **Shard Directory Table** (Amazon DynamoDB, 4 KB items): `UserID → ShardKey`. Uses a partition key of the first two hex digits of the user ID.  
   * **Shard Tables** (Amazon Aurora Serverless + Global Secondary Indexes): one per shard key, each with read/write replicas in multi‑AZ for high availability.  
   * **Cache Layer** (Amazon ElastiCache Redis): 10 % of hot profiles cached; cache miss triggers a lookup in the appropriate shard via the directory table.  
3. **Scalability & Cost** – Sharding lets us add or remove tables without downtime, and Aurora Serverless auto‑scales based on CPU utilization, keeping costs near $0.0001 per request at peak load.  
4. **Trade‑offs** – Added a small lookup hop; mitigated by caching and eventual consistency for analytics.  

**Result** – Within 48 h of rollout:  
* Latency dropped to 25 ms (95th percentile).  
* Throughput increased from 500 req/s to 4,800 req/s.  
* Daily active users rebounded +18% in the next week.  

**Bar‑raiser takeaway** – I owned the problem end‑to‑end, dove deep into performance metrics, quantified the impact with real numbers, and learned that a simple directory layer can turn a monolith into a horizontally scalable system without sacrificing consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
