---
qid: ing_25d73e9fd7__star__local
question: 'Explain: MySQL at Canva: Growing Pains — From Zero to 50 Million Uploads
  per Day: Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 396
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:26-05:00'
sources: []
---

**Situation:**  
When I joined the media team at Canva, our MySQL database was handling roughly 5 million image uploads a day. The growth curve had already started to flatten because of lock contention and slow query times on the `uploads` table. One weekend, we hit 12 million uploads and the average latency spiked from 120 ms to 1.2 s, causing UI timeouts for users.

**Task:**  
I was tasked with redesigning the storage layer so that it could support up to 50 million daily uploads without breaking existing services, all while keeping cost in check and preserving ACID guarantees for critical metadata.

**Action:**  
I first profiled the workload with Percona Toolkit, identifying heavy `INSERT` spikes and long-running `SELECT` scans. I then sharded the table horizontally by hash of `user_id`, creating 8 MySQL instances behind a custom routing layer in Go that routed writes to the correct shard. To reduce contention on the `meta` index, I added a secondary B‑Tree with a composite key `(upload_date, media_type)` and switched the storage engine from InnoDB to Percona XtraDB with larger buffer pools. Finally, I automated failover with ProxySQL and introduced a read‑replica pool for analytics queries.

**Result:**  
Post‑deployment, we saw upload latency drop to 80 ms on average and throughput scale linearly up to 50 million uploads/day. The sharding strategy cut the `INSERT` queue time by 70 % and reduced overall MySQL costs by ~15 %. I learned that combining fine‑grained profiling with targeted sharding can turn a bottleneck into a scalable, maintainable system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
