---
qid: ing_bf29222c2f__think__local
question: 'Explain: Context — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 414
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:34:56-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
   - Confirm that “Pattern: Saga” refers to the *Saga pattern* used for long‑running distributed transactions in microservices.  
   - Assume the reader knows basic distributed transaction concepts but not the specifics of Sagas.

**2️⃣ Adopt a mental model**  
   - Think of a Saga as a *state machine* of compensating actions, rather than a single atomic commit/rollback.  
   - Map it onto two common flavors: **Choreography** (services publish events) and **Orchestration** (a central coordinator).

**3️⃣ Step‑by‑step reasoning**  
   1. Define the business goal that requires multiple services to cooperate.  
   2. Show how each step is an *atomic* local transaction that emits an event or calls another service.  
   3. For failure, outline the compensating operation that undoes the previous step.  
   4. Contrast choreography vs orchestration: who decides next step, how errors are propagated.  
   5. Highlight idempotency and eventual consistency guarantees.

**4️⃣ Common pitfalls to avoid**  
   - Forgetting that Sagas do **not** guarantee ACID; they provide *eventual* consistency.  
   - Assuming a single “rollback” – in reality each step has its own compensation.  
   - Ignoring the need for idempotent compensating actions, which can lead to double‑undo.

**5️⃣ Sanity check & verbalize**  
   - Verify that you’ve covered *why* Sagas are needed (long‑running ops), *how* they’re structured, and *what guarantees* they provide.  
   - Speak it aloud: “A Saga turns a multi‑service workflow into a series of local commits with compensations…”, then pause to see if any piece feels missing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
