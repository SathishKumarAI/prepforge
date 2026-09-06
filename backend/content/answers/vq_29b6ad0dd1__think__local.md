---
qid: vq_29b6ad0dd1__think__local
question: WHEN WOULD YOU USE A LEFT JOIN INSTEAD OF AN INNER JOIN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 378
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:19:59-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
   - Identify what data you *must* keep (the “left” table).  
   - Assume both tables exist in a relational DB, keys are known, and null‑friendly joins are supported.

**2. Mental model: set‑based view of join types**  
   - **Inner join** returns the intersection of two sets.  
   - **Left outer join** keeps every row from the left set and pads missing matches with NULLs.  

**3. Step‑by‑step reasoning**  
   1. Start with the requirement: “I need all customers, even those without orders.”  
   2. Map that to a set operation: keep all rows in *Customers*; add matching rows from *Orders* where they exist.  
   3. Recognize this is exactly a left outer join (`SELECT … FROM Customers LEFT JOIN Orders …`).  

**4. Common traps to avoid**  
   - Forgetting that an inner join silently discards unmatched rows, leading to missing data in reports.  
   - Using `WHERE orders.id IS NOT NULL` after a left join; this converts it back into an inner join.  
   - Assuming “missing” values mean something else (e.g., default values) when they’re actually NULLs.

**5. Sanity‑check & verbalize**  
   - Verify that every row from the left table appears in the result set, even if related columns are NULL.  
   - Communicate: “I’ll use a LEFT JOIN because I need to preserve all records from the left side regardless of whether there’s a matching right‑side record.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
