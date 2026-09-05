---
qid: ing_08641e14b2__star__local
question: 'Explain: Critical Detail for Reservations — Airbnb System Design - by Neo
  Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 338
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:45:45-05:00'
sources: []
---

**Situation**  
During a redesign of our booking engine at a fast‑growing travel startup, we noticed that the reservation table was getting hit with a 12 % spike in duplicate bookings for high‑demand listings during peak season.

**Task**  
I had to implement a “critical detail” guard—an atomic check on key reservation attributes (listing ID, guest ID, check‑in/out dates) that would prevent duplicates while keeping latency under 80 ms per request.

**Action**  
I introduced a composite lock using Redis’ RedLock pattern. Before inserting a new reservation, the service builds a deterministic hash of the three fields and attempts to acquire an exclusive lease on a key named `reserve:{hash}` with a TTL of 5 s. If the lock is acquired, we proceed to write to PostgreSQL via a lightweight stored procedure that uses a unique index on `(listing_id, guest_id, check_in, check_out)`. If not, we immediately return a “conflict” response and log the attempt for later reconciliation. I also added a background job that periodically scans for stale locks and cleans them up.

**Result**  
Duplicate reservations dropped from 12 % to <0.1 %. End‑to‑end booking latency stayed below 70 ms, and we reduced manual support tickets by 35 %. The exercise taught me how a small, well‑placed lock can solve a complex concurrency problem without bloating the database schema.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
