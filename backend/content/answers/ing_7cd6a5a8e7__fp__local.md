---
qid: ing_7cd6a5a8e7__fp__local
question: 'Explain: Stripe Bug Squash and API Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 553
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:30:48-05:00'
sources: []
---

**Stripe‑Bug‑Squash & API‑Design in FAANG interviews**

*Fundamental problem:*  
A payment platform must process thousands of transactions per second, guarantee correctness under concurrency, and expose a clean interface to third‑party merchants. The two interview themes probe the same constraints: *robustness under edge conditions* and *expressive contract design*.

### 1. Bug‑Squashing (Concurrency + Idempotency)

- **Core principle:** *Transactional invariants*.  
  Every transaction must leave the system in a well‑defined state regardless of timing or failures. This is formalized by *serializability*: any interleaving of concurrent requests should be equivalent to some serial order.

- **Why it works:**  
  - **Optimistic locking** (e.g., version numbers) lets two parties race on the same account; the first commit succeeds, the second rolls back and retries.  
  - **Idempotent keys** prevent double‑charging: a client replays a request with the same id, and the server recognises it as already processed.

- **Non‑obvious insight:**  
  *The “last write wins” illusion is dangerous only if you expose the raw state to clients.* By keeping all mutation logic inside a single transaction boundary (or an ACID‑like service), the system can safely ignore the order of arrival and still guarantee correctness.

### 2. API Design (Interface + Extensibility)

- **Core principle:** *Specification by contract*.  
  The API should state *what* is guaranteed, not *how* it’s implemented. This maps to the Liskov Substitution Principle: any client using a base type should work with derived types.

- **Why it works:**  
  - **Explicit versioning** (e.g., `v1`, `v2`) lets you evolve the contract without breaking existing users.  
  - **Granular error codes** expose failure modes; clients can decide whether to retry, fallback, or surface an issue.

- **Non‑obvious insight:**  
  *Return a “resource” object that encapsulates both data and metadata (e.g., `ETag`, `Last‑Modified`).* This gives the client all the information needed for cache‑coherence and optimistic concurrency, turning a simple GET into a powerful tool for distributed consistency.

---

**Bottom line:** FAANG questions test whether you can translate these deep principles—serializability, idempotency, contract‑first design—into concrete patterns that keep millions of payments safe and APIs pleasant to consume.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
