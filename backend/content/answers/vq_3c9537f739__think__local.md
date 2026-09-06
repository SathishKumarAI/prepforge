---
qid: vq_3c9537f739__think__local
question: WHAT IS AN INDEX IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 351
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:26:16-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - Assume the learner knows basic SQL syntax but not performance concepts.  
   - Define “index” in the context of relational databases (not file‑system indexes).  

**2️⃣ Adopt a mental model: “Index = B‑Tree map of column values to row locations.”**  
   - Visualize it as a sorted lookup table that skips scanning entire tables.  

**3️⃣ Reason through step‑by‑step**  
   1. Explain what an index stores (column value + pointer).  
   2. Show how queries use the index: `WHERE`, `ORDER BY`, `JOIN`.  
   3. Contrast full‑table scan vs indexed lookup, with Big‑O implications.  
   4. Mention types (B‑Tree, hash, unique, composite) and when each is appropriate.  

**4️⃣ Avoid common traps**  
   - Don’t say “indexes always speed up queries”; note they add write overhead.  
   - Don’t conflate indexes with primary keys; a PK automatically creates an index but they’re not identical concepts.  

**5️⃣ Sanity‑check & verbalize**  
   - Summarize: “An index is like a book’s table of contents—quickly points to where data lives.”  
   - Ask the learner to think of a real query and mentally trace how the database would use the index.  
   - Confirm understanding by having them explain why an index might not help a particular query (e.g., non‑selective, small table).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
