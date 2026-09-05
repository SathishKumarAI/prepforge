---
qid: ing_fba3c9ce6f__eli5__local
question: 'Explain: Non-Atomic Reservation — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 235
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:13:27-05:00'
sources: []
---

Imagine you’re booking a single‑seat ticket for a concert that only has one seat left. The ticket office (the system) offers a “reserve” button that lets you hold the seat while you decide whether to buy it. In a **non‑atomic reservation**, your click splits into two steps: first, the seat is marked as “reserved”; second, the payment is processed. If the payment crashes after the reserve step, the seat stays reserved forever—no one else can take it.

To avoid that, designers make the operation **idempotent**: no matter how many times you click the button, the final outcome is the same—either the ticket is sold or it’s still free. The system remembers “I already tried to reserve this seat” and ignores duplicate requests instead of creating new reservations. This guarantees that even if your reservation request is retried (because of a network glitch), the seat won’t be double‑booked, keeping the user experience smooth and the data consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
