---
qid: ing_0c837866a2__aws__local
question: 'Explain: Read replicas — Caching strategies for Memcached - Amazon ElastiCache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 458
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:53:56-05:00'
sources: []
---

**Situation**  
While revamping a high‑traffic e‑commerce catalog, I noticed that our single RDS instance was throttling reads during flash sales. The customer experience (page load < 200 ms) slipped below the 95th percentile SLA.

**Task**  
I had to design a low‑latency read layer that would scale with traffic spikes while keeping costs under $1,000/month and ensuring data consistency for product inventory.

**Action**  

| Step | Design Decision | AWS Service(s) |
|------|-----------------|---------------|
| 1 | **Read replicas** – Provision 2 Multi‑AZ RDS Aurora PostgreSQL read replicas to offload SELECT traffic. | Amazon RDS, Aurora |
| 2 | **Cache layer** – Deploy an ElastiCache Redis cluster (cluster mode disabled, 3 shards) for hot keys: product SKU → price & stock. | Amazon ElastiCache – Redis |
| 3 | **Write‑through strategy** – On inventory updates, write to DB first, then publish a message on SNS; Lambda invalidates corresponding cache key. | SNS, Lambda |
| 4 | **Cache eviction policy** – LRU with max memory 1 GB per node; set TTL of 10 min for non‑critical data. | ElastiCache Redis |
| 5 | **Monitoring & scaling** – CloudWatch alarms on CPU/Memory >70% trigger Auto Scaling (up to 5 nodes). | CloudWatch, Auto Scaling |

**Result**  
- Read latency dropped from 350 ms to <120 ms (90th percentile) during peak sales.  
- RDS read traffic decreased by **68 %**, saving ~$400/month on instance hours.  
- Cache hit rate reached **92 %**; inventory consistency maintained with <1 s staleness.  

**Reflection**  
I owned the end‑to‑end flow, diving deep into metrics to validate each layer’s impact. The trade‑off of an extra cache layer was justified by the measurable performance uplift and cost savings—an example of *Bias for Action* coupled with *Customer Obsession*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
