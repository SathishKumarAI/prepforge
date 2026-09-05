---
qid: ing_da52a66480__eli5__local
question: 'Explain: Tries (3 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 297
total_tokens: 458
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:20:09-05:00'
sources: []
---

Imagine a giant library where every book is sorted not by its title’s first letter alone, but by each word in the title, one letter at a time.  
A **Trie** (pronounced “try”) is that library’s skeleton: a tree whose branches represent letters and whose nodes keep track of words that pass through them.

- **Node** – A stop on the path; it can hold a letter and remember if a full word ends here.  
- **Edge** – The arrow from one node to the next, labeled with a single letter.  
- **Root** – The library’s entrance; no letter yet.  

When you add “cat” you walk from root → ‘c’ → ‘a’ → ‘t’, creating nodes as needed and marking the last node as an end of word. To find all words that start with “ca”, you simply travel to the ‘a’ node and read every descendant leaf, just like flipping through every book whose title begins with those letters.

This structure lets us insert, search, or autocomplete in time proportional only to the length of the query string—just a quick walk down a well‑organized tree.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
