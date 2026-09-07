---
qid: ing_f97a3699da__aws__local
question: 'Explain: Cache Eviction Algorithms — Things to Consider When Using Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 438
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:42:23-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a team that built a recommendation engine for a global e‑commerce platform. The engine had to serve 10 M requests per day with <50 ms latency. We used Amazon ElastiCache Redis for feature‑vector caching, but early on we saw cache hit rates drop from **92 % → 68 %** during flash sales.

**Action**  
I applied the *Customer Obsession* and *Dive Deep* principles:  
1. **Profile eviction patterns** – logged key access frequency and TTLs with CloudWatch metrics.  
2. **Choose appropriate algorithm** – switched from LRU to a hybrid LFU‑LRU that gives higher weight to keys accessed > 3 times per minute (AWS docs recommend this for write‑heavy workloads).  
3. **Tune `maxmemory-policy`** – set `volatile-lfu` and increased `maxmemory-reserved` by 15 % to avoid premature eviction during traffic spikes.  
4. **Cost/Availability trade‑off** – moved to a multi‑AZ Redis cluster (redundant nodes) to keep *high availability* while keeping read replicas for heavy reads, costing only +$300/month versus the $1k per month of our previous single‑node setup.

**Result**  
Cache hit rate rebounded to **94 %**, latency dropped from 78 ms to 32 ms, and we reduced downstream DynamoDB read capacity by 35 %, saving ~$4k/month. The system now scales to 20 M requests/day with no service disruptions.

> *Bar‑raiser notes*: I demonstrated ownership (owning the performance issue), deep dive into metrics, quantified impact on latency & cost, and learned that a single eviction policy is rarely optimal for mixed read/write workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
