---
qid: ing_c88debd2e0__fp__local
question: 'Explain: Primary and Unique Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 401
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:07:28-05:00'
sources: []
---

**Why indexes exist**

In a database we often need *fast look‑ups* for a key that is not the row’s physical order.  
If every query had to scan all rows (O(n)), even a million rows would be slow.  
The *index* trades space for time: it stores a sorted structure (B‑tree, hash, etc.) that maps a key value directly to the row(s).  
Thus lookup becomes O(log n) or O(1).

**Primary vs. Unique**

| Feature | Primary Index | Unique Index |
|---------|---------------|--------------|
| **Purpose** | Guarantees a single *row* per key and defines physical clustering of data. | Ensures *no duplicate keys*, but does not dictate row placement. |
| **Constraint** | Implicit uniqueness + non‑NULL requirement. | Explicit uniqueness; NULLs allowed unless constrained otherwise. |
| **Storage** | Often the cluster index (data stored in leaf nodes). | Non‑clustered: separate structure pointing to data. |

Because a primary key is *both* an identifier and a clustering anchor, it must be unique by definition.  
A unique index is lighter when you only need uniqueness (e.g., email addresses) but want the flexibility of multiple tables sharing the same column.

**Non‑obvious insight**

The cost of maintaining a clustered primary index grows with write traffic: each insert must preserve order, causing page splits and I/O.  
If a table receives many writes, it is often better to use a **non‑clustered unique index** on the business key and keep the primary key surrogate (e.g., an auto‑increment) for clustering.  
This decouples logical uniqueness from physical storage, giving higher throughput while still enforcing data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
