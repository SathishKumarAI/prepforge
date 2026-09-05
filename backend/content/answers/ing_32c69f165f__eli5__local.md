---
qid: ing_32c69f165f__eli5__local
question: 'Explain: Capture and Settlement Flow — How VISA Works When Swiping a Credit
  Card'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 240
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:56:25-05:00'
sources: []
---

Think of a credit‑card swipe like ordering a pizza at a shop that delivers to your house.

1. **Capture (Order Placement)** – When you swipe, the card reader sends your “order” (amount, card number) to the bank that issued the card. The bank checks if you have enough credit and *holds* that amount in your account so no one else can use it. It’s like the shop putting a temporary hold on the pizza dough.

2. **Settlement (Delivery & Payment)** – A few days later, the merchant’s bank tells VISA to transfer the money from your bank to the merchant’s bank. The funds move through VISA’s payment network, and the held amount is permanently taken from your credit line and added to the merchant’s balance. It’s like the pizza arriving at your door; the dough is gone, and the shop gets paid.

So capture locks in the amount now, settlement actually moves the money later—just as a pizza order is placed today but the payment arrives after delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
