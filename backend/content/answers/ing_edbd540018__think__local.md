---
qid: ing_edbd540018__think__local
question: 'Explain: Side Effects Before Reservation — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 466
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:43:12-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**

* Identify the key terms: *side effects*, *before reservation*, *idempotency*.  
* Assume we’re designing a distributed system (e.g., booking API) where a request may be retried or duplicated, yet we want to avoid double‑booking or other unintended consequences.  

**2. Adopt a mental model**

Use the **“reservation pattern + idempotent operation”** framework:  
1. *Reservation* – lock resources before performing side effects.  
2. *Idempotency* – ensure repeated requests produce the same final state.

**3. Step‑by‑step reasoning**

1. **Capture intent first**: when a client calls “reserve”, record a provisional reservation (e.g., create a row with status = “pending”).  
2. **Apply side effects only after reservation succeeds**: once the pending entry is persisted, run external actions (charge payment, notify services).  
3. **Make the operation idempotent** by using a unique client‑supplied request ID or a UUID; store it with the reservation so repeated calls see an existing record and simply return the same result instead of re‑executing side effects.  
4. **Handle failures gracefully**: if a side effect fails, roll back the reservation (set status = “failed”) or retry until success, ensuring no duplicate work.

**4. Common traps to avoid**

* Performing external calls *before* confirming the reservation—this can lead to double‑charging.  
* Relying solely on database uniqueness constraints without a request ID—duplicate requests may still trigger side effects if retried.  
* Ignoring eventual consistency; make sure downstream services react to status changes, not just creation events.

**5. Sanity‑check & verbalize**

* Ask: “If the client retries after a timeout, will we double‑book?” → No, because the reservation already exists and the idempotency key prevents re‑execution.  
* Explain to stakeholders that the system first guarantees a safe hold (reservation) and only then performs irreversible actions, all wrapped in an idempotent contract so repeated calls are harmless.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
