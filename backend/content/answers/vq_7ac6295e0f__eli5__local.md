---
qid: vq_7ac6295e0f__eli5__local
question: How many blocks forms extents, extent form segments?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 180
total_tokens: 339
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:17:10-05:00'
sources: []
---

Think of a database as a giant library where each book is one **block** (the smallest unit the computer can read or write).  
An **extent** is like a stack of books that belong to the same table or index – it’s a contiguous group of blocks put together so the system can find them quickly.  
A **segment** is the whole shelf for that object: all the stacks (extents) that make up the entire table, view, or index.  

So: one block = one page of paper; an extent = a handful of consecutive pages glued together; a segment = the entire collection of those glued‑together handfuls that form the complete book in the library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
