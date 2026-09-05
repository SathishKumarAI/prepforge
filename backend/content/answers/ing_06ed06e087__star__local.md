---
qid: ing_06ed06e087__star__local
question: 'Explain: Read vs Writes - URL Shortening is a read-heavy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 374
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:48-05:00'
sources: []
---

**Situation**  
I was working on an internal URL‑shortener for a social media platform that had just hit 10 M daily active users. The service had to return shortened URLs in under 50 ms while handling spikes of up to 500 k requests per second during marketing campaigns.

**Task**  
My goal was to design the data layer so it could serve the read traffic efficiently without bottlenecking on writes when new links were created, and to keep latency predictable even under load.

**Action**  
I profiled the request mix: ~95 % reads, 5 % writes. I chose a hybrid storage pattern—write‑once, read‑many. New URLs were written to a sharded MySQL table (partitioned by user ID) and immediately replicated into a distributed in‑memory cache (Redis Cluster) using a write‑through policy. Reads hit the cache first; on miss we fell back to MySQL. To keep writes fast I batched inserts with a background worker, capped each shard to 200 writes/s, and used optimistic locking for collision handling. I also added a read‑only replica pool behind a connection router to offload traffic from the primary.

**Result**  
Cache hit rate climbed to 98 %, cutting average response time from 70 ms to 35 ms during peak periods. Write latency stayed below 5 ms per operation, and we avoided any single point of failure by sharding. The exercise taught me how a clear read‑write split, combined with proper caching and sharding, can turn a heavy read workload into a highly responsive system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
