---
qid: ing_c594dba02c__think__local
question: 'Explain: Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 398
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:01:23-05:00'
sources: []
---

**1️⃣ Clarify the Scope & Assumptions**  
- Confirm whether “idempotency” refers to HTTP APIs, database writes, or distributed system operations.  
- Assume we’re designing a stateless service that may receive duplicate requests (e.g., retries, load balancer duplicates).  

**2️⃣ Mental Model: “Operation → Key → Result”**  
- Treat each idempotent operation as a function mapping an input key to a deterministic output.  
- Use a unique identifier (request ID, user‑action hash) as the *key*; store the outcome in a persistent cache or database.  

**3️⃣ Step‑by‑Step Reasoning**  
1. Client generates a unique idempotency token (e.g., UUID).  
2. Service receives request → checks token table.  
   - **If present:** return stored result, no side‑effects.  
   - **If absent:** perform operation, persist result with the token, then respond.  
3. Ensure atomicity: insert token+result in one transaction to avoid race conditions.  
4. Define TTL or cleanup policy for old tokens to bound storage.  

**4️⃣ Common Traps to Avoid**  
- Forgetting that “idempotent” ≠ “repeatable”; the same request may still have side‑effects (e.g., sending an email).  
- Using non‑unique keys (timestamps) leading to false positives.  
- Ignoring concurrency: two simultaneous requests with the same token can cause duplicate work if not locked.  

**5️⃣ Sanity‑Check & Communicate**  
- Verify that any duplicate request yields exactly the same response and no extra state changes.  
- Explain to stakeholders: “We’ll expose an Idempotency‑Key header; our service will cache results per key, ensuring retries are safe.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
