---
qid: vq_cba95520a4__faang__local
question: 'What is the difference between :: and ::: in Scala?'
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 468
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:33:44-05:00'
sources: []
---

**Clarify**  
The interviewer asks about Scala’s *type projection* (`::`) vs *class tag* (`:::`, the `Seq` concatenation operator). I’ll assume they mean the two distinct syntaxes:  

1. `A :: B` – a *cons* constructor used in immutable lists.  
2. `xs ::: ys` – list/sequence concatenation (not a type projection).  

**Approach**  
Explain each construct, its semantics, and typical use‑cases. Compare performance characteristics and idiomatic usage patterns.

**Depth**  
- **`::`** is a case class in `scala.collection.immutable.List`. It prepends an element to the front of a list in *O(1)* time, producing a new list that shares the tail with the original. It’s fundamental for building lists recursively and pattern matching (`head :: tail`).  
- **`:::`** is defined on `SeqLike` (and thus on `List`, `Vector`, etc.). It concatenates two sequences by creating a new collection that contains all elements of the first followed by those of the second. For linked lists, it’s *O(n)* in the length of the left operand because it must traverse to its end; for vectors it’s amortized *O(1)* due to structural sharing.

**Edge Cases**  
- Using `:::` on an empty left side is cheap (`List.empty ::: xs == xs`).  
- Repeatedly prepending with `::` then reversing (`xs.reverse`) is faster than appending with `:+`.  
- Mixing mutable and immutable collections can lead to unexpected copies; always use the appropriate operator for the underlying type.

**Optimize & Communicate**  
Highlight that `::` should be preferred when building lists incrementally, while `:::` is useful for bulk concatenation where the left operand’s size is small or when working with other Seq types. Convey this by summarizing: *“Use `::` for O(1) prepend; use `:::` only when you truly need to merge two sequences.”* This demonstrates clear reasoning, complexity awareness, and idiomatic Scala practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
