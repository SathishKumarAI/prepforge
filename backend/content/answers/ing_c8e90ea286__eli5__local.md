---
qid: ing_c8e90ea286__eli5__local
question: 'Explain: Transactions & Their Types — 11 System Design Concepts Explained,
  Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 268
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:50-05:00'
sources: []
---

Think of a transaction like ordering a pizza at a delivery service. You pick toppings (the data you want to change), place the order, and wait for confirmation that it’s been processed. In computing, a **transaction** is a bundle of changes—reads or writes—that must either all happen together or none at all, just like your pizza order: no half‑baked pie.

There are three main types:

1. **Read‑only transactions** – you’re only looking (checking the menu). They never lock anything; they can run in parallel without blocking.
2. **Write‑intensive transactions** – you change something (adding pepperoni). These need locks to avoid two people adding different toppings at once, which could create a conflict.
3. **Mixed transactions** – both read and write (you check the menu then order). They combine the rules of both: they lock what they modify but still try to stay fast.

All share one rule: *Atomicity*—the pizza either comes whole or not at all; no half‑made orders. This keeps your system consistent, just like a reliable pizza service keeps you satisfied.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
