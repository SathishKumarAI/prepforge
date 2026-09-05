---
qid: ing_b38a45993d__eli5__local
question: 'Explain: CAP Theorem of the Distributed Systems — Captheorem'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 216
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:21:37-05:00'
sources: []
---

**CAP Theorem – the “Choose Your Own Adventure” rule for distributed systems**

Imagine you’re running a library that is spread across several islands (servers). You want three things:  
* **Consistency (C)** – every reader sees the same book list at the same time, just like a single copy of a catalog.  
* **Availability (A)** – any island can answer a request immediately, so no one has to wait for a connection back to the mainland.  
* **Partition tolerance (P)** – if the sea gets rough and islands lose communication (a network split), the library still keeps running.

CAP says you can only guarantee two of these three at once. It’s like a pizza with three toppings: you can enjoy any two flavors, but trying to have all three will leave one missing. So in practice, designers pick which two matter most for their service—often consistency + partition tolerance or availability + partition tolerance—and accept the trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
