---
qid: ing_7cd6a5a8e7__faang__local
question: 'Explain: Stripe Bug Squash and API Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 485
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:34:12-05:00'
sources: []
---

**Stripe Bug Squashing & API Design – FAANG‑style Answer**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | *Problem*: Stripe’s internal bug‑tracking system (“Bug Squash”) needs a new RESTful API layer that supports bulk status updates, audit logging, and idempotent retries. Confirm: 1) target platforms (Python/Node), 2) rate limits, 3) security model (OAuth vs API key). |
| **Approach** | 1️⃣ Design a lightweight `PATCH /bugs/{id}` endpoint with optional `bulk_update` flag. <br>2️⃣ Use a CQRS pattern: write side writes to a Kafka topic; read side exposes a materialized view. <br>3️⃣ Implement idempotency via an Idempotency‑Key header and a deduplication table. |
| **Depth** | • **Request payload**: `{ "status": "resolved", "notes": "...", "assignee_id": null }`.<br>• **Bulk logic**: accept array of IDs; return per‑item status + errors. <br>• **Audit log**: immutable append‑only table with `user_id`, `timestamp`, `action`. <br>• **Complexity**: O(n) for bulk, constant time for single PATCH. <br>• **Trade‑offs**: Kafka gives eventual consistency but adds latency; we mitigate with a local cache. |
| **Edge Cases** | • Invalid status transitions → 422.<br>• Missing Idempotency‑Key on retry → duplicate updates → 409.<br>• Bulk size > limit → 413.<br>• Audit log storage growth → TTL + archiving policy. |
| **Optimize & Communicate** | *Improvements*: cache read side in Redis, add GraphQL fallback for UI flexibility. *Narration*: “I’d first surface the pain points with stakeholders, then prototype a minimal API that satisfies SLA and security, iterate on bulk logic, and finally ship with automated tests covering all edge cases.” |

*Key takeaway*: A clear problem statement + modular design (CQRS + idempotency) yields a robust, scalable API while keeping operational complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
