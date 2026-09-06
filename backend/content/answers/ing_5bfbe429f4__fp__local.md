---
qid: ing_5bfbe429f4__fp__local
question: 'What is a Resource? — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 443
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:19:42-05:00'
sources: []
---

**What is a “resource” in REST?**

At its core, a web service must *communicate facts*—the state of an entity—to clients. A **resource** is that fact: any item that can be identified, retrieved, and possibly mutated over the network. Think of it as a *logical object*, not a physical file or database row; it’s what the client cares about, not how we store it.

Why must REST treat resources this way?

1. **Uniform Interface (URI + representation)** – A URI is a *canonical name* for a resource. The network protocol (HTTP) supplies verbs (GET/POST/PUT/DELETE) that act on the *representation* of that name, not on the underlying storage. This decouples clients from servers and allows caching, security, and versioning to be handled at the interface level.

2. **Statelessness** – Every request must contain all information needed to identify and manipulate the resource. The server cannot keep session state; it simply reads the URI, fetches the current representation, applies the verb, and returns a new representation. This follows the principle of *information hiding* in distributed systems: each interaction is self‑contained.

3. **Representational State Transfer** – The “transfer” part emphasizes that the client’s view (representation) may differ from the server’s internal state. A resource can have multiple representations (JSON, XML, HTML). This aligns with *probabilistic inference*: the representation is a sample of the underlying probability distribution of the resource’s attributes.

**Non‑obvious insight:**  
The “resource” is not the endpoint; it is the *semantic target* behind that endpoint. Changing how we store or compute it (e.g., moving from SQL to NoSQL) does **not** alter the resource, only its representation. This separation lets RESTful APIs evolve without breaking clients—an elegant manifestation of abstraction and modularity in distributed computing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
