---
qid: ing_4f548bfe7e__faang__local
question: 'Explain: Request Headers — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 444
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:49:02-05:00'
sources: []
---

**Clarify**  
We’re asked how request headers work when a system receives a webhook from an external service (e.g., Stripe, GitHub). Key assumptions:  
1) The webhook is an HTTP POST with JSON payload.  
2) We must authenticate the source and protect against replay/forgery.  
3) The system should be scalable and idempotent.

**Approach**  
1. **Header inspection** – read `Content-Type`, `X-Request-ID`, `User-Agent`.  
2. **Signature verification** – compute HMAC of body using shared secret, compare to header (`X-Signature`).  
3. **Replay protection** – store a hash of the signature+timestamp in a fast cache (Redis).  
4. **Idempotency** – use `X-Request-ID` as primary key; if duplicate, return 200 without reprocessing.  
5. **Routing** – parse event type from payload and dispatch to worker queue.

**Depth**  
*Verification*: `hmac_sha256(secret, body) == header_sig`.  
*Replay window*: allow timestamps within ±5 min, reject older.  
*Complexity*: O(1) lookup in Redis; processing is linear in payload size.  
*Trade‑offs*: Using a shared secret simplifies but requires rotation; JWTs add overhead.

**Edge Cases**  
- Missing or malformed signature → 400.  
- Clock skew > window → false negatives.  
- Extremely large payloads → memory exhaustion (stream parse).  
- Duplicate `X-Request-ID` with different payload → detect via checksum.

**Optimize & Communicate**  
Explain that caching signatures in Redis prevents replay attacks while keeping latency low. Highlight that idempotency keys make the system resilient to network retries, a common webhook pattern. Conclude by noting monitoring (metrics on 400/401 responses) and alerting for failed verifications. This shows structured reasoning, depth, and awareness of production concerns—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
