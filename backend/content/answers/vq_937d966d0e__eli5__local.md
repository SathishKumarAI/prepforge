---
qid: vq_937d966d0e__eli5__local
question: What is Row Chaining, Row Migration?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 236
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:20:31-05:00'
sources: []
---

Think of a database table as a long book where each page holds one record (row).  

**Row chaining** happens when a record grows bigger than the space on its original page. Instead of moving the whole thing, the database puts a tiny “link” on that page pointing to another page that holds the rest of the record. It’s like writing an important note in a notebook and then jotting “see page 27 for details.” The pages are connected by these links, so when you read the row you follow the chain until all parts appear.

**Row migration** is a cleaner way: the whole record is copied to a new, larger page that can hold it all at once. Then the old page’s link (a “ghost” of the previous location) points to the new spot. It’s like moving your notebook from one shelf to another so you don’t need to jump between pages.

Both keep data readable, but chaining keeps more fragments linked together, while migration consolidates them into a single place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
