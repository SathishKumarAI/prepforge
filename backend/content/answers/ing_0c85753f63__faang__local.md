---
qid: ing_0c85753f63__faang__local
question: You're handed a small unfamiliar agent codebase. Users report it sometimes
  confirms an order that was never actually placed. How do you debug it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 454
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:13:08-05:00'
sources: []
---

**Clarify**  
*Problem*: The AI‑powered ordering system occasionally acknowledges orders that users never submitted.  
*Assumptions to confirm*:  
1. Is the “confirmation” sent by the agent itself or an external service (e.g., email/SMS gateway)?  
2. Are we sure the user didn’t hit “submit” twice?  
3. Does this happen on a particular platform (web, mobile) or with specific product categories?  

**Approach**  
1. Reproduce the bug locally by logging every request/response cycle.  
2. Instrument the code to capture: request payload, authentication token, session ID, and confirmation‑send timestamp.  
3. Trace downstream services (DB writes, message queues, notification APIs) to see where the order record is created.  

**Depth**  
*Key suspects*:  
- **Idempotency handling** – missing or duplicated idempotency keys can cause duplicate inserts.  
- **Race conditions** – parallel requests might both succeed before a lock is enforced.  
- **State drift** – caching layers (Redis) may return stale “order placed” flags.  
Implement deterministic checks: verify that the order ID exists in DB before sending confirmation; add a unique constraint on `(user_id, product_id, timestamp)`.

Complexity: O(1) for DB lookups; overhead negligible compared to production latency.

**Edge Cases**  
- Network retries triggering duplicate POSTs.  
- Corrupted payloads missing required fields.  
- Time‑zone mismatches in timestamps leading to false positives.

Test by simulating concurrent submits, flaky network, and corrupted data streams.

**Optimize & Communicate**  
*Improvements*:  
- Add a global idempotency middleware.  
- Log correlation IDs end‑to‑end for easier post‑mortem.  
Explain the debugging path: “I first isolated whether the confirmation originated from the agent or an external service, then instrumented the request lifecycle to pinpoint where the order flag was set. By adding a unique constraint and idempotency guard I eliminated duplicate confirmations while keeping latency low.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
