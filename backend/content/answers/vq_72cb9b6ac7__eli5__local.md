---
qid: vq_72cb9b6ac7__eli5__local
question: WHAT IS A FILTERED INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 165
total_tokens: 320
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:15:50-05:00'
sources: []
---

Think of a library that only wants quick access to *new* books, not every book in the stacks.  
A **filtered index** is like a special shelf that holds just those new titles, arranged by author or genre so you can find them fast.

In a database, an index is a lookup table for rows. A filtered index adds a “filter” – a condition such as `WHERE IsActive = 1`. Only rows meeting that condition are stored in the index.  

So when you query active records, the database looks on this smaller shelf instead of the whole library, saving space and speeding up searches. It’s like having a shortcut for the subset of data you actually care about.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
