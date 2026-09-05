---
qid: vq_cba95520a4__fp__local
question: 'What is the difference between :: and ::: in Scala?'
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 385
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:56:23-05:00'
sources: []
---

**From first‑principles of collection construction**

In Scala a list is an *immutable* singly‑linked structure: each node holds a head value and a reference to the tail (the rest of the list).  
The syntax `x :: xs` is the constructor for this data structure.  
- **Why it works**: It mirrors the algebraic definition of a List as a disjoint union of `Nil` (empty) and `Cons(head, tail)`.  
- **Effect**: Prepending `x` to an existing list `xs` creates a *new* node whose tail points to `xs`, leaving the original list untouched.

`:::` is the *concatenation operator*.  
- **Why it works**: Concatenating two lists means creating a new chain that traverses the first list and, at its end, links to the second. The implementation must preserve immutability, so it copies every node of the left operand while reusing nodes of the right.
- **Effect**: `xs ::: ys` yields a fresh list whose elements are those of `xs` followed by all of `ys`.

**Non‑obvious insight:**  
Because `:::` traverses *only* the left list, its complexity is \(O(|xs|)\). Thus, repeatedly using `:::`, e.g., `list1 ::: list2 ::: list3`, incurs quadratic cost. The idiomatic solution is to build a single list by prepending with `::` and reversing at the end (`(for (x <- seq) yield x :: acc).reverse`). This subtle performance trap often surprises newcomers, yet it follows directly from the immutable, singly‑linked nature of Scala lists.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
