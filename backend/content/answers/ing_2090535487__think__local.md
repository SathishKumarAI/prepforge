---
qid: ing_2090535487__think__local
question: 'Explain: Idempotency — How to Avoid Double Payment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 549
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:50:30-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
- *What is “idempotency” in this setting?*  
  It’s a property that guarantees repeated requests have the same effect as a single request.  
- *Assume we’re dealing with an online payment API (REST/HTTP) where clients may retry due to timeouts or network glitches.*  
- *Goal:* Prevent double charges while still allowing idempotent retries.

**2️⃣ Mental model / framework**  
- Treat the payment operation as a **state transition** on a resource (`payment`).  
- Use an **idempotency key** supplied by the client, stored server‑side with the resulting transaction ID.  
- Think of it like a “unique ticket” that identifies one logical request.

**3️⃣ Step‑by‑step reasoning**  

| Step | Action | Why |
|------|--------|-----|
| 1 | Client sends POST `/payments` with body + header `Idempotency-Key: <UUID>`. | Gives server a unique identifier for the intent. |
| 2 | Server checks its store for that key. | Detects if this logical request has already been processed. |
| 3a | If found, return the stored response (e.g., 200 + transaction ID). | Guarantees identical result on retry. |
| 3b | If not found, create a new payment record, charge the card, store the key → transaction mapping. | First‑time processing. |
| 4 | Return success to client. | Client knows operation succeeded. |

**4️⃣ Common traps to avoid**  
- *Reusing keys across different resources:* keep the namespace per endpoint or include resource type in key.  
- *Short key expiry:* if a key is purged too soon, a retry may be treated as new and double‑charged.  
- *Ignoring idempotency header on GET/DELETE where it’s needed for safe retries.*  
- *Not handling race conditions:* two simultaneous requests with same key must lock the key entry.

**5️⃣ Sanity‑check & communicate**  
- **Test** by sending the same request twice; verify only one charge appears.  
- **Explain to stakeholders**: “We’re using a client‑supplied UUID that we store once per transaction, so any retry will simply look up that record and return the same result—no new payment is created.”  
- **Document** the key’s format, required headers, and storage policy for future developers.

By following this idempotency pattern you can confidently handle retries without risking double payments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
