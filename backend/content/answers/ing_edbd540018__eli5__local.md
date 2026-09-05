---
qid: ing_edbd540018__eli5__local
question: 'Explain: Side Effects Before Reservation — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 270
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:47-05:00'
sources: []
---

Imagine you’re ordering a pizza online. The first step is **“reserve the pizza”** – you tell the kitchen you want one, and they lock it for you. A second step is **“pay for it.”** In many systems we do the payment *after* the reservation, because if something goes wrong (network hiccup, server crash) we can cancel the reservation without losing money.

Now think of a system that does the opposite: it **takes the money first, then reserves the resource.** This is called “side effects before reservation.” The side effect is the payment—money leaves your account. If the reservation later fails (the pizza is already sold), we must undo the payment. That undoing is called **idempotency**: repeating the same operation (refund) has the same result, no matter how many times you try.

A good analogy: a library that lets you check out a book *only after* you’ve paid your overdue fine. If the checkout fails, the system must refund the fine exactly once. Idempotent refunds guarantee the user’s money is safe even if the network hiccups or the server restarts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
