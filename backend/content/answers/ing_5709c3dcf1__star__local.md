---
qid: ing_5709c3dcf1__star__local
question: What is a Leaderboard? — Leaderboard System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 411
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:22:04-05:00'
sources: []
---

**Situation:**  
At my last startup we built an online coding challenge platform that ran weekly contests. The user base grew from 5k to 70k in six months, and our existing leaderboard page started lagging: page loads hit 4 s under peak load, and users complained the rankings weren’t updating in real time.

**Task:**  
I was tasked with redesigning the leaderboard system so it could handle 30 k concurrent queries per minute, update instantly after each submission, and still keep memory usage below 2 GB on our servers.

**Action:**  
I broke the problem into three layers:  
1. **Ingest & score engine** – a Kafka stream ingests submissions; a Spark job recalculates scores every 10 s, writing a sorted list of user IDs to Redis Sorted Sets (ZSET).  
2. **Cache layer** – the top‑1000 ranks are cached in Memcached for lightning‑fast reads; we use Redis for full leaderboard paging with `ZRANGE` and `ZSCORE`.  
3. **API & front end** – a Go microservice exposes `/leaderboard?page=1&size=50`, pulling data from Redis, paginating, and returning JSON. We added rate limiting (token bucket) to protect the cache.

I also implemented a background job that snapshots the full leaderboard to S3 every hour for disaster recovery.

**Result:**  
After deployment, page latency dropped to 250 ms under peak load, and rank updates appeared within 2 s of submission. User engagement on contests increased by 18%, and we eliminated complaints about stale rankings. I learned how careful layering—streaming ingestion, real‑time caching, and efficient pagination—can turn a slow, monolithic leaderboard into a scalable, near‑real‑time system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
