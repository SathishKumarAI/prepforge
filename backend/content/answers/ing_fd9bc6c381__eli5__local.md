---
qid: ing_fd9bc6c381__eli5__local
question: 'Explain: Paging — Paging vs Segmentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 242
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:16:37-05:00'
sources: []
---

Imagine your computer’s memory is a giant bookshelf and each piece of data (a program, image, or file) is a book you want to store.

**Paging**: The shelf is divided into equal‑sized slots called *pages*. Every book is cut into page‑size chunks. When the computer needs a chunk, it looks up which slot that page lives in and pulls it out. Because all slots are the same size, the shelf never has gaps or awkwardly shaped spaces—every slot can hold any page.

**Segmentation**: Here the shelf is split into *segments* that match the natural shape of each book (title pages, chapters, illustrations). A segment may be long or short; it’s exactly the right size for its content. When a program runs, the computer keeps track of where each segment starts and how big it is.

So, paging guarantees uniform slots and easy bookkeeping but can waste space if a page isn’t full. Segmentation fits data naturally, saving space, but leaves gaps that the system must manage carefully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
