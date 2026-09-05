---
qid: ing_03d54e8ad1__star__local
question: 'Explain: Business Entities — 8 Key Concepts in Domain-Driven Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 389
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:13-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, the product team was building an automated credit‑scoring engine. The legacy database had tables named “Customer,” “Account,” and “Transaction,” but the new machine‑learning pipeline needed clear semantic boundaries to feed feature engineering.

**Task**  
I was tasked with refactoring the domain model into clean business entities that would both satisfy the ML workflow and align with Domain‑Driven Design principles. The goal was to reduce data duplication, improve query performance, and provide a single source of truth for every entity.

**Action**  
First, I mapped each table to one of the eight key DDD concepts: *Entity* (Customer), *Value Object* (Address, CreditScoreRange), *Aggregate Root* (Account with its transactions as children), *Domain Service* (RiskAssessmentService that aggregates scores), *Repository* (IAccountRepo using EF Core), *Factory* (CreditProfileFactory to build profiles from raw data), *Specification* (HighRiskCustomerSpec for filtering), and *Domain Event* (AccountOpened). I then implemented a bounded context “Credit” with clean interfaces, added domain events to trigger ML feature updates, and used CQRS so read models could be materialized for fast inference.

**Result**  
The refactor cut query latency by 35 % and eliminated the need for ad‑hoc joins in the ML pipeline. Feature engineering time dropped from 4 hours to under an hour per batch, enabling near‑real‑time score updates. I learned that aligning business entities with DDD concepts not only streamlines data flow but also gives the ML team a stable, self‑documenting schema that scales with new models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
