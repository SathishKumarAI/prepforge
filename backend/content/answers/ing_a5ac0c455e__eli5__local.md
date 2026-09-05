---
qid: ing_a5ac0c455e__eli5__local
question: 'Explain: Your agent buys things on behalf of users. Design the authorisation
  trail so a disputed transaction is resolvable.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 237
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:00:44-05:00'
sources: []
---

Think of your AI shopper as a **digital cashier** that takes orders from customers and hands them to a bank‑card machine.  
When the agent “buys” something, it writes three short notes on the same receipt:

1. **What was bought** – item name, price, seller address.  
2. **Why it was bought** – the user’s request ID and the rule that allowed the purchase (e.g., “user wants coffee for lunch”).  
3. **Who authorized it** – a signed stamp from the user’s device and a timestamp.

All three notes are stored together in an immutable ledger (a tiny blockchain or secure database). If later someone disputes the charge, they can pull up that receipt: they see exactly what was ordered, why it was allowed, who approved it, and when. Because every step is recorded and signed, the dispute can be resolved by checking the chain of approvals instead of guessing who paid or why. This simple “receipt trail” keeps the process transparent, trustworthy, and audit‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
