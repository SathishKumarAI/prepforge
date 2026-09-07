---
qid: ing_b14171c0a7__aws__local
question: 'Explain: Scalability — What is Distributed Caching? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 444
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:05:53-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Situation:** In a recommendation micro‑service that processes 5 M requests/day, the cache hit ratio dropped from 85 % to 48 % after a traffic spike, increasing latency from 12 ms to 120 ms.  
> **Task:** Restore and future‑proof caching so that latency stays <20 ms while scaling to 10× traffic with zero single points of failure.  
> **Action:**  
> * Adopted **Distributed Caching** using **Amazon ElastiCache for Redis** in a multi‑AZ, cluster mode (sharding).  
> * Implemented **read‑through cache** via a thin wrapper that first checks the local shard, then falls back to DynamoDB if missing, writing back asynchronously.  
> * Enabled **Redis persistence (RDB/AOF)** and **cross‑region replication** for disaster recovery.  
> * Added **Auto Scaling** on CPU/Memory thresholds and leveraged **AWS CloudWatch Alarms** to trigger node addition before latency spikes.  
> * Conducted a load test: hit ratio improved to 94 %, average latency 18 ms, cost reduced by 30 % vs. RDS‑only caching.  
> **Result:** The service now handles 50 M requests/day with <5 % error rate and a 95th percentile latency of 17 ms. The distributed cache architecture earned a 4/5 “Outstanding” score in the quarterly performance review.  

**Leadership Principles Anchored:**  
- **Customer Obsession:** Deliver fast, reliable recommendations.  
- **Ownership & Dive Deep:** Diagnosed root cause, engineered end‑to‑end solution, and monitored long‑term health.  

*Bar‑raiser focus:* Demonstrated ownership by leading the redesign, depth in understanding cache mechanics, quantified impact (latency & cost), and iterated from failure (initial single node).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
