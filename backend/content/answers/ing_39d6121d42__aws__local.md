---
qid: ing_39d6121d42__aws__local
question: 'Explain: Domain Driven Design — 8 Key Concepts in Domain-Driven Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 431
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:09-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: I led a 6‑person team that had to build a recommendation engine for an e‑commerce marketplace. The business required the model to adapt in real time while keeping latency under **50 ms** and cost below **$0.05 per inference**.

*Task*: My job was to structure the solution so that every domain concept (Product, User, Session, Inventory) was clearly modeled, ensuring clean boundaries between the data pipeline, feature store, and model serving layers.

*Action*:  
1. **Bounded Contexts** – Defined separate contexts for *Catalog*, *User Profile*, and *Pricing*. Each had its own Event Store in **Amazon DynamoDB Streams** to keep domain events isolated.  
2. **Aggregates & Entities** – Implemented `ProductAggregate` with a strong consistency rule: inventory updates trigger an event that propagates to the recommendation model via **Kinesis Data Streams**.  
3. **Value Objects** – Created immutable structs for `Price`, `Weight`, and `Category`. They were stored in **Amazon S3** as Parquet files for efficient batch training.  
4. **Domain Services** – Encapsulated cross‑cutting logic (e.g., discount calculation) into stateless Lambda functions behind an API Gateway, scaling to 10k QPS.  
5. **Repositories & Factories** – Used the Repository pattern backed by **DynamoDB** and a Factory that materialized aggregates from event streams.

*Result*: The system delivered predictions with <45 ms latency, reduced inference cost by **32%**, and allowed feature roll‑outs in under 4 hours—meeting SLA while keeping the codebase maintainable.  

**Learning**: Early iterations suffered from “tight coupling” between contexts; refactoring to true bounded contexts cut debugging time by **70%** and increased developer velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
