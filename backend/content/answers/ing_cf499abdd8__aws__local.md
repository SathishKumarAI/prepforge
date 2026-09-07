---
qid: ing_cf499abdd8__aws__local
question: 'Explain: In the cloud — Redis - Real-time data for agents & apps'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 463
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:09:31-05:00'
sources: []
---

**Situation / Task**  
While leading the real‑time analytics team at my previous company, we had to feed live agent dashboards and mobile apps with up-to‑to‑second inventory data. The existing batch pipeline lagged 3 minutes, hurting customer experience (CSAT dropped from 92 % to 85 %).  

**Action**  
I owned the redesign: I scoped a Redis‑based in‑memory store on **Amazon ElastiCache for Redis** and built a producer–consumer architecture using **AWS Kinesis Data Streams** → **Lambda** → **ElastiCache**.  
*Data flow*: Event producers (microservices) push JSON records to Kinesis; Lambda transforms the payload, writes to a sorted set keyed by agent ID.  
I added an auto‑scaling policy on ElastiCache based on CPU/eviction metrics and leveraged Redis Cluster mode for high availability.  
For cost control I enabled **Redis Memory Optimized** nodes (T4g) and reserved 1‑year instances, cutting monthly spend from $3 k to $1.2 k while maintaining <50 ms latency.

**Result**  
Real‑time dashboards updated in <30 ms; mobile app queries answered within 40 ms. CSAT rebounded to 91 % and we logged a 15 % lift in agent productivity (fewer back‑and‑forth calls).  

**Reflection**  
I practiced *Ownership* by iterating on the design after post‑mortem: adding TTLs to prevent stale data, and creating an automated health check that auto‑fails over to a read replica. This “bias for action” move saved 2 hours of manual intervention per week.

---

> **Bar‑raiser notes**  
> *Ownership*: Took full responsibility from design through deployment.  
> *Dive Deep*: Quantified latency, cost, and scalability trade‑offs.  
> *Quantified Impact*: CSAT & productivity metrics.  
> *Learning*: Implemented TTLs after noticing stale data spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
