---
qid: ing_35ffa4e501__faang__local
question: 'Explain: Webhook Security — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 401
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:49:32-05:00'
sources: []
---

**Webhook Security – System‑Design Answer**

| **Step** | **What I’d Say** |
|----------|------------------|
| **Clarify** | “We need a design that safely receives third‑party HTTP callbacks (webhooks) without exposing our service to abuse.”  Assume: 1️⃣ stateless API endpoint, 2️⃣ clients can’t share secrets, 3️⃣ we must validate authenticity and protect against replay. |
| **Approach** | 1. **Signature verification** – each webhook carries an HMAC‑SHA256 over the body using a shared secret known only to us and the sender. 2. **Timestamp & nonce** – include a UTC timestamp and unique ID; reject if older than 5 min or already seen (store recent nonces in Redis). 3. **Rate limiting** – per‑sender IP/ID limit with token bucket. 4. **TLS** – enforce HTTPS for all inbound traffic. |
| **Depth** | *Signature* computed as `HMAC(secret, timestamp + body)`; verify on receipt. Store secrets in a vault (AWS KMS). Use a short TTL for nonce cache to keep memory O(k) where k = #webhooks per minute. Complexity: O(1) per request. |
| **Edge Cases** | • Clock skew → allow ±2 min window.<br>• Large payloads → stream HMAC calculation.<br>• Missing timestamp → reject.<br>• Replay attack with same nonce → dedup cache. |
| **Optimize & Communicate** | Explain trade‑offs: stricter time windows reduce replay risk but may increase false negatives; caching nonces adds memory overhead but is essential for idempotency. Conclude that this design balances security, scalability, and low latency—key for a FAANG‑style webhook service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
