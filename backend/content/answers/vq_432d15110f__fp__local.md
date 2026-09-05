---
qid: vq_432d15110f__fp__local
question: What are generators in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 428
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:32:38-05:00'
sources: []
---

**Generators are lazy iterators—Python’s minimal‑memory solution for “streaming” data**  
At the heart of many problems is the need to process an unbounded or expensive sequence without materializing it all at once. A generator *solves* this by turning a function into an iterator that yields one item on demand, suspending its state between calls.  

Why must it work like this?  
1. **State preservation**: Each `yield` pauses execution; the stack frame (local variables, instruction pointer) is serialized in a coroutine object. When `next()` resumes, the function continues exactly where it left off. This is essentially *cooperative multitasking* but for data streams.
2. **Memory efficiency**: Only one element exists at any time, so O(1) memory usage regardless of sequence length—crucial when generating Fibonacci numbers or reading a 10‑TB log file line by line.

Deeper principle:  
Generators embody *lazy evaluation*, an optimization strategy that defers computation until required. In functional programming, this yields *compositional pipelines* where each stage can be chained (`map`, `filter`) without intermediate lists—akin to a lazy stream in Haskell. The runtime treats them as first‑class objects; you can pass them around, store them, or even compose them with other generators.

**Non‑obvious insight**  
Most people think generators are merely “faster loops.” In reality they expose *coinduction*: the ability to reason about infinite structures by observing finite prefixes. This allows algorithms (e.g., `itertools.islice`, `tee`) that can split or limit streams without materializing them, a property impossible with eager lists.

In short, generators are Python’s tool for *efficient, composable, on‑demand data production*, grounded in lazy evaluation and stateful coroutines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
