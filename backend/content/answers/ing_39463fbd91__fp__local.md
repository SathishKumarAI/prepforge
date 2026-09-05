---
qid: ing_39463fbd91__fp__local
question: 'Explain: Maintain a single API — Introduction to Apollo Federation - Apollo
  GraphQL Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 483
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:06:43-05:00'
sources: []
---

**Why one API matters**

A growing product usually accumulates dozens of micro‑services, each exposing its own REST or gRPC contract. Clients (web, mobile, partner) must learn *several* endpoints, keep them in sync, and negotiate versioning across teams. That fragmentation inflates maintenance cost, doubles network traffic, and erodes end‑to‑end performance guarantees.

**The fundamental problem**

We want a *single, stable GraphQL endpoint* that

1. **Hides internal boundaries** – clients need not know which service owns the data.
2. **Preserves autonomy** – each team can evolve its schema independently.
3. **Guarantees consistency** – queries are resolved once against a global view.

Apollo Federation is the architectural solution that satisfies these constraints by treating each micro‑service as a *subgraph* that contributes to a unified schema.

**How Federation works**

- Each subgraph declares its type definitions and *directives* (`@key`, `@requires`, `@provides`) that describe how entities are identified and composed.
- A **gateway** stitches these fragments at runtime, resolving references across services. The gateway performs a single round‑trip per query: it first fetches the “top‑level” fields from one subgraph, then follows reference directives to pull in dependent data from others.
- Because every subgraph is schema‑first, the gateway can validate the overall composition before deployment, preventing runtime failures.

**Underlying principle**

Federation turns *schema composition* into a declarative dependency graph. This mirrors *optimisation* in compiler design: each service is a module; the gateway performs a single pass to resolve references, analogous to link‑time resolution. The cost of distributed queries is bounded by the depth of reference chains, ensuring predictable latency.

**Non‑obvious insight**

Most developers overlook that the gateway’s *only* network calls are those mandated by the query’s shape. If a client requests only `user { id }`, the gateway need not touch any other subgraph—therefore, even with hundreds of services, a simple query can stay under 1 ms. This “zero‑touch” property is what makes Federation scalable: it decouples *client complexity* from *service scale*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
