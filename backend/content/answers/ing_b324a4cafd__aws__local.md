---
qid: ing_b324a4cafd__aws__local
question: 'Explain: Difference Between First level cache and Second level cache in
  Hibernate'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 479
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:43-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of an on‑prem Java e‑commerce platform to AWS, where we had to optimize Hibernate performance for the product catalog service that handled ~3 M requests/day.

**Action** – *Ownership + Dive Deep*  
- **First‑Level Cache (1LC)**: I explained that it is the session‑scoped cache—each `EntityManager` holds a private map of entities. It eliminates redundant SQL within a transaction but never shares across sessions, so its size is bounded by JVM heap and is volatile on shutdown.  
- **Second‑Level Cache (2LC)**: I designed a distributed cache using **Amazon ElastiCache for Redis** as the provider. 2LC is session‑independent; it stores entities in a shared store that survives restarts, reduces database roundtrips across all application nodes, and supports eviction policies (LRU/TTL).  
- Implemented Hibernate’s `@Cacheable` on key domain tables, tuned `hibernate.cache.region.factory_class`, and added cache‑hit/miss metrics to CloudWatch.

**Result** – *Deliver Results*  
Post‑deployment we saw a **62 % drop in DB query volume** (from 2.4 M to 0.9 M per day) and a **35 % latency reduction** for catalog reads, cutting AWS RDS cost by ~$1.5k/month while keeping cache costs <$300.

**Learning from Failure** – *Bias for Action*  
Initial attempts used local memory 2LC (Hazelcast), which caused stale data after node restarts; switching to Redis resolved consistency issues and improved reliability.

---

### What a bar‑raiser looks for
- **Ownership**: Took end‑to‑end responsibility, from analysis to deployment.  
- **Dive Deep**: Detailed distinction between 1LC & 2LC, plus AWS service rationale.  
- **Quantified Impact**: Clear metrics on query reduction and cost savings.  
- **Learning**: Adapting cache strategy after observing failure modes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
