---
qid: ing_edbd540018__faang__local
question: 'Explain: Side Effects Before Reservation — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 481
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:53:12-05:00'
sources: []
---

**Side‑Effects Before Reservation – Idempotency (System Design)**  

### Clarify  
We need a service that reserves resources (e.g., seats, inventory) while ensuring *idempotent* behavior when the same request is retried or duplicated. Assumptions: single‑tenant requests, eventual consistency acceptable, high throughput, and we want to avoid double booking.

### Approach  
1. **Idempotency key** – client supplies a unique token per logical reservation.  
2. **State machine** – `PENDING → CONFIRMED` with intermediate “LOCKED” state.  
3. **Store** – transactional database (or KV store) that records the key, request payload, and status.  

On receiving a request:  
- If key absent → create record, lock resource, set status to `LOCKED`.  
- If key present & status `LOCKED` → return “Already in progress”.  
- If key present & status `CONFIRMED` → return success (idempotent).  
- If key present & status failed → retry logic.

### Depth  
Use a **distributed lock** (e.g., RedLock) to prevent race conditions. Commit the reservation in a single transaction: decrement inventory and write the confirmation record atomically. Complexity: O(1) DB ops, constant‑time lock acquisition; latency dominated by lock contention (~10–20 ms). Trade‑off: locking serializes reservations for the same resource but scales well for distinct resources.

### Edge Cases  
- Network partition → lock may be stale; use TTL and lease renewal.  
- Client sends malformed payload with same key → validate before applying state changes.  
- System crash after `LOCKED` but before commit → idempotency key remains; retry will re‑lock or abort.

### Optimize & Communicate  
Introduce a **background reconciler** that periodically scans stale `LOCKED` entries and either rolls back or finalizes them, reducing lock hold times. Explain to interviewers: “We’re leveraging idempotent keys + transactional state to guarantee at most one reservation per logical request while keeping the system highly concurrent.” This demonstrates clear reasoning, trade‑off awareness, and a scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
