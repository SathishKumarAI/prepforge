---
qid: ing_fa2f6a4029__star__local
question: 'Explain: Consistency vs Availability — 10 System Design Tradeoffs You Cannot
  Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 303
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:53-05:00'
sources: []
---

**Situation**  
While leading the deployment of a real‑time recommendation engine at an e‑commerce startup, we were scaling from 50k to 500k active users daily. Our new microservice architecture used Redis for caching and a PostgreSQL cluster for persistent storage.

**Task**  
I had to decide whether to prioritize consistency (ensuring every user saw the same product ranking) or availability (allowing reads during node failures). The trade‑off would affect latency, fault tolerance, and business metrics like click‑through rate.

**Action**  
I ran a controlled experiment: in one shard we enforced strict ACID transactions on PostgreSQL; in another we used Redis with eventual consistency and a read‑repair background job. We monitored read/write latency, error rates, and user engagement. I also set up Prometheus alerts to detect split‑brain scenarios.

**Result**  
The consistent shard had 15 ms higher latency but a 4% drop in conversion rate during peak traffic. The eventually consistent shard kept latency under 5 ms and maintained conversions, though occasional stale recommendations appeared for ~0.3% of users. We adopted the eventual consistency model with a fallback sync mechanism, boosting overall revenue by $120k/month and teaching us that availability often outweighs strict consistency in high‑traffic ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
