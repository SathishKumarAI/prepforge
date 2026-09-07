---
qid: ing_edbd540018__aws__local
question: 'Explain: Side Effects Before Reservation — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 419
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:52-05:00'
sources: []
---

**Situation / Task**  
In my last role I built a reservation service for a global hotel chain that had to guarantee *exactly one* booking per customer even under race‑conditions. The system was exposed via a REST API used by mobile and web clients, so we needed idempotency without sacrificing latency.

**Action (Design)**  
I introduced a **Side‑Effect‑Before‑Reservation** pattern: the client first POSTs an *idempotency key* to `/reserve/init`. This key is stored in a DynamoDB table (`IdempotencyTable`) with TTL 24 h and a state flag (`PENDING`). The service then performs all side‑effects (send email, debit card) **before** creating the reservation record in `ReservationsTable`. If any step fails, we roll back by deleting the key.  
When the client later POSTs `/reserve/confirm` with the same key, the Lambda reads the state; if it’s `COMPLETED`, it returns the existing reservation ID (idempotent).  

**Result**  
The solution reduced duplicate bookings from 4 % to <0.01 %. Latency stayed below 120 ms (95th percentile) because DynamoDB read/write is single‑phase. Cost: < $2/month for the tables, and we avoided expensive compensating transactions.

**Reflection (Leadership Principles)**  
*Ownership*: I owned end‑to‑end flow, from API gateway to cleanup logic.  
*Dive Deep*: I profiled DynamoDB provisioned throughput, tuned TTL, and measured rollback latency.  

**Bar‑raiser takeaway** – Showed ownership, depth of trade‑offs (idempotency vs. complexity), quantified impact, and learning: initial naive approach caused race conditions; the side‑effect pattern fixed it while keeping costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
