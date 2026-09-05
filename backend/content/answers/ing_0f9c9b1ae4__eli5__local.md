---
qid: ing_0f9c9b1ae4__eli5__local
question: Design the human approval flow for an agent that files expense reports.
  Where do the gates go, and how do you stop people from clicking through them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 250
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:00:04-05:00'
sources: []
---

Imagine a bank teller who only hands out money after a series of checks: first the customer’s ID, then the amount requested, and finally a manager’s stamp if the sum is large. In the same way, an AI that submits expense reports must pass through “gates” that confirm its work before any human can approve it.

**Gate 1 – Identity check:** The system verifies that the report belongs to a real employee (who has logged in).  
**Gate 2 – Data sanity:** It checks that every line item follows company policy—no duplicate receipts, correct categories, and totals that match the submitted sum.  
**Gate 3 – Threshold review:** If the total exceeds a set amount (say $500), the report is held for a manager’s approval; otherwise it goes straight to finance.

To keep people from “clicking through” too fast, each gate blocks the next step until its own criteria are met and shows a clear status message (“Waiting for policy check…”). Only when every gate reports “Clear” does the final approval button become active. This layered approach keeps errors out while letting legitimate claims flow smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
