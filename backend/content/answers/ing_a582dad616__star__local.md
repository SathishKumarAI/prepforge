---
qid: ing_a582dad616__star__local
question: 'Explain: Data Criticality — Strong vs. Eventual Consistency - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 313
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:01-05:00'
sources: []
---

**Situation:**  
At my previous role, we were building a recommendation engine for an e‑commerce platform that served millions of users daily. The product catalog data was stored in a distributed NoSQL store (Cassandra) and the real‑time personalization layer read from it via a caching tier.

**Task:**  
I had to decide whether to enforce strong consistency on the cache updates or allow eventual consistency, balancing latency against correctness for price‑sensitive promotions that could change within seconds.

**Action:**  
I designed an adaptive consistency layer: critical “price” and “availability” fields were written with a two‑phase commit across replicas (strong consistency) using lightweight transactions. Less critical attributes like “description” or “image URL” used simple writes with asynchronous replication (eventual consistency). I instrumented the cache to refresh immediately on strong‑write commits, while polling for eventual changes every 5 seconds. We also added a monitoring dashboard that flagged read anomalies and allowed rollback if stale data caused a pricing error.

**Result:**  
The system reduced incorrect price displays from 0.8% to <0.01%, improved latency by ~30 ms on average due to fewer blocking writes, and cut the number of cache‑miss incidents by 25%. I learned that applying consistency selectively—strong for high‑risk data and eventual for low‑impact fields—yields a practical balance between performance and correctness in large‑scale ML‑driven services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
