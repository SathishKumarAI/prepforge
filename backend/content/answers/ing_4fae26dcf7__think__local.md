---
qid: ing_4fae26dcf7__think__local
question: 'Explain: New Key on Every Retry — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 396
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:17:30-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - Confirm we’re talking about *idempotent* retry logic in distributed ML systems (e.g., training job submission, inference requests).  
   - Assume the client may lose or duplicate network messages; we need a unique key that guarantees each retry is treated as the same operation.  

**2️⃣ Mental model: “Idempotency key as an immutable identifier”**  
   - Treat every request as a *function* with inputs → outputs.  
   - The key must be **unique per logical operation** but stable across retries, so the server can detect duplicates and return the cached result instead of re‑executing expensive ML work.

**3️⃣ Step‑by‑step reasoning**  
   1. Client generates a UUID (or hash of request payload + user id).  
   2. Attach it to the HTTP header or message metadata (`Idempotency-Key`).  
   3. Server checks store: if key exists, return stored response; else execute ML task and persist result keyed by that ID.  
   4. On retry, same key guarantees no double‑execution.  

**4️⃣ Common traps**  
   - *Using mutable keys*: e.g., timestamps change on each retry → duplicate work.  
   - *Overly long key lifetimes*: stale entries clog storage.  
   - *Ignoring concurrency*: race conditions when two retries hit simultaneously; need atomic upsert or locking.

**5️⃣ Sanity‑check & verbalize**  
   - “If I send the same request twice with identical headers, the second should see the first’s outcome.”  
   - Verify by mocking a retry scenario: generate key once, resend, confirm no new training job starts.  

Use this checklist to design robust idempotent retries in any ML‑centric distributed system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
