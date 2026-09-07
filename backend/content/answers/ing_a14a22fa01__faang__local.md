---
qid: ing_a14a22fa01__faang__local
question: 'Explain: API key generation — ''A cheat sheet for API designs'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 468
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:59:35-05:00'
sources: []
---

**Clarify**  
You’re asking how a system should generate and manage API keys while keeping the design clean, secure, and scalable—common in enterprise‑grade services (e.g., Google Cloud APIs). I’ll assume we need:  

* One‑time key issuance per developer.  
* Revocation & rotation support.  
* Rate‑limit tracking per key.  
* Minimal attack surface (no shared secrets leaked).

**Approach**  
1. **Key structure:** Random, URL‑safe string + metadata header (e.g., expiration).  
2. **Storage:** Hash the raw key (bcrypt/argon2) in a secure DB; keep only the hash.  
3. **Issuance flow:** API endpoint → generate key → store hash → return plain key once.  
4. **Verification middleware:** On each request, lookup by prefix, compare hashed value.  
5. **Revocation/rotation:** Flag in DB + optional “next‑key” field; rotate via a separate endpoint.

**Depth**  
*Key generation:* `uuid4()` or secure RNG → base64url encode → 32 chars.  
*Hashing:* `bcrypt(cost=12)` gives ~100 µs per hash, safe against brute force.  
*Rate limiting:* Store request counters in Redis with TTL; use token bucket algorithm.  
*Complexity:* Issuance O(log n) (DB insert), verification O(1) lookup + hash compare.  

**Edge cases**  
* Replay attacks: include timestamp/nonce in the key payload.  
* Concurrent revocation while requests are inflight – use atomic DB flag checks.  
* Key leakage: never log raw keys; enforce HTTPS.

**Optimize & communicate**  
- Cache the hashed key lookup to reduce DB load.  
- Use HMAC‑SHA256 signatures on request bodies for integrity.  
- Document the API: `/keys/generate`, `/keys/rotate`, `/keys/revoke`.  

This design balances **security (hashed storage, short lifespan), scalability (Redis counters), and developer ergonomics**—the hallmark of a FAANG‑grade API key system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
