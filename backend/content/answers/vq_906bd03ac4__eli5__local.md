---
qid: vq_906bd03ac4__eli5__local
question: Can we use tables in GetMetadata activity ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 182
total_tokens: 339
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:20:11-05:00'
sources: []
---

Imagine your data warehouse is a huge library and every “table” is a shelf full of books (rows). The **GetMetadata** activity is like asking the librarian, “What’s on this shelf?” It can tell you how many books there are, what their titles are, or if the shelf is empty.  

You *can* point GetMetadata at a table (shelf) and ask for its characteristics—like the number of rows, column names, or storage size—but it won’t pull the actual books out; it only reports on them. Think of it as checking the back‑cover information before deciding to read a book.

So yes, use GetMetadata on tables to learn about their structure or size, but remember it’s just metadata—no data extraction happens here.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
