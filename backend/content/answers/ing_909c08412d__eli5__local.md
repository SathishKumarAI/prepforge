---
qid: ing_909c08412d__eli5__local
question: 'Explain: Least Frequently Used (LFU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 244
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:07-05:00'
sources: []
---

Imagine a tiny library that can hold only ten books at a time. Every time someone borrows a book, the librarian writes its name on a sticky note and counts how many times it’s been borrowed. When the shelf is full and a new book arrives, the librarian looks for the book with the *fewest* sticky notes—i.e., the least frequently used—and removes it to make space. That’s Least Frequently Used (LFU) cache eviction.

**Key terms**
- **Cache**: A small, fast storage area that keeps recent or popular data so a computer can fetch it quickly.
- **Eviction policy**: Rules deciding which cached item to discard when new data must be stored.

In LFU, each cached item gets a counter of how often it’s accessed. When the cache is full, the item with the lowest count (the least frequently used) is purged. This strategy keeps items that are genuinely popular, even if they were accessed long ago, and discards those rarely needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
