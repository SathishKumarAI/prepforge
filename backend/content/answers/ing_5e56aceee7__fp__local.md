---
qid: ing_5e56aceee7__fp__local
question: 'Explain: Hash Functions — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 472
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:25:19-05:00'
sources: []
---

### Why a Bloom filter?

Suppose a service must answer *“is user X in the banned list?”* for billions of queries per day.  
A naïve lookup (hash table or database) would need to read the entire table or hit storage every time, costing latency and bandwidth.  
We want **constant‑time membership tests** that use *minimal space* and *no false negatives*—a classic “set membership” problem.

### The mathematical core

Let \(n\) be the number of items inserted, \(m\) the bit array size, and \(k\) independent hash functions.  
Each insertion sets \(k\) bits to 1; each query checks those same positions.  
The probability that a particular bit remains 0 after all insertions is \((1-1/m)^{kn}\approx e^{-kn/m}\).  
Thus the false‑positive rate (all queried bits happen to be 1 by chance) is

\[
p = \left(1-e^{-kn/m}\right)^k .
\]

Minimising \(p\) for fixed \(n,m\) yields \(k=\frac{m}{n}\ln2\), giving the classic trade‑off: more bits → fewer false positives.

### Why it works in practice

* **No false negatives**: once a bit is set, any query that reads that bit will say “yes.”  
* **Space efficiency**: a Bloom filter for 1 billion users can fit in < 2 GB versus a full hash table.  
* **Parallelism & cache friendliness**: all operations are simple XORs and bit tests.

### Non‑obvious insight

A Bloom filter is *not* just a compressed set; it’s an instance of **probabilistic data structures** that tolerate controlled errors to achieve linear‑time, sub‑linear‑space queries.  
This principle underlies many modern systems (e.g., distributed hash tables, database join optimizers). By accepting a tiny \(p\), you eliminate expensive I/O entirely—an architectural shift from “store everything” to “store what matters.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
