---
qid: ing_49507a339d__fp__local
question: 'Explain: Resource Methods — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 493
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:41:30-05:00'
sources: []
---

**What problem does REST solve?**  
When a client (browser, app, IoT device) needs data from a server it must repeatedly ask “give me X” and “update Y”. In the early web this was handled by custom protocols or tightly coupled APIs that grew brittle. The core issue is *statelessness*: every request should contain all information needed to process it, so servers can scale horizontally, cache efficiently, and remain simple.

**Why REST?**  
REST (Representational State Transfer) formalises the idea that a web resource—any addressable entity such as `/users/42`—can be manipulated by a small set of *resource methods*:

| Method | Action | Semantics |
|--------|--------|-----------|
| `GET`  | Retrieve representation | Safe, idempotent |
| `POST` | Create or submit data | Non‑idempotent |
| `PUT`  | Replace entire resource | Idempotent |
| `PATCH`| Modify part of a resource | Non‑idempotent |
| `DELETE`| Remove the resource | Idempotent |

These verbs are grounded in HTTP, which already guarantees statelessness, caching headers, and content negotiation. By mapping CRUD operations to these methods we turn arbitrary data into a uniform interface that can be *composed*, *cached*, or *mirrored* without breaking clients.

**Deep principle: Information flow as a graph**  
REST treats the web as a directed graph of resources linked by URLs. Each edge (method) is an operation that transforms one representation to another, preserving referential integrity. This mirrors functional programming’s pure functions: given the same input URL and method, the output is deterministic.

**Non‑obvious insight**  
Many developers think REST “just” uses HTTP verbs. The real power lies in *resource identity*: a URI isn’t a file path but an abstract identifier. Because it can be dereferenced anywhere (even offline), clients can cache or prefetch resources using hypermedia links, turning the API into a navigable graph rather than a rigid contract. This decoupling lets servers evolve without breaking existing clients—an elegant embodiment of *information hiding* in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
