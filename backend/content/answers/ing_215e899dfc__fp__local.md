---
qid: ing_215e899dfc__fp__local
question: 'Explain: Introduction to Apollo Federation - Apollo GraphQL Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 384
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:17:13-05:00'
sources: []
---

**Why do we need federation?**  
A modern data ecosystem rarely lives inside a single monolith. Different teams own distinct domains—users, products, payments—and each exposes its own GraphQL schema to internal services and external partners. If every consumer had to stitch these schemas together manually, the cost of integration would grow linearly with the number of services, drowning developers in boilerplate and breaking encapsulation.

**The principle at play: modular composability.**  
Federation treats a *global schema* as an emergent property of independently deployable sub‑schemas. Each service declares *entity types* (e.g., `User` or `Product`) that it owns, annotating fields with directives (`@key`, `@external`, `@provides`). The gateway then resolves references across services at query time: when a client requests `user { name }`, the gateway consults the owning service for the entity key and forwards the rest of the request. This is essentially *decentralized join*—the database‑style merge happens in the runtime, not in code.

**Non‑obvious insight:**  
Federation’s value isn’t just that you can combine schemas; it’s that **entities become first‑class, contract‑based APIs**. By committing to a key and exposing only the minimal surface needed for cross‑service resolution, teams can evolve their subschemas without breaking downstream consumers—akin to version‑agnostic interfaces in distributed systems.

**Bottom line:**  
Apollo Federation solves the “big schema” problem by formalising inter‑service contracts through GraphQL directives, enabling a single, type‑safe gateway that orchestrates queries across many autonomous services while preserving encapsulation and evolvability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
