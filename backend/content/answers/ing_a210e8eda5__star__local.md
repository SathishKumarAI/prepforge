---
qid: ing_a210e8eda5__star__local
question: What are you using that lock for? — How to do distributed locking \u2014
  Martin Kleppmann\u2019s blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 343
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:40-05:00'
sources: []
---

**Situation:**  
During a production rollout of an online recommendation engine, we discovered that our micro‑service responsible for updating user preference vectors was occasionally re‑executing the same batch job simultaneously across multiple instances. This caused duplicate writes to Redis and spurious spikes in latency.

**Task:**  
I needed to implement a reliable distributed lock so that only one instance could run the update job at any given time, without adding significant overhead or risking deadlocks.

**Action:**  
Following Martin Kleppmann’s blog on distributed locking, I chose Redlock with Redis. First, I set up five independent Redis shards and wrote a lightweight wrapper around the `SET key value NX PX` command to acquire a lock with a 30‑second lease. The job would renew the lease every 10 seconds while it was still running. On failure or shutdown, the lock automatically expired. I also added a fallback counter in DynamoDB to detect missed releases and trigger manual cleanup if needed. All this logic lives in a Go micro‑service that runs as part of the scheduler.

**Result:**  
After deployment, concurrent job executions dropped from 4× per minute to zero. Cache consistency improved by 92 %, and request latency fell from 350 ms to 210 ms on average. I learned how to balance strict consistency with high availability using a proven algorithm like Redlock, and that monitoring lock metrics is as important as the implementation itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
