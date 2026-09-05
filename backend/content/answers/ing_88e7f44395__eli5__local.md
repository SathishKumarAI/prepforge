---
qid: ing_88e7f44395__eli5__local
question: 'Explain: Sorting Algorithms Runtime Table: inspired by https://www.bigocheatsheet.com/'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 399
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:13:24-05:00'
sources: []
---

Think of a sorting algorithm like a librarian who has to arrange books on shelves in alphabetical order.  
The **runtime table** tells you how many “moves” the librarian will make depending on how many books there are (the *n*).  

| Algorithm | Best‑case | Average | Worst |
|------------|-----------|---------|-------|
| **Bubble Sort** | O(n) – if books are already in order, one quick pass is enough. | O(n²) – usually the librarian has to compare every pair of neighboring books repeatedly. | O(n²) – worst‑case when books are reversed; many passes needed. |
| **Insertion Sort** | O(n) – a tidy shelf needs just a few checks. | O(n²) – typical shelves need shifting each new book into place. | O(n²) – the most chaotic shelf forces lots of shifts. |
| **Merge Sort** | O(n log n) – always splits and merges in about the same way, regardless of order. | Same as best‑case. | Same as average; very efficient for large piles. |
| **Quick Sort** | O(n log n) – if you pick a good “pivot” book each time. | O(n log n) on average with random pivots. | O(n²) – bad pivot choices (e.g., picking the first book every time) make it slow. |

*Key terms:*  
- **O‑notation** describes how the number of moves grows as the pile gets bigger.  
- **Best, Average, Worst** refer to the easiest, typical, and hardest initial arrangements of books.

So the table is simply a quick cheat sheet: pick an algorithm based on how many books you have and how much time you’re willing to spend letting the librarian shuffle them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
