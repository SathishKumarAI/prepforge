---
qid: ing_d12af9a088__fp__local
question: 'Explain: Request Parts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 447
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:25:20-05:00'
sources: []
---

### Why an *API* is indispensable in a distributed system

At the core of any software stack lies **information exchange**: one component must obtain or modify data that another owns, without exposing internal details.  
An **Application Programming Interface (API)** is the *minimal contract* that guarantees this exchange. It specifies:

1. **What operations are available** – a set of verbs (e.g., `GET`, `POST`).
2. **How to invoke them** – a syntax (URL + HTTP method, function signature, RPC call).
3. **What data is returned** – a schema or type definition.

Without such a contract, two systems would need to share their entire implementation, leading to brittle coupling. By isolating the *interface* from the *implementation*, an API lets each side evolve independently: the provider can refactor its internals, while clients only need to adhere to the stable contract.

#### Deeper principle

An API is a **type‑theoretic abstraction**: it enforces a *well‑formed* message shape. This mirrors how compilers enforce type safety—preventing runtime errors and ensuring that every call can be reasoned about statically. The API becomes a *proof of compatibility* between two modules.

#### Non‑obvious insight

The most subtle power of an API is its role in **versioning**. Rather than breaking clients, you expose a *new interface* (e.g., `/v2/`) while maintaining the old one. Versioning thus transforms the API into a *historical ledger*: every change is recorded as a new type. This guarantees that even long‑lived systems can evolve without compromising data integrity or user expectations.

In short, an API is the disciplined, contract‑based bridge that turns raw data into usable services while preserving modularity, safety, and evolutionary flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
