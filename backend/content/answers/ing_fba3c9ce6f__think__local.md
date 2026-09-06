---
qid: ing_fba3c9ce6f__think__local
question: 'Explain: Non-Atomic Reservation — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 496
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:36:54-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - The user wants a *conceptual* explanation (not code).  
   - Assume the audience knows basic distributed‑system terms but not the specific pattern.  
   - Define “Non‑Atomic Reservation” and “Idempotency” in plain language first.

**2. Pick a mental model / framework**  
   - Treat the system as a *transactional workflow* (reserve → confirm).  
   - Use the classic ACID ↔ BASE analogy to explain why full atomicity is hard, but idempotence can still guarantee correctness.  
   - Map each step of the reservation process to an “operation” that may be retried.

**3. Reason through step‑by‑step**  
   1. **Reservation request arrives** → create a provisional record (status = “pending”).  
   2. **External service call** (e.g., payment gateway) is made; it can fail or time out.  
   3. **If success** → update status to “confirmed”; if failure → roll back or leave pending for retry.  
   4. **Idempotent key**: use a unique request ID so that repeated requests hit the same provisional record instead of creating duplicates.  
   5. Discuss how retries are safe because the state transition logic checks the current status before acting.

**4. Avoid common traps**  
   - Don’t conflate “idempotence” with “atomicity”; they solve different problems.  
   - Beware of assuming that a single database transaction can cover all steps; external calls break atomicity.  
   - Remember to handle partial failures (e.g., payment succeeded but inventory update failed).

**5. Sanity‑check & verbalize**  
   - Verify the flow covers: *init*, *retry*, *rollback*, *final* states.  
   - Speak it out loud as a story: “A user requests a seat; we book a provisional slot, call the payment gateway, and only once both succeed do we mark it confirmed.”  
   - End with a quick recap of why idempotency ensures safety even when operations aren’t atomic.

This structured reasoning can be reused for any non‑atomic workflow that relies on idempotent retries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
