---
qid: vq_fa9b4f5257__fp__local
question: What is the difference between Array and List in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 487
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:04:47-05:00'
sources: []
---

### From the Problem to the Solution  

When a program must hold an ordered collection of values, it faces two trade‑offs:

1. **Fixed size vs. dynamic growth** – does the data structure know its length at compile time or can it change?  
2. **Contiguous memory vs. pointer indirection** – do we want fast sequential access (cache locality) or flexible insert/delete?

In Scala these concerns map to two distinct abstractions:

| Feature | `Array[T]` | `List[T]` |
|---------|------------|-----------|
| Size | Fixed at construction; resizing requires a new array. | Dynamic; nodes can be added/removed at O(1) (head) or O(n) (tail). |
| Storage | Contiguous block of memory (like Java’s `Object[]`). | Linked list of immutable `::` cells (`Cons`) ending in `Nil`. |
| Access | Constant‑time random access via index. | Only sequential traversal; head is O(1), tail requires walking the whole list. |
| Mutability | Mutable elements, but the array reference itself can be reassigned. | Immutable by default; operations return new lists without altering originals. |

#### Why the Difference Matters  

- **Cache efficiency**: `Array`’s contiguous layout yields fewer cache misses when iterating, making it preferable for numeric pipelines (e.g., matrix multiplications).  
- **Functional safety**: Because `List` is immutable, you can freely share sub‑lists across threads without synchronization.  
- **Memory overhead**: Each `::` node stores two references; an array only stores the elements themselves.

#### Non‑obvious Insight  

In Scala’s standard library, a `List` is implemented as a *lazy* structure (`LazyList`) when you write `1 #:: 2 #:: LazyList.empty`. The laziness means the list can conceptually be infinite (e.g., the Fibonacci sequence). An `Array`, by contrast, must materialize all elements in memory. Thus, if your algorithm only needs a few elements of an unbounded stream, prefer a lazy `List`; for bulk numeric work where you need random access, choose an `Array`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
