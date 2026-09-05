---
qid: ing_e3e047eddb__eli5__local
question: 'Explain: CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 252
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:36:19-05:00'
sources: []
---

**CAP Theorem – Think of it as a three‑way traffic light**

Imagine you run a coffee shop that must keep three promises to customers:

* **Consistency (C)** – every customer sees the same menu at the same time.  
* **Availability (A)** – any customer can always order a drink.  
* **Partition tolerance (P)** – even if the internet link between two branches breaks, the shop still runs.

The CAP theorem says a distributed system can satisfy only **two** of these at once.  

- If you pick *Consistency + Partition tolerance*, the shop may have to wait for the broken link to heal before serving a drink (availability drops).  
- Pick *Availability + Partition tolerance* and the two branches might temporarily show different menus (consistency drops).  
- Pick *Consistency + Availability* and you must keep all links working; if one branch loses connection, the whole shop stops serving drinks (partition tolerance drops).

So, like a traffic light that can only allow two directions at a time, a system must choose which two guarantees to uphold. The third is sacrificed whenever a network split happens.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
