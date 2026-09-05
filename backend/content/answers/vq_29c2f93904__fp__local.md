---
qid: vq_29c2f93904__fp__local
question: WHAT IS THE DIFFERENCE BETWEEN CHAR AND VARCHAR?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 346
total_tokens: 516
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:27:59-05:00'
sources: []
---

**Why do we even need two string types?**

A database has to store characters efficiently while still allowing the *same* column to be queried and indexed.  
`CHAR(n)` solves this by allocating exactly **n bytes** (or n UTF‑8 code units) per row, padding with spaces if the value is shorter. This guarantees a fixed storage size, so the engine can compute an exact offset for every row in constant time—no pointer chasing, no variable‑length header. The price: wasted space and the need to trim trailing spaces when you read or compare values.

`VARCHAR(n)` trades that predictability for flexibility. It stores only the actual characters plus a small length prefix (1–4 bytes). For short strings the engine saves space; for very long ones it uses a separate allocation to avoid fragmenting the data page. However, every access must first read the length field and then seek the variable‑length payload, which can be slower on dense scans but faster when many values are shorter than `n`.

**Non‑obvious insight:**  
Most people overlook that *trailing spaces in a `CHAR` value are part of its content*. A comparison like `'abc' = 'abc '` is true for `CHAR`, false for `VARCHAR`. Thus, indexes on `CHAR` columns automatically ignore padding differences, but you must be careful when mixing data types or performing string concatenation—implicit trimming can silently alter query results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
