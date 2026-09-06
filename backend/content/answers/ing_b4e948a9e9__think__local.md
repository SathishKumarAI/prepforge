---
qid: ing_b4e948a9e9__think__local
question: 'Explain: Common Types of Locks — Database Locks Explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 434
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:55:14-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Identify that “locks” refers to concurrency control in relational databases (row, table, page).  
   - Assume a generic RDBMS (e.g., PostgreSQL, MySQL) – not a specific vendor’s quirks unless asked.  
   - Note the audience: likely has basic DB knowledge but needs conceptual clarity.

**2. Adopt a mental model**  
   - Think of locks as *synchronization primitives* that protect data integrity during concurrent transactions.  
   - Map each lock type to its *purpose*, *granularity*, and *behaviour* (e.g., shared vs exclusive).  
   - Use the “transaction → statement → row” hierarchy to organize discussion.

**3. Step‑by‑step reasoning**  
   1. Start with **Locking levels**: row, page, table.  
   2. For each level, explain **lock modes** (shared/read, exclusive/write).  
   3. Discuss **deadlocks** and how lock ordering matters.  
   4. Mention **implicit vs explicit locks** (auto‑commit vs `SELECT … FOR UPDATE`).  
   5. Highlight vendor differences only if they illustrate a concept (e.g., MySQL’s “gap” locks).  

**4. Common traps to avoid**  
   - Don’t conflate *index* with *page* locks; clarify that indexes are separate structures.  
   - Avoid overly technical jargon without explanation—keep it digestible.  
   - Beware of assuming all DBs use the same lock protocol; note that some use MVCC instead.

**5. Sanity‑check & verbalize**  
   - Ask: “Does this cover both conceptual and practical aspects?”  
   - Summarize by restating each lock type with a quick example (e.g., two concurrent `UPDATE`s on the same row).  
   - End with a note that understanding locks is key to tuning performance and avoiding contention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
