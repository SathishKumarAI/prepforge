---
qid: vq_371ba8a909__eli5__local
question: Different types of partition in hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 277
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:21-05:00'
sources: []
---

Think of a Hive table as a giant library that stores books (rows).  
A **partition** is like putting the books into separate shelves based on a common feature—say, “Year” or “Country.” Each shelf holds only books that share that value, so when you look for 2023 books you can jump straight to the “2023” shelf instead of scanning every book.

In Hive you can create these shelves in a few ways:

1. **Range partitioning** – split data into numeric ranges (e.g., 0‑99, 100‑199).  
2. **Hash partitioning** – use a hash function on a column to spread rows evenly across a fixed number of partitions.  
3. **List partitioning** – assign specific values to dedicated partitions (e.g., “US”, “CA”).  
4. **Composite (multi‑column) partitioning** – combine several columns, creating a tree of shelves (Year → Country).  

Each method chooses how the shelves are organized so that queries touch only the relevant ones, speeding up data retrieval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
