---
qid: ing_46443e71ac__eli5__local
question: 'Explain: Rapid Fire Counting Sorts: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 239
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:28:07-05:00'
sources: []
---

**Rapid‑Fire Counting Sort (CS 61B style)**  
Imagine you’re a librarian who has to line up every book by its height, but the books are only a few inches tall and you know the tallest one is 12 inches. Instead of comparing each pair of books, you make a tiny “height counter” for every possible height (1‑inch, 2‑inches,…12‑inches).  

1. **Count**: Walk through all books once, bumping up the counter that matches each book’s height.  
2. **Accumulate**: Turn those counters into positions by adding them together from shortest to tallest. Now you know where the first 3‑inch book should go, then the next two, etc.  
3. **Place**: Scan the books again, placing each in its correct spot using the accumulated counts and decrementing that count as you go.

The result is a perfectly ordered list, built in linear time—just like sorting books by height with a single pass of counting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
