---
qid: ing_35927aadc4__eli5__local
question: 'Explain: Arrays & Hashing (9 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 366
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:00:35-05:00'
sources: []
---

Think of an array as a row of lockers in a school hallway, each locker numbered from 0 to n‑1. You can grab the locker at position i instantly because you know its exact spot—no searching needed.  
Hashing is like having a secret code book that tells you which locker holds a particular student’s key. Instead of walking down the whole row, you look up the student’s name in the book and jump straight to their locker. If two students get the same code (a *collision*), you follow a tiny side‑path (chaining or open addressing) until you find an empty spot.

The nine Neetcode problems test these ideas:  
1️⃣ Find a missing locker number (array).  
2️⃣ Check if any student appears twice (hash set).  
3️⃣ Count how many students share the same locker (frequency hash).  
4️⃣ Restore the original order of lockers after shuffling (in‑place array swap).  
5️⃣ Identify which locker holds a particular key (binary search on sorted array).  
6️⃣ Determine if two lockers can be swapped to sort the row (two‑sum in array).  
7️⃣ Find all pairs of students whose combined grades equal a target (hash map for complement).  
8️⃣ Detect a cycle in locker reassignments (Floyd’s cycle detection, an array trick).  
9️⃣ Remove duplicate lockers while preserving order (linked hash set).

In each case you either “index” by position or “lookup” by value—just as the hallway or code book lets you find what you need fast and neatly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
