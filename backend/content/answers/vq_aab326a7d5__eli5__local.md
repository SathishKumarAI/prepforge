---
qid: vq_aab326a7d5__eli5__local
question: How to implement parallel copies in ADF using partitioning ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 183
total_tokens: 343
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:40-05:00'
sources: []
---

Think of your data lake as a huge library and each file you copy is a book that needs to be moved from one shelf to another. Parallel copying is like having several librarians (workers) move books at the same time instead of one after another.

In Azure Data Factory (ADF), **partitioning** tells ADF how to split that big library into smaller sections so multiple librarians can work simultaneously. You choose a column (like “date” or “region”) and give each value a range or bucket—each bucket becomes its own task. ADF then launches many copy activities in parallel, one per bucket, copying only the rows that belong there.

So, partitioning = dividing the library into shelves; parallel copies = letting many librarians move shelves at once, speeding up the whole transfer without mixing books.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
