---
qid: ing_5aeb33f3a3__aws__local
question: 'Explain: System APIs — Twittersearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 592
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:13-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with building a high‑throughput “TwitterSearch” API that could return the top 100 most recent tweets containing any user‑supplied keyword, within <200 ms for up to 10k concurrent requests per second. The goal was to power an internal analytics dashboard used by 50 data scientists.

**Action**  
I designed a serverless architecture:

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| API gateway | Amazon API Gateway + Lambda Authorizer | Zero‑touch scaling, request throttling |
| Compute | AWS Lambda (Python) | Stateless, autoscaling, 100 ms cold‑start window |
| Data store | DynamoDB Global Secondary Index on `keyword` → `tweet_id`, sorted by timestamp | Sub‑millisecond reads, multi‑AZ availability |
| Ingestion | Kinesis Data Streams → Lambda → DynamoDB Streams | Real‑time ingestion with exactly‑once semantics |
| Cache | Amazon ElastiCache for Redis (cluster mode) | 99.9 % cache hit rate for popular keywords, cuts DB read latency |

I added a **dedicated “search worker”** that pre‑aggregates trending keyword results into the cache on a 5‑second window, reducing Lambda invocations by ~70 %. The system achieved:

* **Latency:** 180 ms average (95th percentile < 250 ms)  
* **Throughput:** 12k RPS sustained, burst up to 20k RPS  
* **Cost:** $0.004 per request vs. $0.02 for a monolithic EC2 solution

**Result**  
The dashboard’s response time dropped from 1.5 s to <200 ms, boosting analyst productivity by 40 %. The architecture was later adopted company‑wide for other search services.

---

### Leadership Principles Highlighted
* **Customer Obsession:** I relentlessly focused on the end users’ latency expectations and iterated until we met their needs.  
* **Ownership & Dive Deep:** I owned the full stack, from ingestion to cache, diving into DynamoDB partitioning and Lambda concurrency limits to avoid bottlenecks.

---

### Bar‑raiser Takeaways
* Demonstrated *ownership* by handling every layer of the system.  
* Showed *deep technical insight* (partition key design, cache invalidation).  
* Quantified impact with real metrics (latency, cost savings, productivity gain).  
* Learned from early failures—initial Lambda cold‑starts caused >300 ms spikes; I introduced provisioned concurrency to solve it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
