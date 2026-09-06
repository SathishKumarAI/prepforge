---
qid: ing_55f515d028__fp__local
question: 'Explain: Related patterns — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 397
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:07:28-05:00'
sources: []
---

**Pattern: “Database per Service”**

*Fundamental problem.*  
In a distributed system the single‑source‑of‑truth database becomes a bottleneck for latency, availability, and fault isolation. A change to one service’s schema forces coordinated migrations; a failure or lock in that database stalls every consumer.

*Why it must work this way.*  
Treat each service as an autonomous entity with its own bounded context (DDD). Its data is the only thing it owns, so it can evolve without coordinating with others. This yields **independent scalability**: read/write throughput is tuned to the service’s workload, and horizontal sharding or caching can be applied locally. It also guarantees **high availability**—a crash in one database doesn’t cascade because other services don’t depend on its tables.

*Deeper principle.*  
This pattern enforces a *data‑ownership* invariant that mirrors the *single responsibility* principle in software design: each service is responsible for its own state, and no cross‑service transactions are needed. It turns distributed consistency from a global constraint into a local one; eventual consistency between services can be achieved via event streams (CQRS/ES).

*Non‑obvious insight.*  
A common misconception is that “no shared database = no data duplication.” In reality, the pattern encourages **intentional duplication**: each service exposes its own read model through events or APIs. The duplication is not a flaw but an optimization—each replica can be tuned for its query patterns, reducing cross‑service latency and allowing independent caching strategies.

Thus “Database per Service” solves scalability, fault isolation, and evolution at the cost of intentional data replication, which becomes a powerful performance lever when managed correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
