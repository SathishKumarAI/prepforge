---
qid: vq_e1d4035439__eli5__local
question: What is the architecture in terms of a hard disk, extents and pages?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 214
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:39-05:00'
sources: []
---

Think of a hard disk like a giant library.  
The **entire disk** is the whole building – all its shelves hold books (data).  
An **extent** is one shelf: a contiguous block of space that can store several books without gaps. In databases we give each table a set of extents so it knows where to find its pages.

A **page** is a single book on that shelf. It’s the smallest unit the database reads or writes at once, usually 4 KB or 8 KB. When you ask for a row, the system opens the right page; when you add many rows, it fills the current page and then moves to a new one, possibly on the same extent.

So: disk → building, extents → shelves (contiguous space), pages → individual books that hold the actual data. This mapping keeps reading fast and writing organized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
