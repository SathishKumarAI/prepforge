---
qid: ing_08641e14b2__faang__local
question: 'Explain: Critical Detail for Reservations — Airbnb System Design - by Neo
  Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 547
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:03:55-05:00'
sources: []
---

**Critical Detail for Reservations – Airbnb System Design**  
*(Neo Kim & Hayk)*  

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Problem:* Build the “Reservations” service that lets guests book stays, handles availability windows, and ensures no double‑booking. <br>Assumptions to confirm: 1) Reservations are atomic per listing; 2) We support over‑booking (buffer), cancellations, price changes; 3) Latency goal ≈ 200 ms for a booking request. |
| **Approach** | 1️⃣ Design the data model: `Listing`, `Reservation`, `AvailabilityWindow`. <br>2️⃣ Choose an optimistic locking strategy on the availability window. <br>3️⃣ Use a two‑phase commit (or saga) to keep inventory, payment and host notification in sync. <br>4️⃣ Cache hot listings with a write‑through policy for quick reads. |
| **Depth** | • **Reservation API:** `POST /reservations` → create reservation id, lock window. <br>• **Locking:** Increment an atomic counter per day (`available_units`) stored in Redis; if counter hits 0 → reject. <br>• **Consistency:** If payment fails after lock, release counter via a compensating transaction (saga). <br>• **Complexity:** O(1) for lock acquisition; amortized O(log N) for DB writes. |
| **Edge Cases** | • Concurrent bookings on same last unit → race condition → test with 10k parallel requests. <br>• Time‑zone drift in availability dates → normalize to UTC. <br>• Cancellation window > 24 h → release lock early; ensure idempotent cancel API. |
| **Optimize & Communicate** | • Use a **distributed lock** (Redlock) for high contention periods (e.g., holidays). <br>• Implement **rate limiting** per user to prevent abuse. <br>• Log every state transition and expose metrics (`reservation_success_rate`, `avg_lock_wait`). <br>Explain trade‑offs: optimistic locking keeps latency low but needs a compensating rollback; pessimistic locking guarantees serializability at higher cost. |

*Result:* A reservation system that is fast, highly available, and protects against double bookings while remaining horizontally scalable—exactly the style we’d expect from a FAANG interview answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
