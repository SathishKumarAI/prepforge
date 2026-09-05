---
qid: ing_0de669c890__eli5__local
question: 'Explain: Week 2 - Data structures ​ — Best practice questions by the author
  of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 302
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:57:29-05:00'
sources: []
---

Imagine your data is a library and you’re the librarian who must find books fast.  
**Arrays** are shelves with books in a fixed order—great when you know exactly where each book sits, but adding or removing a book means shifting everything else.  

**Linked lists** let you add or remove a book anywhere by just changing one bookmark; however, finding a specific book requires walking from the front one page at a time.  

**Stacks and queues** are like a stack of plates (last plate added is first taken) or a line at checkout (first in line served first). They’re simple but only let you access the “top” or “front.”  

**Trees**, especially binary search trees, organize books into branches so that you can skip whole sections: look left if the title is alphabetically earlier, right otherwise. A balanced tree keeps the height small, so finding a book takes few steps—just like having a well‑organized shelf map.  

When preparing for interviews (the Blind 75 list), remember that each of these structures has “best‑practice” tricks: use an array for random access, a linked list when frequent insertions/deletions occur, and a balanced tree when you need quick search with many elements. Knowing which tool matches the problem is like choosing the right library layout to make finding books effortless.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
