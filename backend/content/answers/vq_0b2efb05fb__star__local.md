---
qid: vq_0b2efb05fb__star__local
question: Which explanation describes this error?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 337
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:25-05:00'
sources: []
---

**Situation**  
During a sprint to refactor our recommendation engine, I was tasked with implementing a new priority‑queue based cache eviction policy. The unit tests passed initially, but when we ran the integration test suite on production data, a `NullPointerException` surfaced in the `removeMin()` method of my custom binary heap.

**Task**  
I needed to identify why the heap returned null for an element that should have been present, fix the bug, and ensure the eviction logic stayed within our O(log n) time budget.

**Action**  
First, I instrumented the heap with debug logs to trace the state after each `insert()` and `removeMin()`. The logs revealed that during a bulk load of 10,000 items, the internal array was resized from 16 to 32 but the `size` counter wasn’t updated correctly, leaving a phantom null at index 0. I corrected the resize logic by moving the size increment inside the resizing block and added an invariant check (`assert size <= capacity`). Then I ran a stress test with randomized insert/remove sequences to confirm no more nulls appeared.

**Result**  
The integration tests now pass on all data sets, and the eviction policy consistently runs in O(log n). The heap’s correctness improved from 95% to 100% coverage. I learned that subtle off‑by‑one errors in dynamic array resizing can propagate into seemingly unrelated parts of the code, so I’ll always guard resize logic with invariants and run randomized stress tests before merging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
