---
qid: ing_00ba4af517__aws__local
question: How to fetch the value of the distributed counter?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 454
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:26:04-05:00'
sources: []
---

**Situation / Task**

At a previous role I was tasked to expose the real‑time value of a distributed click‑counter that fed into our recommendation engine. The counter lived across multiple application nodes and had to be read with millisecond latency while keeping costs low.

**Action**

I chose **Amazon DynamoDB** with an *atomic counter* attribute, because it guarantees strong consistency for single‑item updates and scales horizontally without sharding logic.  
1. Each service instance increments the counter via `UpdateItem` with `ADD`.  
2. To fetch the current value I used a simple `GetItem`, which is 99 % read‑throughput cheap.  
3. For observability I added an **Amazon CloudWatch** metric filter on the DynamoDB table to emit every increment as a custom metric, allowing us to monitor growth and detect anomalies in near real‑time.

I also implemented a *cache layer* using **ElastiCache for Redis* with `GET`/`SET` commands for reads that could tolerate 1 s staleness. The cache was refreshed via DynamoDB Streams + Lambda whenever the counter changed, ensuring eventual consistency while keeping read latency <5 ms.

**Result**

- Read latency dropped from ~120 ms (REST API) to <5 ms (cache).  
- Cost per month fell by 35 % because we reduced DynamoDB provisioned throughput.  
- The solution handled a peak write rate of 10,000 ops/s without throttling, and the cache hit ratio stayed above 92 %.

**Reflection**

This project reinforced **Ownership** – I took full responsibility for the counter’s reliability and cost. It also exemplified **Dive Deep**: I evaluated DynamoDB vs. Redis, benchmarked latency, and quantified trade‑offs. Finally, I learned that even simple counters can become bottlenecks if not designed with scalability in mind, so I built observability into the architecture from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
