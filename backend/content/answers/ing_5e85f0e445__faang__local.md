---
qid: ing_5e85f0e445__faang__local
question: 'Explain: Push Me Pull Me — The Architecture Twitter Uses to Deal with 150M
  Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 548
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:23:38-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to describe Twitter’s “Push‑Me‑Pull‑Me” architecture that supports ~150 M active users, 300 K QPS, a 22 MB/s firehose, and delivers tweets in <5 s. Key assumptions:  
- All user timelines must be updatable in real time.  
- Latency target is end‑to‑end (publish → delivery).  
- System tolerates high write churn while keeping reads fast.

**2️⃣ Approach**  
Outline the two complementary flows:  
1. **Push** – fan‑out writes from the publisher to followers’ inboxes at write time.  
2. **Pull** – on read, fetch from a local cache or DB rather than recomputing.  

Explain that Twitter uses “fan‑out‑on‑write” into per‑user “timeline tables” in distributed NoSQL stores (e.g., Cassandra), and a CDN/edge layer for quick reads.

**3️⃣ Depth**  
- **Write path:** Tweet → Partitioned by user ID → Insert into the author’s stream. A background job (or microservice) pushes that tweet to each follower’s inbox table.  
- **Read path:** User pulls timeline → Service first queries a local memcached layer; on miss, reads from Cassandra. Results are merged with recent activity from a “real‑time” queue (Kafka).  
- **Firehose handling:** Tweets stream into Kafka topics; consumer groups write to both the author’s and followers’ tables. The 22 MB/s rate is split across many partitions for parallelism.  
- **Scalability trade‑offs:** Push increases writes (fan‑out cost) but gives sub‑second reads. Pull reduces write load but can increase read latency if cache misses.

**4️⃣ Edge Cases**  
- New users with millions of followers → fan‑out burst; mitigated by throttling and sharding.  
- High churn accounts → frequent follower changes require re‑push logic.  
- Cache eviction patterns → need consistent eviction policy to avoid stale timelines.

**5️⃣ Optimize & Communicate**  
Potential improvements:  
- Use “hybrid” fan‑out (push for high‑follow users, pull otherwise).  
- Introduce incremental refresh of timelines via change‑data capture.  
- Add read‑through caching with probabilistic TTLs.  

Explain trade‑offs clearly and finish by summarizing how the Push‑Me‑Pull‑Me model balances write amplification against low‑latency reads to meet Twitter’s massive scale and SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
