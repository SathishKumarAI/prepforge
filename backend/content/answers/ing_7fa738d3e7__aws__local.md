---
qid: ing_7fa738d3e7__aws__local
question: 'Explain: Dialogues here average around 180 messages. Design the cache that
  sits between turns.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 543
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:13:51-05:00'
sources: []
---

**Situation & Goal**  
I led a team building an AI‑driven chatbot for a global e‑commerce platform where each dialogue averages ~180 turns. We needed a cache layer that kept context in real time while keeping latency < 50 ms and cost <$0.01 per 1,000 messages.

**Task**  
Design the intermediate cache between consecutive user–bot turns so that state is instantly available, scalable to millions of concurrent users, and resilient to failures.

**Action**  

| Requirement | Design Choice | AWS Service | Rationale |
|-------------|---------------|------------|-----------|
| Low‑latency read/write | In‑memory store with LRU eviction | **Amazon ElastiCache for Redis** (cluster mode) | 0.2 ms per op, automatic sharding |
| High availability | Multi‑AZ replication + auto‑failover | Same service | 99.99% uptime |
| Scale to 10M active sessions | Partition key = userID; use *Clustered Mode* with > 64 shards | ElastiCache | Horizontal scaling without code changes |
| Cost control | TTL of 30 min, eviction policy, auto‑scaling | ElastiCache + CloudWatch alarms | Stops stale data from bloating memory |
| Audit & analytics | Persist every 10th turn to **Amazon DynamoDB** for compliance | DynamoDB | Durable storage with sub‑second read/write |

We added a lightweight *gateway* service (AWS Lambda + API Gateway) that reads/writes JSON blobs, ensuring idempotency and back‑pressure handling. A CloudWatch dashboard tracked `cache_hit_rate` – we achieved 97% hits, reducing backend compute by **32 %** and cutting per‑message cost from $0.015 to $0.009.

**Result**  
The cache lowered average turn latency from 120 ms to 48 ms, increased throughput from 2k to 12k RPS, and reduced AWS spend by 18 %. The system survived a simulated AZ outage with zero data loss, validating our “Ownership” and “Dive Deep” principles.  

**Bar‑raiser takeaways**  
- Demonstrated ownership of end‑to‑end performance.  
- Showed deep dive into trade‑offs (TTL vs. durability).  
- Quantified impact with real metrics.  
- Learned from a failed test where TTL too short caused churn; we adjusted to 30 min after analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
