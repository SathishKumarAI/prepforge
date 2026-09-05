---
qid: vq_06c53bd3f9__eli5__local
question: What is a RANKING function and what are the four RANKING functions?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 339
total_tokens: 504
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:01:31-05:00'
sources: []
---

Imagine you’re at a school sports day where kids run a race and you need to hand out medals.  
A **ranking function** is the rule that decides who gets which medal based on their finish time.

In SQL (the language used for data engineering), there are four common ranking functions, each with its own “medal‑giving” style:

| Function | What it does | Analogy |
|----------|--------------|---------|
| **ROW_NUMBER()** | Gives every row a unique number in the order you choose. | Like giving each runner a distinct bib number, even if two finish together. |
| **RANK()** | Assigns the same rank to tied rows and leaves gaps for the next rank. | If two runners tie for first, both get gold (rank 1) and the next gets bronze (rank 3). |
| **DENSE_RANK()** | Same as RANK(), but no gaps after ties. | Two runners tie for first; the next runner gets second place (rank 2), not third. |
| **NTILE(n)** | Splits all rows into *n* roughly equal buckets and labels each row with its bucket number. | Dividing all participants into 4 equal “groups” so you can see who falls into which quarter of the finish line. |

These functions let you order, compare, and group data in a way that mirrors how we rank people or items in everyday life.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
