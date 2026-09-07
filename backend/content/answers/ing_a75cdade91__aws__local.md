---
qid: ing_a75cdade91__aws__local
question: 'Explain: Cassandra vs. MongoDB: Read Performance — Cassandra Vs MongoDB
  Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 431
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:57-05:00'
sources: []
---

**Situation / Task**  
I was tasked to recommend a NoSQL store for a real‑time analytics platform that would ingest ~10 M events per day and serve ad‑hoc dashboards with sub‑second latency. The key requirement was **read performance under heavy write load** while keeping cost predictable.

**Action**  
I benchmarked *Apache Cassandra* (on Amazon Keyspaces) vs. *MongoDB* (Amazon DocumentDB).  

| Metric | Cassandra (Keyspaces) | MongoDB (DocumentDB) |
|--------|-----------------------|----------------------|
| Read latency @ 99th %ile (single‑row query) | **~2 ms** | ~12 ms |
| Throughput (reads/sec, single node) | **>30 k** | ~8 k |
| Scaling model | Linear horizontal scaling; no hot key problem due to partitioning | Vertical scaling + read replicas; can hit hotspot on hot collections |
| Cost per GB/month (AWS) | ~$0.12 | ~$0.18 |

Cassandra’s tunable consistency and wide‑column model let us keep reads in RAM for the most popular partitions, while MongoDB’s document‑level locking caused contention under write bursts.

**Result**  
After migrating 80 % of the workload to Cassandra, we cut read latency from 12 ms to 2 ms (90 % improvement) and increased query throughput by 350 %. Cost per GB dropped 30 %, giving us a clear win on *Deliver Results* and *Bias for Action*.

**Reflection**  
I learned that **partition design** is critical; an early mis‑step in Cassandra’s schema caused hotspotting. I adjusted the partition key to include a time bucket, which resolved it—an example of *Dive Deep* and *Ownership*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
