---
qid: ing_120d2fa1b6__eli5__local
question: 'Explain: OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 353
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:04:14-05:00'
sources: []
---

Imagine your computer’s memory as a giant pantry where every item (a piece of data) has a shelf (a location).  
The **cheat sheet** is like a quick‑reference recipe card that tells you the best way to organize those shelves so you can grab, add, or rearrange items fast.

- **Array** – a straight row of labeled jars; you know exactly where each item sits by its index.  
- **Linked list** – a chain of jars linked by arrows; you walk from one to the next, useful when you keep adding or removing at the ends.  
- **Stack** – a stack of plates; you only touch the top plate (Last In, First Out).  
- **Queue** – a line of people; you add at the back and take from the front (First In, First Out).

For **sorting**, think of arranging your pantry by price:

1. **Selection sort** – find the cheapest jar in the whole row and swap it to the front, then repeat for the rest.  
2. **Insertion sort** – start with a single sorted jar; insert each new jar into its correct spot among those already sorted.  
3. **Merge sort** – split the pantry into halves, sort each half (recursively), then merge the two tidy halves together.

The cheat sheet lists these patterns, their time costs (how many steps for 10, 100, or 1,000 items), and when to use each—so you can pick the right tool for any data‑arranging task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
