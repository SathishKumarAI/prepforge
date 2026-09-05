---
qid: vq_ec6beb20b6__eli5__local
question: HOW DO YOU DELETE DUPLICATE RECORDS WHILE KEEPING ONE COPY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 202
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:32:54-05:00'
sources: []
---

Imagine your bookshelf is a **linked list** – each book (node) points to the next one.  
You want only one copy of every title, but you can’t just throw books away; you must keep the chain intact.

1. **Walk through the shelf once**: Start at the first book and look ahead to the next one.  
2. If the next book has the same title as the current one (a duplicate), **cut it out** by changing the “next” pointer of the current book so that it skips over the duplicate and points directly to the following book.  
3. If the titles differ, just move on to the next book.

Repeat until you reach the end.  
You’ve removed every extra copy while preserving the original order—just like pruning a garden: each plant stays in place, but weeds are trimmed away.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
