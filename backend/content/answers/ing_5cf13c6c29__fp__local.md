---
qid: ing_5cf13c6c29__fp__local
question: 'Explain: Authorization — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 427
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:22:02-05:00'
sources: []
---

**Why we need APIs for authorization**

At its core, an authorization system decides *who* can do *what* on a resource. That decision must be made by every service that owns or exposes the resource: a user‑profile microservice, a payment gateway, a logging service, etc. If each service were to implement its own policy engine, we would quickly drown in duplicated code, inconsistent semantics, and hard‑to‑audit rules.

**The API as a contract**

An *API* (Application Programming Interface) is simply a formal contract: a set of calls with well‑defined inputs, outputs, and error codes. In authorization, the API’s job is to expose two primitives:

1. **Policy evaluation** – “Is user X allowed to perform action Y on resource Z?”  
2. **Policy management** – “Add or remove rules for role R.”

By treating policy as a first‑class resource, we decouple *policy* from *enforcement*. Services become thin clients that forward requests to the API and act only on the boolean response.

**Deeper principle: compositionality**

This mirrors the principle of **composability** in functional programming. A pure function (the policy evaluator) takes a state (user, action, resource) and returns a result without side effects. The API is the boundary that preserves this purity across service boundaries, enabling caching, rate‑limiting, and audit logging to be applied centrally.

**Non‑obvious insight**

Many people treat an authorization API as a simple “yes/no” gate. In practice, it should return *contextual metadata* (e.g., which rule matched, the weight of that rule). This extra data turns a blind enforcement into a transparent decision engine, facilitating debugging, dynamic policy tweaking, and fine‑grained audit trails—all without changing the core API contract.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
