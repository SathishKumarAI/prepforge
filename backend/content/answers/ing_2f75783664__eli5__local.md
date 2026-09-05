---
qid: ing_2f75783664__eli5__local
question: 'Explain: Reference-based Eviction — CachesExplained \u00b7 google/guava
  Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 202
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:51:14-05:00'
sources: []
---

Imagine a library that keeps only the books you’re currently reading or have read recently. Every time you finish a book, you put it back on a shelf marked “recently finished.” If you open a new book, the library checks how many books are still marked as recent. When the number exceeds a set limit, the oldest “recently finished” book is automatically taken away and stored in a long‑term archive—this is **reference-based eviction**.

In computer caches, *references* mean “the cache has been accessed.” The cache keeps track of which items were used most recently (or least). When it’s full, it evicts the item that hasn’t been referenced for the longest time. This keeps hot data in quick‑access memory while quietly moving cold data elsewhere, just like the library keeps only the books you’re likely to read again nearby.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
