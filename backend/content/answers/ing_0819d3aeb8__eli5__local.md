---
qid: ing_0819d3aeb8__eli5__local
question: 'Explain: Step 5 - Access Methods — SQL Statement Execution in Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 231
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:48:21-05:00'
sources: []
---

**Step 5 – “Access Methods: SQL Statement Execution”**

Think of a database as a giant library and an **SQL statement** as a librarian’s request. When you write something like  
```sql
SELECT * FROM customers WHERE age > 30;
```
you’re telling the librarian (the database engine) to fetch all books (rows) that match a rule (age > 30). The librarian then follows a set of rules—called *access methods*—to find those books quickly.  

- **Index scan**: If there’s a “book index” by age, the librarian can jump straight to the relevant shelf instead of checking every book.  
- **Full table scan**: Without an index, the librarian must read each book one by one.

Once the librarian gathers the requested rows, they hand them back to you in a tidy list. In machine‑learning pipelines, this step supplies the training data that the algorithm will later learn from.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
