---
qid: ing_b2fabfbee7__faang__local
question: 'Explain: Part 2 - Register a Query — How GraphQL Works at LinkedIn'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 583
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:39:58-05:00'
sources: []
---

**Clarify**  
You’re asking how LinkedIn’s “Register a Query” feature uses GraphQL: what the client sends, how it is parsed, routed, and executed on the server side. I’ll assume we’re talking about the internal analytics engine that powers the **“Query Registry”** used for ad targeting.

**Approach**  
1. Define the request shape (query string + variables).  
2. Show GraphQL schema mapping to micro‑services.  
3. Explain query parsing, validation, and execution plan.  
4. Detail caching & batching.  
5. Mention observability hooks.

**Depth**  
- **Client side:** `POST /graphql` with body `{ "query": "...", "variables": {…} }`.  
- **Server router:** A single entry point receives the request, dispatches to a *GraphQL executor* built on Apollo Server 4.  
- **Schema stitching:** LinkedIn stitches multiple domain schemas (UserProfile, AdTargeting, Analytics) via `@link` directives; each sub‑schema lives in its own micro‑service.  
- **Execution pipeline:**
  1. **Parsing** → AST.  
  2. **Validation** against the composite schema (type checks, field existence).  
  3. **Planning** → a *DataLoader* graph where each resolver is mapped to a service endpoint.  
  4. **Batching**: DataLoaders batch identical requests over 10 ms windows; results are cached in Redis for 30 s.  
- **Result aggregation:** Resolvers return promises that resolve concurrently; the executor streams the final JSON back.  
- **Observability:** Each resolver logs a trace ID to Jaeger, and metrics (latency, cache hit ratio) go to Prometheus.

**Edge Cases**  
- Cyclic dependencies in stitched schemas → resolved by `@link` version pinning.  
- Large variable payloads → we enforce 1 MB limit; oversized queries get HTTP 413.  
- Unauthenticated users: query is rejected with a custom error code (`UNAUTHENTICATED`).  

**Optimize & Communicate**  
We can improve latency by:
- **Schema partitioning:** move hot fields to a dedicated “fast” service.  
- **Persisted queries:** pre‑compile and cache execution plans for recurring analytics queries.  
- **Adaptive batching windows** based on traffic patterns.

I’d present this flow in a diagram, then walk through an example query—e.g., `userAdTargeting(userId: 123)`—to illustrate how the GraphQL engine orchestrates micro‑service calls and returns a unified response within ~120 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
