---
qid: vq_49cfcfc81e__think__local
question: What happens when Clustered Index is created?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 401
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:32:30-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
- Is the database system specified (SQL Server, MySQL, PostgreSQL, etc.)?  
- Are we talking about a *clustered index* on an existing table or creating one from scratch?  
- Assume a relational DBMS that supports clustered indexes (e.g., SQL Server).  

**2. Mental model / framework**  
- Understand that a clustered index determines the physical order of rows in the table.  
- Recognize the two main consequences: data re‑ordering and storage structure changes.  

**3. Step‑by‑step reasoning**  
1. **Identify key column(s)** chosen for the index.  
2. **Reorder existing rows** on disk to match the new sort order of those columns.  
3. **Rewrite the table** (or rebuild it) so that pages contain rows in sorted sequence.  
4. **Update page pointers / leaf nodes** of the B‑tree that now represents the data itself, not just a pointer list.  
5. **Adjust statistics & query optimizer hints** because cardinality estimates change.  

**4. Common traps to avoid**  
- Assuming only a logical index is created; forget that physical reordering happens.  
- Overlooking the impact on write performance (INSERT/UPDATE may require page splits).  
- Ignoring that unique constraints are often enforced automatically with clustered indexes.  

**5. Sanity‑check & verbalize**  
- Verify by running `SELECT * FROM table` and observing row order changes.  
- Check storage size: a clustered index can reduce fragmentation but may increase space if many page splits occur during rebuilds.  
- Communicate clearly that the clustered index both **organizes data physically** and **serves as the primary lookup structure**, unlike non‑clustered indexes which only point to rows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
