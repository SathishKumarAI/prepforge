---
qid: ing_bfc34c741a__eli5__local
question: 'Explain: Database Choice — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 292
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:40:53-05:00'
sources: []
---

Think of the system you’re designing as a **big kitchen** that has to serve many guests at once.  
The “database” is the pantry where all the ingredients are stored, and choosing it is like deciding whether your pantry will be a simple walk‑in fridge, a large walk‑through freezer, or a high‑speed automated shelf system.

When you prepare for a design interview:

1. **Know the menu** – list the data types (users, products, logs) and how often each is read or written.  
2. **Pick the right pantry shape** –  
   * A relational database (SQL) works well when ingredients must fit together in strict tables and you need strong consistency.  
   * A NoSQL key‑value store is great for quick look‑ups of single items.  
   * A document store balances structure with flexibility, while a graph database excels at relationships.  
3. **Consider the traffic** – high read/write rates may push you toward sharding or caching (Redis).  
4. **Plan the layout** – think about indexes, partitions, and backups as shelves that keep food easy to find and safe.

By matching “ingredients” to the right “pantry,” you show interviewers you can design a system that’s fast, reliable, and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
