---
qid: ing_80bac732af__faang__local
question: 'Explain: Payload Mismatch — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 412
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:44:15-05:00'
sources: []
---

**Payload Mismatch – Idempotency (System‑Design)**  

| Step | What to do |
|------|------------|
| **Clarify** | *Restate*: A client may retry a write (e.g., “create order”) with different payloads while the server must treat it as the same operation. Assume we have an HTTP API, unique request IDs, and eventual consistency is acceptable. |
| **Approach** | 1. Capture the first payload per idempotency key in a *deduplication table*. <br>2. Subsequent requests with the same key return the stored result; if the payload differs, reject or log a warning. <br>3. Use immutable objects (e.g., write‑once rows) and avoid side‑effects that depend on payload content. |
| **Depth** | *Deduplication table*: `idempotency_key → {status, response_body}`.<br>*Write path*: If key absent → perform operation, store result, respond 200/201.<br>Else → compare payload hash; if equal → replay stored response; if not → return 409 Conflict. <br>Complexity: O(1) lookup; storage grows linearly with active keys (TTL cleanup). |
| **Edge Cases** | • TTL expiration before retry → client must resend a new key.<br>• Large payloads → store hash instead of full body to save space.<br>• Race conditions when two requests arrive simultaneously → use database atomic upsert or distributed lock. |
| **Optimize & Communicate** | *Improvements*: Use a cache (Redis) for hot keys, fall back to DB; compress stored responses. Explain trade‑offs: stricter conflict handling increases reliability but may hurt user experience if clients ignore warnings. Convey that idempotency protects against accidental duplicate writes while allowing safe retries, which is critical in payment or inventory systems. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
