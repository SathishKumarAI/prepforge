---
qid: ing_c07071b0bf__eli5__local
question: 'Explain: Strong consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 187
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:41-05:00'
sources: []
---

**Strong consistency** is like a library that guarantees every reader sees the same copy of a book at any time.

*Imagine a single, perfectly organized shelf.*  
When someone borrows a book, it disappears from the shelf and reappears only when it’s returned. No one else can see or touch that copy until the return happens. If two people try to check out the same book at once, the library system immediately blocks the second request until the first is finished.

In database terms, “strong consistency” means every read sees the most recent write—no stale data, no split‑brain views. The system ensures all replicas are synchronized before any new read or write is allowed, just as the library guarantees a single authoritative copy at any moment. This guarantees predictability but can add latency because each operation must wait for all copies to agree.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
