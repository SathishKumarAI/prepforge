---
qid: ing_f5eaf4fc0b__star__local
question: 'Explain: Cache Warming — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 414
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:40:19-05:00'
sources: []
---

**Situation:**  
At Uber I was on the team that had to lift our real‑time fare estimate service from a single database read per request to handling roughly 40 million reads per second during peak hours, while keeping latency under 10 ms.

**Task:**  
Design an integrated cache layer that could pre‑warm data for hot routes and regions so we wouldn’t hit the underlying PostgreSQL cluster for every lookup, yet still serve fresh pricing data with minimal staleness.

**Action:**  
I chose a hybrid Redis + Memcached stack. First, I identified the top 5 % of origin‑destination pairs by traffic using Hadoop logs and built a “hotness” score. Using that, I scheduled nightly Spark jobs to pre‑load those key–value pairs into Redis, setting TTLs based on predicted demand windows. For cold data, we fell back to Memcached with an LRU policy. I also added a background worker that listened to Kafka updates from the pricing engine and pushed incremental changes into Redis in real time, ensuring consistency within 200 ms. We wrapped the cache calls behind a fault‑tolerant circuit breaker so that any downstream failure would automatically route reads back to PostgreSQL.

**Result:**  
The pre‑warming pipeline cut database reads by 85 %, allowing us to sustain 40 M reads/s with an average latency of 7 ms. We reduced the Postgres query load from 30 k QPS to under 3 k, saving a 15% cost on our cloud DB tier. I learned that aggressive pre‑warming combined with incremental cache updates can keep large services both fast and consistent without over‑provisioning storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
