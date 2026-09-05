---
qid: ing_13e1623ec3__fp__local
question: 'Explain: Connect APIs declaratively — Introduction to Apollo Federation
  - Apollo GraphQL Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 400
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:47:33-05:00'
sources: []
---

## Why we need a *declarative* federation

In a micro‑service world each team owns its own data source (SQL, NoSQL, legacy REST).  
A client wants to ask for “author with books and reviews” in one round trip.  
The naive way is to orchestrate multiple HTTP calls, merge results, handle partial failures, and keep the contracts in sync.

From an **information‑theoretic** point of view we want a *single* query that yields exactly the data the client asked for, no more, no less.  
We also want to respect the **principle of least surprise**: each service declares *what it owns*, not *how it is composed*.  

### Declarative composition

Apollo Federation lets each micro‑service expose a **subgraph schema** that is an *extension* of the global GraphQL schema.  
The gateway stitches them together by:

1. **Schema stitching** – a static, compile‑time merge of type definitions.
2. **Resolvers as data sources** – at runtime, only the fields needed for the query are fetched.

Because the gateway only asks for what the client requested (query shape), it follows the *declarative* paradigm: “I want these fields; give me them.”  

### Non‑obvious insight

The real power is in **type composition**, not just field delegation.  
A service can expose a type that other services extend (`extends Author`).  
This means *cross‑service inheritance* without duplicating data or breaking encapsulation, enabling the gateway to perform **optimistic caching** and **automatic query planning**.  

In short, Apollo Federation turns a collection of independent GraphQL APIs into a single, optimally queried surface while preserving each service’s autonomy—exactly what a declarative system should achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
