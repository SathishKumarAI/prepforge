---
qid: vq_fa9b4f5257__star__local
question: What is the difference between Array and List in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 291
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:27:49-05:00'
sources: []
---

**Situation:** While leading a migration of our legacy data pipeline from Python to Scala, I had to refactor a component that processed large CSV files into in‑memory structures for downstream analytics.

**Task:** The goal was to replace the mutable list implementation we were using with a more efficient container that would reduce memory overhead and improve cache locality without breaking existing API contracts.

**Action:** I compared Scala’s immutable `List` (a singly linked list) against the `Array` type. I benchmarked both by loading 10 million rows, measuring GC pauses and CPU usage. The `List` required a new node per element, causing ~1.2 GB of heap churn and frequent minor GCs; the `Array` allocated a contiguous block (~400 MB) and allowed direct indexing, cutting GC time from 120 ms to 15 ms. I refactored the code to use an `ArrayBuffer` during construction for amortized O(1) appends, then converted it to an immutable `Array` before passing downstream.

**Result:** The pipeline throughput increased by 35%, and memory usage dropped by 60%. I learned that while `List`s are great for functional purity, arrays provide the performance needed for large‑scale data engineering tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
