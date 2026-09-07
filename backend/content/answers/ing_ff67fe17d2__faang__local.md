---
qid: ing_ff67fe17d2__faang__local
question: How to increase ElasticSearch throughput and concurrency capacity?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 611
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:33:51-05:00'
sources: []
---

**Clarify**  
You’re asking how to scale an Elasticsearch cluster so it can ingest more documents per second and serve more concurrent queries. I’ll assume: (1) the cluster is already deployed on commodity hardware, (2) you have control over node count, indexing strategy, and query patterns, and (3) you’re not constrained by licensing or budget.

**Approach**  
1. Tune *indexing* (shard allocation, bulk size, refresh interval).  
2. Optimize *query* paths (doc‑values, caching, filtering).  
3. Scale *hardware* (CPU, RAM, SSDs).  
4. Adjust *cluster settings* (thread pools, network).  
5. Monitor and iterate.

**Depth**  

| Area | Key Actions | Complexity |
|------|-------------|------------|
| **Sharding** | Increase shards per index → more parallelism; avoid “hot” nodes by using shard‑routing. | O(log n) for lookups |
| **Bulk API** | Batch 5–10 k docs, set `max_concurrent_requests` to 5–10. Use `flush_interval` > refresh. | Linear in batch size |
| **Refresh & Flush** | Disable auto‑refresh during bulk; trigger manually. Keeps write threads free. | O(1) per flush |
| **Thread Pools** | Raise `search.max_thread_count`, `indexing.max_thread_count`. Monitor queue lengths. | Constant overhead |
| **Hardware** | SSDs (NVMe), ≥4 cores/CPU, 64–128 GB RAM per node; allocate >70% to JVM heap + OS cache. | Linear scaling |
| **Caching** | Enable fielddata cache for frequent fields; use `request_cache` on filters. | Memory‑bound |
| **Network** | Use high‑speed interconnect (10GbE), enable TCP_NODELAY, reduce round trips by coalescing queries. | Constant per node |

**Edge Cases**  
- Too many shards → increased GC and node churn.  
- Bulk size too large → OOM or disk thrashing.  
- Excessive thread pool increases context switches.  
- Under‑provisioned SSDs cause I/O bottlenecks.

**Optimize & Communicate**  
Start with a baseline (e.g., 1 k docs/s, 200 QPS). Incrementally adjust shards and bulk size while monitoring `jvm.gc` and `search/flush`. Use A/B tests to confirm gains. Communicate findings in dashboards (Grafana) and iterate: “We added 4 shards per index and increased bulk size from 1 k to 10 k, yielding a 3× ingest rate with <5% GC overhead.” This shows structured thinking, concrete actions, and measurable impact—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
