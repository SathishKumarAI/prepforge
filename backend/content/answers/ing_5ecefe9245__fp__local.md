---
qid: ing_5ecefe9245__fp__local
question: 'Explain: Mutations → Modify Data — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 376
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:26:12-05:00'
sources: []
---

**Why mutations are the “data‑write” core of both REST and GraphQL**

Both APIs solve a *fundamental optimization problem*: how to change state on a remote server while keeping communication minimal, consistent, and type‑safe.

* **REST** frames every write as an HTTP verb (POST/PUT/PATCH/DELETE) applied to a resource URI. The cost is twofold:
  1. **Over‑fetching** – the client typically asks for the whole representation, even if only a few fields are needed.
  2. **Under‑fetching** – to update nested objects you must perform multiple round‑trips.

* **GraphQL mutations** turn that problem into a *declarative set of operations*:
  - The mutation’s payload is a *schema‑driven graph*, so the client says exactly which fields it wants back.  
  - Because the server can resolve the mutation in one shot, the network cost collapses to a single round‑trip.

The deeper principle here is **information efficiency**: a mutation should convey the *minimal sufficient statistics* for the state transition. GraphQL’s type system guarantees that any “write” returns precisely those fields the client will consume next, eliminating useless data transfer and ensuring forward compatibility.

**Non‑obvious insight:**  
In GraphQL, the same mutation can serve multiple clients with different field requirements without changing server logic. Each client receives a *tailored view* of the result, effectively turning a single update into a *multi‑tenant projection*. REST lacks this capability unless you duplicate endpoints or add query parameters for field selection—an ad hoc solution that violates the principle of separation between “what” and “how.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
