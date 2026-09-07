---
qid: ing_a40a2b49fa__aws__local
question: 'Explain: Application Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 490
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:22-05:00'
sources: []
---

**Answer – “What is application cache?” (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* & *Ownership*

---

### Situation / Task  
In a recent e‑commerce microservice that powers product recommendations, the latency of the recommendation API jumped from 120 ms to over 2 s during peak traffic. The customer experience score dropped by 4 points in the weekly NPS survey.

### Action (Design)  
I owned the issue and **dive deep** into the architecture:

| Requirement | Design Decision | AWS Service(s) |
|-------------|-----------------|---------------|
| Low read latency | Use an in‑memory cache that sits *in front of* the recommendation model | **Amazon ElastiCache – Redis** (clustered, replication group) |
| High availability | Multi‑AZ cluster with automatic failover | Same ElastiCache cluster |
| Cost efficiency | Cache only hot data (top 10 % of products) and use a TTL of 15 min | Redis eviction policy `volatile-lru` |
| Data freshness | Publish‐subscribe on model updates; invalidate cache keys via **Amazon SNS** + Lambda | SNS → Lambda → ElastiCache `EXPIRE` |

The cache stores pre‑computed recommendation vectors keyed by user ID. Reads hit Redis first; if a miss occurs, we fetch from DynamoDB and populate the cache.

### Result  
- **Latency** dropped from 2 s to 130 ms (≈ 93% reduction).  
- **Throughput** increased: API handled 4× more requests per second before throttling.  
- **Cost** of caching was $0.12/hr, amortized over a 3‑month period equaling a savings of ~$2k/month compared to the cost of scaling the recommendation compute layer.

### Reflection (Bar‑raiser check)  
I documented the cache eviction policy and set up CloudWatch metrics (`CacheHitRate`, `CacheMisses`) with alarms. After deployment, I ran a rollback plan that restored the previous state in under 5 min if any regressions were detected. This demonstrates *Ownership*, *Dive Deep*, and *Bias for Action*—key signals for a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
