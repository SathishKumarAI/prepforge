---
qid: ing_35947d7105__eli5__local
question: 'Explain: False Positives — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 213
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:00:34-05:00'
sources: []
---

Imagine you’re a librarian with an enormous, invisible index that tells you whether a book is in the library. The index is fast but it can occasionally give you a *false positive*: it says “yes, we have this title” when the book is actually not there. A Bloom filter works like that quick index. It hashes each item into several positions in a bit array; to check for membership it looks at those bits. If all are set, the item might be present— but because different items can share hash spots, you may get a “yes” even though the item never entered the filter. In system design, Bloom filters let us reject obvious non‑existence quickly, saving time and space, while accepting that a tiny fraction of queries will mistakenly pass through. This trade‑off is useful for cache lookups, database deduplication, or network routing where speed outweighs occasional missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
