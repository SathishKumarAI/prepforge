---
qid: ing_bd5ef52d02__aws__local
question: 'What is Redis? — GitHub - redis/redis: For developers, who are building
  real-time data-driven applications, Redis is the preferred, fastest, and most feature-rich
  cache, data structure server, and document and vector query engine. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 452
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:37-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we chose a technology that gives our customers lightning‑fast responses; *Ownership* – I drove the migration to a managed Redis cluster and own its operational health.

### Situation
In 2023, our real‑time recommendation engine was throttling at ~600 req/s, with latency rising above 120 ms during traffic spikes. We needed an in‑memory data store that could persist state, support complex queries, and scale elastically.

### Task
Architect a production‑ready Redis deployment on AWS, replacing the legacy local cache while ensuring 99.9% uptime, sub‑10 ms latency, and minimal cost.

### Action
1. **Design** – Adopted Amazon ElastiCache for Redis (cluster mode enabled) with 3 shards, each 2 replicas (primary + standby).  
2. **Data model** – Used Redis *hashes* for user profiles, *sorted sets* for real‑time scoreboards, and *streams* for event ingestion.  
3. **Resilience** – Enabled automatic failover, cross‑AZ replication, and point‑in‑time backups (RDB + AOF).  
4. **Monitoring** – Integrated CloudWatch metrics (`Latency`, `Evictions`, `MemoryUsage`) with SNS alerts; used X-Ray for request tracing.  
5. **Cost control** – Leveraged Reserved Instances (1 yr) and spot pricing for non‑critical shards, yielding 30% savings vs on‑demand.

### Result
- Latency dropped from 120 ms to 8 ms (12× improvement).  
- Throughput increased to 4,200 req/s (7× capacity).  
- Uptime remained at 99.98%, exceeding SLA.  
- Cost reduced by 30% annually.  

**Learnings** – Early deep dives into memory eviction policies prevented silent data loss; continuous monitoring turned a reactive process into proactive optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
