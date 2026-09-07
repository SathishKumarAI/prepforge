---
qid: ing_c097b033bf__aws__local
question: 'Explain: Removal Listeners — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 447
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:39:20-05:00'
sources: []
---

**Situation / Task**  
While refactoring a high‑traffic recommendation engine (≈ 5 M requests/day) I noticed the Guava cache was leaking entries after a bulk update. The removal listeners were not firing reliably because the cache’s eviction policy and thread pool configuration were mis‑matched, leading to stale data served to customers.

**Action**  
I *owned* the problem by first diving deep into the Guava source and instrumentation logs (Dive Deep). I added a wrapper that exposed `CacheStats` and logged every removal event with timestamps. Using CloudWatch I correlated the spikes in eviction count with the batch update window. I then redesigned the cache layer:

| Requirement | Design Choice | AWS Service |
|-------------|---------------|-------------|
| **Consistency** | Use `CacheBuilder.newBuilder().expireAfterWrite(10m)` + `RemovalListener` that publishes to SNS for audit | SNS (notification) |
| **Scalability** | Replace single JVM cache with Elasticache‑Redis cluster, sharded by user ID | Amazon ElastiCache – Redis |
| **Cost/Availability** | Deploy the Redis cluster in a Multi‑AZ configuration; use read replicas for scaling reads | ElastiCache read replicas |

The removal listener now pushes a JSON payload to an SNS topic, triggering a Lambda that writes the event into DynamoDB for audit and triggers a CloudWatch alarm if removals exceed 1 % of cache size.

**Result**  
Eviction latency dropped from 120 ms to < 5 ms; stale‑data incidents fell by **87 %**, improving customer satisfaction scores (CSAT +0.3). The new architecture cost $1,200/month versus the old in‑VM cache’s unbounded memory usage.  

**Reflection**  
I learned that *ownership* means not only fixing bugs but re‑architecting for durability. I also discovered that simple metrics (eviction rate) can surface subtle concurrency issues—an insight I shared with the team to prevent future regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
