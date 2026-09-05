---
qid: ing_374399cb28__fp__local
question: 'Explain: Three Core Functionalities of GraphQL — REST vs GraphQL - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 506
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:01:50-05:00'
sources: []
---

**Three Core Functionalities of GraphQL (from first‑principles)**  

| # | Functionality | Why it must be this way | Deeper Principle |
|---|---------------|------------------------|------------------|
| **1️⃣ Single, typed query language** | The client can ask *exactly* what data it needs. If the server had to return a fixed shape (as REST does), any change in requirements would force new endpoints or over‑fetching. By expressing the schema as a type system, the request itself becomes a contract: the server guarantees that the shape will match the declared types, and the client can rely on static tooling. | **Information theory** – we minimize entropy by transmitting only the necessary bits. |
| **2️⃣ Declarative resolver graph** | Each field is resolved independently; the execution engine composes them into a directed acyclic graph (DAG). This allows parallelism, caching of sub‑queries, and avoidance of “over‑fetching” or “under‑fetching”. REST’s imperative chaining of endpoints can’t express such dependencies naturally. | **Compositionality in functional programming** – building complex results from simple, pure functions. |
| **3️⃣ Introspection & schema federation** | Clients can query the server for its own schema (`__schema`). This self‑describing nature lets tools auto‑generate types, validate queries at compile time, and stitch multiple services together. REST has no such introspection; each endpoint must be documented manually. | **Self‑reference in logic programming** – the system knows about itself, enabling automated reasoning. |

> **Non‑obvious insight:**  
> The DAG of resolvers is *not* just a convenience; it guarantees that the cost of a query scales with its *actual* shape, not with the worst‑case endpoint design. This means that, even for highly nested data, the server can pre‑fetch overlapping sub‑fields once and reuse them—REST cannot achieve this without complex client‑side orchestration.

In short, GraphQL’s typed queries, composable resolver graph, and introspection collectively solve the *information inefficiency* problem of REST by turning the API into a self‑describing, optimizable contract.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
