---
qid: vq_629067d5b5__aws__local
question: Difference between logical and physical plan?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 374
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:54:15-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* & *Dive Deep*  
> **Situation (S):** In a recent migration of our recommendation pipeline to Redshift, the team noticed that query runtimes doubled after adding new tables.  
> **Task (T):** I had to explain why the logical plan remained unchanged while the physical plan exploded in cost and time.  
> **Action (A):**  
> 1. Clarified that the *logical plan* is a high‑level, optimizer‑agnostic representation of the SQL – it only knows tables, columns, joins, and predicates.  
> 2. The *physical plan* is the executor’s blueprint: it chooses join algorithms (hash vs merge), push‑down filters, partition pruning, and decides on distributed execution strategies.  
> 3. I demonstrated using `EXPLAIN` in Redshift that our logical plan had a simple nested loop join, but the physical plan switched to a full sort‑merge due to data skew after adding a new dimension table.  
> 4. Implemented statistics collection and added a materialized view to force a hash join, cutting runtime from **45 s → 12 s** (≈73% improvement) and reducing CPU credits by 38%.  
> **Result (R):** The pipeline now processes 1M rows per hour with < 5 s latency, meeting SLA while keeping costs below budget.  

*Bar‑raiser cues:* ownership of performance bottleneck, deep dive into optimizer internals, quantifiable impact, and iterative learning from the failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
