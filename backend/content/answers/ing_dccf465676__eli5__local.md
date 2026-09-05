---
qid: ing_dccf465676__eli5__local
question: 'Explain: CA (Consistency and Availability) — The CAP Theorem in DBMS -
  GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 245
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:23:48-05:00'
sources: []
---

Imagine a bakery that delivers cupcakes to three towns at once.  
The bakery can guarantee **C**onstistency (every town gets the same recipe), **A**vailability (a town can always order a cupcake right away), or **P**artition‑tolerance (the bakery keeps working even if the road to one town is blocked).  
But because the roads are limited, it can’t keep all three promises at once.  

* **Consistency + Availability**: If two towns want cupcakes simultaneously, the bakery must wait until the recipe book is updated in both places—so one town may have to wait (availability drops).  
* **Availability + Partition‑tolerance**: The bakery keeps delivering even if a road breaks, but each town might get a slightly different flavor because updates travel slowly (consistency drops).  
* **Consistency + Partition‑tolerance**: The bakery stops serving the isolated town until it can sync recipes—so that town feels unavailable.

The CAP theorem says any distributed database must choose two of these three guarantees and accept a trade‑off in the third.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
