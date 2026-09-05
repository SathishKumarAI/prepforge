---
qid: vq_2094ba915c__eli5__local
question: When To Use Two Pointers?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 281
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:05:05-05:00'
sources: []
---

**When to Use Two Pointers**

Imagine you’re looking for a matching pair of shoes in a long line of people standing from both ends toward the middle. You start one hand at the front (the leftmost person) and the other at the back (the rightmost person). If the front shoe is too small, you move your left hand one step forward; if the back shoe is too big, you move your right hand one step backward. You keep doing this until both hands point to a pair that fits.

In programming, *two pointers* are two “hands” (indices or references) that walk through data from opposite ends or different positions, usually in an array or linked list. Use them when:

- **You need to compare elements** that are naturally paired (e.g., sorted array problems like “two‑sum” or “merge intervals”).  
- **The input is sorted**, so moving one pointer forward or backward can narrow the search quickly.  
- **You want linear time**: each element is examined at most once, giving O(n) complexity.

Think of two pointers as a duet that moves together, always staying within the same data structure, to find matches, sums, or patterns efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
