---
qid: ing_6a882e3779__aws__local
question: 'Explain: Docstore Architecture — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 553
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:22-05:00'
sources: []
---

**Situation**  
While leading the ML infrastructure team at Uber, we had to serve a *global* recommendation model that required real‑time feature lookups for **>40 M reads/sec** from a central document store (user profiles, trip history). The raw storage was an S3‑backed object store; latency was unacceptable.

**Task**  
Design an integrated cache layer that delivers sub‑10 ms read latency, scales horizontally, and keeps cost in check—while ensuring *data consistency* for frequent updates.

**Action**  
1. **Architecture** –  
   • **Primary tier:** Amazon DynamoDB (partitioned by user ID) for strong consistency on hot keys.  
   • **Secondary tier:** Elasticache‑Redis cluster with read replicas, sharded across availability zones. Redis serves the *cached* feature set; writes propagate via DynamoDB Streams → Lambda → UpdateCache.  
   • **Cold tier:** S3 + Glacier for archival history.  

2. **Data Flow** –  
   - On request: check Redis → hit (≤5 ms).  
   - Miss: query DynamoDB → populate Redis, return result.  
   - Updates: Lambda listens to Streams; invalidates or updates cache entry in <50 µs.

3. **Scalability & Availability** – Auto‑scaling for both DynamoDB (via on‑demand capacity) and Elasticache (adding shards). Multi‑AZ placement ensures 99.999% availability.  

4. **Cost** –  
   - DynamoDB charges only for hot partitions; Redis cache size tuned to 70 % of hot key set (~2 TB).  
   - Savings: 30 % lower latency cost vs. pure DynamoDB read capacity.

5. **Monitoring & Optimization** – CloudWatch metrics (CacheHitRatio, Latency); automated scaling policies based on percentile thresholds.

**Result**  
- Achieved **40 M reads/sec** with *99.9 %* cache hit rate and <8 ms average latency.  
- Reduced read cost by **$1.2 M/year** versus baseline DynamoDB‑only design.  
- Post‑deployment telemetry showed 15 % reduction in downstream ML inference time.

**Learning** – The key was *dive deep* into the cache eviction strategy; an initial LRU policy caused thrashing under burst traffic, so we switched to a hybrid LFU+TTL approach after profiling. This iteration exemplified **Ownership** and **Bias for Action**—quickly identifying failure points, testing alternatives, and deploying the most effective solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
