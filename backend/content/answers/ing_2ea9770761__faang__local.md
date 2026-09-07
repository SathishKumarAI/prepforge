---
qid: ing_2ea9770761__faang__local
question: 'Explain: Planning for failure — Designing robust and predictable APIs with
  idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 433
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:31:50-05:00'
sources: []
---

**Planning for Failure – Idempotent, Robust API Design**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Problem:* Expose an HTTP‑based service that may be retried by clients (network hiccups, timeouts). <br>*Assumptions:* 1) Clients use standard REST/JSON. 2) Operations change state on the server (e.g., payment, resource creation). |
| **Approach** | 1️⃣ Define a clear idempotency key contract (header `Idempotency-Key`).<br>2️⃣ Store every request’s outcome in an immutable ledger keyed by that value.<br>3️⃣ On duplicate keys, replay the stored result instead of re‑executing business logic. |
| **Depth** | *Implementation:* Use a relational table (`idempotency_key PK`, `status`, `payload`, `created_at`).<br>*Atomicity:* Wrap the request handling in a single DB transaction; lock on key to avoid race conditions.<br>*Complexity:* O(1) lookup, constant‑time duplicate detection. <br>*Trade‑offs:* Extra storage and latency for first hit; eventual consistency if you allow background retries. |
| **Edge Cases** | • Key collision (rare – use UUIDs).<br>• Long‑running ops: store a “pending” status and let the client poll.<br>• Expiration policy to purge old keys after N days. |
| **Optimize & Communicate** | • Cache recent idempotency results in Redis for sub‑second lookups.<br>• Log all key usage for auditability.<br>• Explain to interviewers: “We’re turning a stateless API into a stateful contract that guarantees repeatable outcomes, which is essential for financial or mission‑critical services.” |

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
