---
qid: ing_3703878b61__fp__local
question: What Is a Database Index? — Indexing | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 454
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:01:21-05:00'
sources: []
---

### Why a database needs an index

When a query asks for *rows where `age = 30`*, the engine could scan every row in a table (a **full‑scan**).  
The cost of that scan grows linearly with the number of rows, \(O(n)\), and is wasteful when only a tiny fraction satisfies the predicate.  

An index is an auxiliary data structure that lets the database **optimize search** by trading a small amount of storage for logarithmic lookup time, \(O(\log n)\).  
It implements the *information‑theoretic* principle that to locate one item among \(n\) you need \(\log_2 n\) bits of information.  

### How it works (first principles)

1. **Key extraction** – For each row, extract the indexed column(s); this is the key.
2. **Ordering & tree structure** – Store keys in a balanced search tree (B‑tree/B+tree).  
   *The tree keeps keys sorted so that a binary decision at each node tells you which subtree to follow.*
3. **Pointer to data** – Each leaf stores a pointer (row ID or physical address) instead of the full row.
4. **Query routing** – When a query arrives, the engine walks the tree using the key value(s), reaching the relevant leaves in \(O(\log n)\) time and retrieving only those rows.

### A non‑obvious insight

Indexes are *not* just “look‑ups”; they also **guide physical data placement**.  
Because B‑tree nodes are stored contiguously, rows that share a key are read from adjacent disk blocks.  
This spatial locality dramatically reduces I/O for range queries (e.g., `WHERE age BETWEEN 20 AND 30`), turning a potential random‑access pattern into a sequential scan of few pages.  

Thus, an index is fundamentally an *information compression* and *data‑locality* engine that turns linear search into logarithmic plus sequential access.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
