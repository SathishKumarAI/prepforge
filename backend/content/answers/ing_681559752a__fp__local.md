---
qid: ing_681559752a__fp__local
question: 'Explain: 2.2. Hypermedia — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 377
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:46:01-05:00'
sources: []
---

**REST (Representational State Transfer)** emerges when we formalize *how* a client can manipulate the state of a distributed system over HTTP, treating every resource as an addressable entity.  
At its core, a **resource** is a conceptual object—user, document, image—identified by a URI. The client’s only tool for interacting with that resource is the set of **stateless operations** defined by HTTP verbs:

| Verb | Semantics |
|------|-----------|
| GET  | Retrieve representation (idempotent) |
| POST | Create new subordinate resource (non‑idempotent) |
| PUT  | Replace entire representation (idempotent) |
| PATCH| Modify part of representation (not guaranteed idempotent) |
| DELETE| Remove resource (idempotent) |

Statelessness guarantees that each request contains all the information needed; servers need not keep session data, yielding horizontal scalability and cache‑ability.  
Representations are **media types** (JSON, XML, etc.) that encode state; clients and servers negotiate via `Accept`/`Content-Type`.  

The deeper principle is *resource abstraction as a set of transformations*. Instead of sending raw data, the client asks *what* to do, letting the server decide *how* to achieve it. This mirrors functional programming’s pure functions: given an input (URI + verb), the output (new state) depends only on that input, not on hidden context.  

**Non‑obvious insight:** The *cacheability* of GET requests is what turns HTTP into a distributed database protocol; proper use of ETags and conditional requests lets intermediaries store and serve stale data until invalidated, dramatically reducing load without sacrificing freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
