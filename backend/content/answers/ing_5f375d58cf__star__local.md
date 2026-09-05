---
qid: ing_5f375d58cf__star__local
question: 'Explain: Eviction Policy — Design of a Modern\u00a0Cache - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 391
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:38-05:00'
sources: []
---

**Situation**  
At my previous company we were building a real‑time recommendation engine that served millions of users per day. The feature store was backed by an in‑memory cache (Redis‑cluster) and the hit ratio had slipped from 92 % to 78 % after a recent data‑model change, causing latency spikes during peak traffic.

**Task**  
I was tasked with designing an eviction policy that would keep the most valuable items in memory while ensuring horizontal scalability across the cluster without compromising consistency or adding significant overhead.

**Action**  
1. I analyzed access patterns using Redis’ built‑in `MONITOR` and `INFO` metrics, discovering a Zipf distribution where 20 % of keys accounted for 80 % of hits.  
2. I implemented a hybrid LRU‑LFU scheme: each node maintained an LFU counter per key but refreshed the “last used” timestamp only on reads to reduce write contention.  
3. To keep it scalable, eviction decisions were made locally per shard; I added a lightweight gossip protocol that periodically exchanged “hotness scores” between shards so hot items could be migrated without global locks.  
4. Finally, I wrapped the policy in a Go middleware that exposed metrics via Prometheus and allowed dynamic tuning of the eviction threshold based on CPU usage.

**Result**  
The new cache hit ratio jumped to 94 %, reducing backend query load by ~35 %. Latency during peak hours fell from 350 ms to 120 ms. I learned that combining LFU with localized LRU, plus a low‑overhead inter‑shard gossip, can deliver both high scalability and fine‑grained control over what stays in memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
