---
qid: vq_7a38d0cb83__eli5__local
question: What do you mean by ‘joins’ in PySpark DataFrame? What are the different
  types of joins?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 302
total_tokens: 472
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:17:06-05:00'
sources: []
---

Imagine two sets of cards: one set lists students’ names and IDs, the other lists courses and the same IDs. A **join** in PySpark is simply a way to “glue” these card piles together so that each student’s name appears next to the course they’re taking.  

* **Inner join** – keep only the cards that have matching IDs in both piles (students who are actually enrolled).  
* **Left outer join** – keep every card from the left pile and add matching right‑hand cards when available; if none, leave blanks (all students, even those not yet enrolled).  
* **Right outer join** – the mirror of left: all right‑pile cards plus any matches.  
* **Full outer join** – keep every card from both piles, filling in blanks where there’s no match (everyone and every course, even if some are unmatched).  
* **Cross (cartesian) join** – pair every left card with every right card, creating all possible combinations (useful for generating test data).

In PySpark DataFrames you call these joins by name (`inner`, `left_outer`, etc.) to tell the engine which cards to keep and how.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
