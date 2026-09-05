---
qid: ing_31c0694e08__eli5__local
question: 'Explain: Example: Overselling Inventory — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 277
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:54:32-05:00'
sources: []
---

Imagine a busy ice‑cream shop that sells only one special flavor each day. Every time a customer orders, the cashier must **atomically** record the sale, **consistently** keep the stock count correct, **isolate** the transaction from other sales happening at the same moment, and **durably** save the update so it survives a power cut—those are the ACID rules for databases.

Now picture two customers walking in at once. If the system checks “Is there any ice‑cream left?” separately for each order, both might see *yes* before either actually takes one scoop. The shop ends up giving out more scoops than it has – that’s **overselling**.  

A proper design keeps the inventory number inside a single ACID transaction: the sale reads the current count, decrements it, and writes back, all in one unbreakable step. With isolation (no other sale can read or write the same record at the same time) and durability (the change is saved), only one customer can succeed when stock is low. Thus overselling disappears because every order competes for the same locked inventory slot, just like a single cashier handling each scoop one by one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
