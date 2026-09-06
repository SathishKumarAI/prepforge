---
qid: ing_c991f13a9e__fp__local
question: 'Explain: Protect Against Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 594
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:09:17-05:00'
sources: []
---

### Why Replay Protection is Needed

When a webhook sends data, the receiver cannot trust that the packet arrived only once. An attacker can capture the HTTP request and re‑send it (replay) to trigger unintended actions—duplicate payments, double‑deletion of records, etc. The fundamental problem is **identifying whether an incoming event is *new* or a previously seen copy** without keeping an ever‑growing ledger of every payload.

### The Minimal Design

1. **Stateless, cryptographic freshness**  
   Each sender includes a *nonce* (a random 128‑bit value) and a timestamp in the header.  
2. **Message authentication**  
   Compute `H = HMAC(secret, nonce‖timestamp‖payload)` and send `X-HMAC: H`.  
3. **Receiver validation**  
   - Reject if `timestamp` is older than an allowed window (e.g., 5 min).  
   - Verify `H` against the shared secret.  
   - If both checks pass, treat the event as *new*.

Because a nonce is random, the probability of two different payloads producing the same `(nonce‖timestamp)` pair is negligible; and because HMAC binds the nonce and timestamp to the payload, replaying an old packet will fail the HMAC check unless the attacker also knows the secret (which they shouldn’t).

### Connection to Deeper Principles

This design embodies **information‑theoretic freshness**: a fresh nonce guarantees that each message carries unique information. The cryptographic binding ensures *integrity* and *authentication*, preventing tampering or impersonation. By rejecting old timestamps we enforce an *entropy budget*: only events within a bounded time window can be accepted, limiting replay windows without storing history.

### Non‑Obvious Insight

Many systems store every nonce in a database to detect duplicates, incurring linear storage growth. Instead, use a **Bloom filter** (or a probabilistic counting sketch) keyed by the hash of `nonce‖timestamp`. The filter quickly tells you whether a pair has been seen before while using sub‑linear space. Combine this with the timestamp window: after the window expires, discard the Bloom filter and start fresh. This gives *stateless replay protection* at negligible cost, leveraging probabilistic data structures to avoid the “store everything” pitfall.

--- 

**Word count:** 200

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
