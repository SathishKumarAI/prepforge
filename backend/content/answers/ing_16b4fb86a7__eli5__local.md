---
qid: ing_16b4fb86a7__eli5__local
question: 'Explain: LSM-Tree (Log-Structured Merge Tree) — Database-Internals/DataStructures/LSMTree.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 229
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:11:38-05:00'
sources: []
---

Think of an LSM‑tree as a **library that first writes every new book on a log shelf before moving it to the permanent stacks**.

When you add data, the system appends it to a fast, in‑memory “write buffer” (the log). This is quick because you’re just adding at the end of a file. Periodically, the buffer is flushed and sorted into a larger on‑disk component called an **SSTable** (a sorted string table). Older SSTables sit deeper in the library. To keep the stack tidy, the system merges several older tables into one new, bigger table—like reorganizing shelves so you don’t have many tiny piles.

Queries scan the newest buffer first and then each on‑disk component from newest to oldest. Because each component is sorted, the system can skip large sections quickly, much like looking up a word in an alphabetized index. This design makes writes fast (just appending) while still allowing reasonably quick reads by merging sorted chunks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
