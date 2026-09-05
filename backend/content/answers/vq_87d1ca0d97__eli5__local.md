---
qid: vq_87d1ca0d97__eli5__local
question: How does Linear Algebra relate to broadcasting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 194
total_tokens: 349
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:18:49-05:00'
sources: []
---

Think of a row of dominoes that all fall at once when you push the first one.  
In linear algebra we have **vectors** (lists of numbers) and **matrices** (tables of numbers).  
When we “broadcast” in code, we let a small set of numbers automatically match up with a larger array—just like the single pushed domino makes every other domino fall without us touching each one.  

Broadcasting is the rule that says: if you add a 1‑D vector to a 2‑D matrix, the vector’s values repeat along the missing dimension so every row gets the same addition.  
So linear algebra gives the shapes (dimensions) of data, and broadcasting tells how those shapes can align automatically, letting us perform big calculations with little code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
