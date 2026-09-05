---
qid: ing_df73fe51f3__eli5__local
question: 'Explain: Tiered storage — Time-Series PostgreSQL at Petabyte Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 239
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:29:25-05:00'
sources: []
---

Imagine a giant library that keeps every book ever written, but the books are organized by how often people look them up. The most popular titles stay on the front shelves where anyone can grab them instantly. Less‑used titles move to deeper stacks; they’re still there, just a bit farther away and slower to retrieve. At the back of the library, rare manuscripts are stored in climate‑controlled vaults—very secure but only opened when absolutely necessary.

In PostgreSQL for time‑series data at petabyte scale, this is exactly what tiered storage does. The “front shelves” hold recent records that analysts query all the time, stored on fast SSD disks. Older data moves to “deeper stacks,” kept on cheaper spinning drives or even cloud archives. When a rare, deep‑past timestamp is requested, the system fetches it from its vault—slower, but still available. This layered approach lets you store massive amounts of data without paying for high‑speed storage everywhere, while keeping frequent queries lightning‑fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
