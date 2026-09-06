---
qid: ing_9d5b19f1fd__fp__local
question: 'Explain: Resulting context — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 412
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:39:56-05:00'
sources: []
---

## Database‑per‑Service Pattern

**Problem it solves**  
In a monolith every module shares a single relational database. When scaling or evolving the system, any change to one domain (e.g., schema migration) forces a full redeployment and risks breaking unrelated services. Moreover, the “one‑size‑fits‑all” schema hampers isolation of performance, consistency, and access control concerns.

**Why it must work this way**  
Treat each service as an autonomous *data owner*. By giving it its own database you:

1. **Achieve bounded coupling** – Service changes never touch another’s data model.
2. **Respect the CAP theorem locally** – A service can choose consistency, availability, or partition tolerance that fits its use case (e.g., event‑sourced order service vs. read‑optimized analytics).
3. **Enable independent scaling** – Heavy write traffic in a payment service does not throttle user profiles because they live in separate storage engines.
4. **Facilitate polyglot persistence** – A graph DB for social graphs, a time‑series store for telemetry, all under the same umbrella.

**Deeper principle**  
This pattern is an application of *encapsulation* from object‑oriented design to data: each service encapsulates its state and exposes only a well‑defined API. The database becomes part of the service’s contract, not just a storage medium.

**Non‑obvious insight**  
The real benefit often comes from **eventual consistency through domain events**, not from isolation alone. When services publish changes to a message bus, other services can update their local caches or materialized views without requiring synchronous joins. Thus, the “database per service” pattern is less about siloing data and more about enabling *asynchronous integration* that scales horizontally and tolerates failures gracefully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
