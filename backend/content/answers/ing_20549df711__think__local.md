---
qid: ing_20549df711__think__local
question: 'Explain: Verify Signatures — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 505
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:49:31-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- *What* is a “verify signature” in webhook context?  
- *Why* do we need it (security, authenticity)?  
- Assume a typical HTTP POST from an external service, payload + HMAC header.  
- Assume we’re designing for high‑throughput, fault tolerance, and easy scaling.

**2️⃣ Mental model / framework**  
Use the classic *request–response pipeline*:  
1. Receive request → 2. Extract & normalize body → 3. Compute local signature → 4. Compare with header → 5. Accept/Reject → 6. Persist or trigger downstream.  
Map each step to architectural concerns: API gateway, worker queue, crypto module, logging, monitoring.

**3️⃣ Step‑by‑step reasoning**  
- **Endpoint design**: idempotent POST URL, rate‑limit per client.  
- **Parsing**: read raw body before any mutation (important for signature).  
- **Signature extraction**: header key (`X-Signature`), format (`sha256=...`).  
- **Computation**: use the same secret or public key; HMAC SHA‑256 is common.  
- **Timing‑safe comparison** to avoid timing attacks.  
- **Decision logic**: on mismatch → 401/403, log attacker IP. On match → 200 OK and enqueue work.  
- **Scalability**: stateless workers, cache secrets (e.g., Redis).  
- **Audit trail**: store raw payload + signature + verification result for replay or compliance.

**4️⃣ Common traps to avoid**  
- Mutating body before hashing → mismatched signatures.  
- Using insecure comparison (`==`) → timing attacks.  
- Hard‑coding secrets in codebase.  
- Ignoring clock skew if timestamps are part of the payload.  
- Not handling partial failures (e.g., verification passes but downstream fails).

**5️⃣ Sanity‑check & communicate**  
- Run a test: send a known payload, compute HMAC offline, verify locally.  
- Show diagram of flow: API gateway → signature validator → queue → worker.  
- Highlight metrics: `verify_success_rate`, `latency`, `error_counts`.  
- End with “If any step fails we return a clear error and log for investigation.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
