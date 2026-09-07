---
qid: vq_fa9b4f5257__faang__local
question: What is the difference between Array and List in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 519
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:43:32-05:00'
sources: []
---

**Clarify**  
You’re asking how a `Array` differs from a `List` in Scala’s collections API. The key distinctions involve mutability, indexing cost, and typical use‑cases (random access vs. functional patterns). I’ll assume the question targets core Scala (`scala.collection`) rather than Java interop.

**Approach**  
1. Compare **mutability**.  
2. Contrast **indexing / performance** characteristics.  
3. Note **typical idioms** and **memory layout** differences.  

**Depth**  
| Feature | `Array[T]` | `List[T]` |
|---------|------------|-----------|
| Mutability | Mutable, fixed length; elements can be reassigned (`arr(i)=v`). | Immutable; construction returns a new list, original unchanged. |
| Indexing | Constant‑time O(1) random access via contiguous memory array. | Linear time O(n) for `apply(i)`; efficient head/tail operations (O(1)). |
| Construction | `Array.ofDim[T](n)` or `Array(x,y,…)`. Size known at creation. | Built with cons (`x :: xs`) or factory methods (`List(1,2,3)`); length can grow/decrease lazily. |
| Underlying layout | JVM array of objects/primitive values; contiguous in memory → cache friendly. | Linked list of nodes (head + tail) – heap allocated per element; good for prepending. |
| Typical use‑case | Numeric crunching, image buffers, interop with Java APIs. | Functional pipelines (`map`, `filter`), recursion, pattern matching, immutable data flow. |

**Edge cases**  
- `Array[Int]` is a primitive array in the JVM → faster than boxed `List[Int]`.  
- Very large lists (millions of elements) suffer from GC overhead; arrays are more memory‑efficient.  
- `List` can be empty (`Nil`) without extra allocation.

**Optimize & communicate**  
When choosing, say: “If you need fast random access or interop with Java, use `Array`. If you value immutability and functional composition, pick `List`.” Highlight that both belong to the same collection hierarchy but serve different performance profiles. This concise comparison meets FAANG’s structured‑answer expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
