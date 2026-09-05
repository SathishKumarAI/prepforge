---
qid: ing_0ebbd2afd5__eli5__local
question: 'Explain: Binary Search Trees (BSTs): — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 217
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:58:52-05:00'
sources: []
---

Imagine a library where every book has a unique call‑number.  
When you want to find a book, you don’t scan the whole shelf; instead you look at the middle book first.  
If your target’s number is smaller, you go left (the “smaller” side); if it’s larger, you go right (the “larger” side).  
You keep repeating this “look‑at‑middle‑then‑choose‑side” rule until you find the book or hit an empty spot.

That simple rule is a **Binary Search Tree (BST)**.  
Each node holds one value and two pointers: left for smaller values, right for larger ones.  
Because every step halves the remaining search space, finding a value takes about *log₂ n* steps instead of scanning all *n* nodes.  
Insertions and deletions keep this ordering intact, so the tree stays efficient as it grows or shrinks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
