---
qid: ing_5880c6b350__eli5__local
question: 'Explain: Authorization Flow — How VISA Works When Swiping a Credit Card'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 232
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:56:43-05:00'
sources: []
---

Imagine you’re buying coffee and your card is like a tiny secret‑keeping notebook that only the bank can read.  
When you swipe, the machine (the “point of sale”) sends the notebook’s ID to the bank through a secure tunnel called **authorization**.  
The bank checks two things:  

1. **Identity** – Is this notebook really yours? The bank looks at the card number and a hidden code (the PIN or chip data).  
2. **Funds** – Do you have enough money in your account to cover the coffee? The bank counts the numbers in its ledger.

If both checks pass, the bank replies “OK” and the machine prints a green tick. The amount is then reserved but not yet taken from your balance. Later, when the shop sends a final bill, the bank actually moves the money.  

So, swiping is like handing over a secret notebook; the bank verifies identity and funds, reserves the amount, and later settles the transaction—just as a trusted cashier would with paper money.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
