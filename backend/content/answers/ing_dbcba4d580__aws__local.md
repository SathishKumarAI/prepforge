---
qid: ing_dbcba4d580__aws__local
question: 'Explain: State Strategy — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 452
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:31-05:00'
sources: []
---

**State Strategy – Architecture Patterns**

*Leadership Principles:* **Customer Obsession** (understand how state drives user experience) & **Ownership** (own end‑to‑end data flow).

**Situation**  
In 2023 I led a migration of our real‑time recommendation engine from a monolithic Java service to a microservice architecture on AWS. The old system stored session state in an in‑memory cache that was flaky and grew linearly with traffic, causing 12 % latency spikes during peak hours.

**Task**  
Redesign the state strategy so we could (1) keep user context across services, (2) scale horizontally without bottlenecks, and (3) reduce operational cost by 30%.

**Action**  
I chose a **CQRS + Event Sourcing** pattern.  

- *Command* service writes to an **Amazon DynamoDB** table (`UserSession`) with a global secondary index on `userId`.  
- *Query* service reads from the same table via **DynamoDB Streams → AWS Lambda → Amazon API Gateway** for low‑latency lookups.  
- All state changes are published to **Amazon EventBridge**, consumed by downstream microservices (e.g., personalization, analytics).  

This decouples read/write paths, enables auto‑scaling, and removes the single point of failure. I also introduced **AWS AppConfig** for feature flags, allowing us to roll out new state models safely.

**Result**  
Post‑migration, average session lookup latency dropped from 180 ms to 35 ms (84 % improvement). Peak traffic handling increased from 10k RPS to 50k RPS without additional cost. Operational spend fell by 28 %, and we eliminated the previous cache failure incidents entirely.

**Learnings**  
I iterated on schema design with real‑world traffic, discovered that a composite key (`userId#timestamp`) improved write throughput, and documented rollback procedures—critical for any bar‑raiser evaluating ownership and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
