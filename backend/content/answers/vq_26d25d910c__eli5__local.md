---
qid: vq_26d25d910c__eli5__local
question: What is a Transaction ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 205
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:06:16-05:00'
sources: []
---

Think of a database as a kitchen and a **transaction** like a single meal order that the chef must finish correctly or not at all.

When the waiter brings an order, the chef starts preparing each dish (the individual SQL statements).  
If every step succeeds—ingredients are added, the pot boils, the plate is set—the whole meal is ready. The transaction then **commits**, meaning the kitchen’s inventory and the customer’s bill are updated together.  

But if something goes wrong mid‑prep—a missing spice, a burnt sauce, or an error in the order—the chef must **rollback**: all changes made during that meal are undone, leaving the pantry exactly as it was before the order started.

So, a transaction is a group of operations treated as one indivisible unit: either all its changes stick (commit) or none do (rollback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
