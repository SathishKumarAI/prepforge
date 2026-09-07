---
qid: vq_7326a2762e__aws__local
question: How can I get the definition of a view ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 552
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:57:47-05:00'
sources: []
---

**S – Situation**

While migrating our analytics platform from an on‑premise Oracle DB to **Amazon Aurora PostgreSQL**, I was asked by the data science team to expose every view’s definition so they could audit lineage and rebuild downstream dashboards in a new BI tool. The existing “SHOW CREATE VIEW” command didn’t work in Aurora, and we had 1,200 user‑defined views across two schemas.

**T – Task**

Design a scalable, cost‑efficient solution that lets any developer retrieve a view’s SQL definition on demand without pulling the entire system catalog into application memory.

**A – Action**

I built an **AWS Lambda** microservice (Python 3.10) behind API Gateway, using **RDS Data Service** to query `information_schema.views` and `pg_get_viewdef()`. The Lambda reads only the requested view name, returns a JSON payload, and caches results in **Amazon ElastiCache for Redis** with a 12‑hour TTL.

Key decisions:
- *AWS Services*: RDS Aurora PostgreSQL (source), Lambda (compute), API Gateway (exposure), ElastiCache (cache).
- *Scalability*: Lambda scales to thousands of concurrent requests; cache hits reduce DB load by ~95 % during peak.
- *Availability*: Multi‑AZ Aurora + read replica for failover; Lambda retries with exponential backoff.
- *Cost*: 12 h TTL keeps Redis memory low (~200 MiB). Estimated $0.02/month for Lambda invocations, < $1/month for ElastiCache.

**R – Result**

Within two days I had a production‑ready endpoint that served view definitions in <50 ms on average, with a 99.9 % success rate. The team cut dashboard rebuild time from **3 weeks to 2 days**, and the service logged 5,000+ requests/month with zero outages.

**Leadership Principles**

- **Ownership** – I took end‑to‑end responsibility for the feature, from requirement gathering through deployment.
- **Dive Deep** – Investigated Aurora’s catalog behavior, benchmarked query plans, and tuned cache eviction policies.  
- **Customer Obsession** – Delivered a low‑latency API that directly addressed data scientists’ pain points.  

Bar‑raisers will note my quantitative impact (time saved, cost), the depth of AWS service selection, and how I learned from an initial “no‑cache” prototype that hit DB throttling during load tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
