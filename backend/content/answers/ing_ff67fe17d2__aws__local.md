---
qid: ing_ff67fe17d2__aws__local
question: How to increase ElasticSearch throughput and concurrency capacity?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 476
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:55:27-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I ran a production search layer for an e‑commerce platform that served 1 M daily queries. During peak season our **ES cluster hit 85 % CPU and 70 % disk I/O**, causing latency to rise from 120 ms to 450 ms, directly impacting conversion rates.

**Action (A)**  
*Owned the problem end‑to‑end.*  
1. **Right‑size nodes** – moved from m5.large to r6g.xlarge (64 GiB RAM) and increased the instance count from 4 to 8 to raise total memory by 150 %.  
2. **Sharding & replication strategy** – re‑partitioned indices: 3 primary shards per index with a single replica, reducing shard overhead while keeping fault tolerance.  
3. **Cache tuning** – enabled the ES *fielddata* cache for hot fields and increased JVM heap to 30 % of physical memory.  
4. **Index lifecycle management (ILM)** – automated rollover after 7 days, keeping hot indices small (≤10 GB).  
5. **S3‑backed snapshots** with cross‑region replication for disaster recovery.  

*Leveraged AWS services:*  
- **Amazon OpenSearch Service** for managed cluster.  
- **AWS Auto Scaling** to add nodes during traffic spikes.  
- **CloudWatch Alarms + Lambda** to auto‑scale the JVM cache size based on CPU utilization.  

**Result (R)**  
Within 3 weeks:  
* Latency dropped from 450 ms to 130 ms (≈70 % improvement).  
* Throughput increased from 12 k QPS to 28 k QPS (+133 %).  
* Cost remained within budget due to efficient node sizing and ILM.  

**Reflection & Learning**  
I learned that *“Dive Deep”*—examining shard statistics, GC logs, and I/O metrics—is critical before making changes. The bar‑raiser will hear the ownership of root cause analysis, the depth of data used (CPU, disk, GC), and a quantified impact on business KPIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
