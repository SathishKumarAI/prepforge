---
qid: ing_550409f224__star__local
question: 'Explain: Fan-out-on-read (Pull Model) for Celebrities'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 364
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:00-05:00'
sources: []
---

**Situation**  
At my previous startup we launched a “Celebrity Feed” where users could follow their favorite stars. The feed was built on our real‑time messaging layer, but as follower counts grew to over 5 million per celeb, the push model started choking the network and caused latency spikes.

**Task**  
I had to redesign the distribution so that reads were cheap for the backend while still delivering fresh content to millions of users. The goal was a pull‑based fan‑out that kept read latency under 100 ms and reduced write amplification by at least 70%.

**Action**  
I introduced a fan‑out‑on‑read architecture using a distributed key‑value store (Apache Cassandra) for per‑user “feed cursors.” When a user opened the app, the client pulled the latest cursor from the *celeb‑meta* table and requested only new posts via a lightweight query to the *post‑shard* tables. I implemented a background compaction job that periodically merged recent posts into each user’s local cache in S3, leveraging AWS Lambda for incremental updates. This kept the write path simple (single append per post) while the read path remained efficient.

**Result**  
The new pull model cut our average read latency from 250 ms to 75 ms and reduced write traffic by 68%. We also saw a 30% drop in API error rates during peak hours. The experience taught me how to balance consistency, scalability, and cost when shifting from push to pull fan‑out patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
