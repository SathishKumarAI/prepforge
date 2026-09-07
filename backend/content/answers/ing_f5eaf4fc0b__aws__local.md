---
qid: ing_f5eaf4fc0b__aws__local
question: 'Explain: Cache Warming — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 594
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:01-05:00'
sources: []
---

**Situation** – In my last role at a ride‑hailing startup I was tasked with delivering **40 M reads/s** for the trip‑history API that powered real‑time driver dashboards and surge pricing. The data lived in an S3 “online” store, but latency of 300–500 ms per request would kill our SLAs.

**Task** – Design a cache‑warming pipeline that kept frequently accessed rows hot while still honoring eventual consistency with the source store.

**Action** –  
1. **Data Ingestion** – A Kinesis Data Stream captured every trip write and sent an event to a Lambda function.  
2. **Cache Population** – The Lambda invoked *Amazon ElastiCache for Redis* (clustered, read‑replica enabled). It used `MSET` with a 24 h TTL to batch writes, guaranteeing O(1) lookups.  
3. **Read Path** – API Gateway → Lambda → Redis lookup → fallback to S3 via `GetObject`. The Lambda cached the hit in Redis for subsequent requests.  
4. **Monitoring & Auto‑Scaling** – CloudWatch metrics (`CacheHitRate`, `CPUUtilization`) fed into an Application Auto Scaling policy that spun up additional shards when `hit_rate < 0.95` or `cpu > 70%`.  

**Result** – Cache hit rate rose from 12 % to **>93 %**, reducing read latency from 450 ms to **<10 ms** and cutting backend compute costs by **$1.2M annually**. We also avoided over‑provisioning by scaling only when traffic spikes (e.g., during promotions).

---

### Bar‑raiser signals

| Principle | What I did | Why it matters |
|-----------|------------|----------------|
| **Ownership** | Built end‑to‑end pipeline, from stream to cache to API. | Took responsibility for latency and cost. |
| **Dive Deep** | Benchmarked Redis vs DynamoDB, modeled TTL impacts, tuned shard count. | Showed technical depth and trade‑off analysis. |
| **Deliver Results** | Quantified hit rate, latency, cost savings. | Demonstrated measurable business impact. |
| **Learn from Failure** | After a 12 % cache miss spike during a promotion, added adaptive TTL logic—learning loop closed. | Continuous improvement mindset. |

> *“If the cache is cold, you’re just reading from S3 forever.”* – I turned that insight into an automated warm‑up system that kept our API blazing fast and cost‑efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
