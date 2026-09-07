---
qid: ing_c991f13a9e__faang__local
question: 'Explain: Protect Against Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 464
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:28:30-05:00'
sources: []
---

**Clarify**  
We’re asked how to guard a webhook endpoint from replay attacks—when an attacker resends a previously captured payload to trigger duplicate actions.  
Assumptions:  
- The client and server share a secret (HMAC) or use TLS only.  
- Idempotent operations are not guaranteed by the business logic.  
- The system can store state (e.g., seen IDs).  

**Approach**  
1. **Message authenticity & integrity** – HMAC with a shared key, plus a timestamp.  
2. **Replay protection** – enforce a *single‑use* identifier or nonce and record it.  
3. **Time‑based sliding window** – reject messages older than X minutes to mitigate clock drift.  

**Depth**  
- Each request carries: `payload`, `timestamp`, `nonce` (UUID), `signature = HMAC(secret, payload+ts+nonce)`.  
- On receipt:  
  1. Verify signature → ensures origin & tampering.  
  2. Check timestamp against server clock ±5 min → guards against old but signed messages.  
  3. Look up `nonce` in a fast key‑value store (Redis, DynamoDB). If present → reject; else add with TTL = X min + buffer.  
- Complexity: O(1) lookup/insert per request. Storage grows linearly with active nonces; TTL ensures bounded memory.  

**Edge Cases**  
- Clock skew > allowed window → legitimate requests fail (explain tolerance).  
- High‑volume bursts may exhaust Redis slots → use sharding or a Bloom filter for preliminary reject.  
- If the secret leaks, all security collapses—rotate keys and audit logs.  

**Optimize & Communicate**  
- Batch nonce checks to reduce round‑trips.  
- Log every rejected replay with reason for forensic analysis.  
- Explain trade‑offs: stricter windows increase safety but risk false negatives; longer TTLs consume more memory.  

This layered design satisfies FAANG interview expectations: clear problem framing, systematic solution, technical depth, edge‑case awareness, and communication of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
