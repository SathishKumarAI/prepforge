---
qid: ing_b3af69baa8__fp__local
question: 'Explain: RPC vs REST — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 507
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:10-05:00'
sources: []
---

### Why the distinction matters

At its core both **RPC** (Remote Procedure Call) and **REST** (Representational State Transfer) solve *distributed execution*: “how do I invoke a function that lives on another machine?”  
The choice of protocol determines what *state* is carried, how *messages are interpreted*, and what *optimizations* the network can exploit.

---

### RPC – a state‑ful, procedure‑centric view

1. **Problem it solves**: expose an existing API as if it were local.  
2. **Mechanism**: the client serialises a method name + arguments into a single request; the server deserialises, executes, and returns a result.  
3. **Why it works that way**: RPC mirrors the call stack of a monolithic program—each invocation is an atomic transaction. The caller expects a *response* before proceeding.  
4. **Deep principle**: RPC enforces *procedure‑level abstraction*, akin to function calls in imperative languages, preserving encapsulation but sacrificing scalability because each request must be routed to a specific endpoint.

---

### REST – a resource‑oriented, stateless view

1. **Problem it solves**: model the world as entities and let clients manipulate them via standard HTTP verbs.  
2. **Mechanism**: a URL identifies a *resource*; GET/POST/PUT/DELETE encode operations on that resource. No notion of “procedure” beyond the verb.  
3. **Why it works that way**: REST leverages HTTP’s caching, load‑balancing, and proxy infrastructure, making every request independent. The server need not remember prior calls—this is *statelessness*.  
4. **Deep principle**: It maps to *information theory*: each URI + verb pair uniquely identifies a state transition; the network can treat requests as pure data exchanges.

---

### Non‑obvious insight

Most people equate REST with “no code” and RPC with “code”. In reality, **both expose code**—RPC hides it in a tight function call, while REST exposes it through declarative resource manipulations. The real differentiator is *how much of the server’s internal state you trust the client to understand*, not whether you write functions or manipulate resources.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
