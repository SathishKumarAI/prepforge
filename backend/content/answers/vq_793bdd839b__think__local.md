---
qid: vq_793bdd839b__think__local
question: WHAT IS A COMPOSITE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 417
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:51:38-05:00'
sources: []
---

**1. Clarify the context and assumptions**  
   - Ask whether the question refers to relational databases or a generic data‑structure concept.  
   - Assume it’s about *relational database* keys unless otherwise specified.  
   - Note that “composite key” means a primary key made of two or more columns.

**2. Mental model / framework**  
   - Recall the definition: a key is a set of attributes that uniquely identifies a row.  
   - A composite key is simply a *set* of columns whose combined values are unique, even if each column alone isn’t.  
   - Think of it as an “AND” condition on uniqueness.

**3. Step‑by‑step reasoning**  
   1. Identify the table’s candidate keys (unique sets).  
   2. Check if any candidate key consists of more than one column.  
   3. If yes, that candidate key is a composite primary key.  
   4. In SQL, you declare it with `PRIMARY KEY (col1, col2, …)`.

**4. Common traps to avoid**  
   - Mixing up *composite foreign keys* vs. *composite primary keys*.  
   - Forgetting that the order of columns in a composite key doesn’t affect uniqueness but matters for indexing and query optimization.  
   - Assuming every multi‑column unique constraint is a composite key; it’s only one if declared as primary.

**5. Sanity‑check & verbalize**  
   - Verify with an example: Table `OrderItems` has `(order_id, item_id)` as PK—both columns together uniquely identify each row.  
   - Explain that this ensures no duplicate order–item combinations while allowing the same `item_id` in different orders.  
   - Summarize: “A composite key is a primary key made up of multiple columns whose combined values guarantee uniqueness.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
