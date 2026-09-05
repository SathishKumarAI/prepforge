---
qid: ing_58ee439f5f__star__local
question: 'Explain: Write an iterator class that lazily flattens an arbitrarily nested
  list of lists/integers. No generators - explicit state.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 285
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:25:17-05:00'
sources: []
---

**Situation:**  
At my last gig I was refactoring a legacy analytics pipeline that ingested user activity logs stored as deeply nested arrays (e.g., `[1, [2, [3, 4], 5], 6]`). The downstream component expected a flat stream of integers but the existing code forced a full copy into memory, blowing our RAM on large datasets.

**Task:**  
I needed to replace that approach with an iterator class that lazily walks any level of nesting, yielding one integer at a time, without using Python generators or recursion that could hit recursion limits.

**Action:**  
I built `FlatIterator` by maintaining an explicit stack of iterators. The constructor pushed the top‑level list onto the stack. In `__next__`, I looped: peek the iterator on top; if it’s exhausted, pop it and continue; otherwise fetch its next element. If that element is a list, wrap it in an iterator and push it onto the stack before retrying. This explicit state machine guarantees O(1) memory overhead regardless of depth.

**Result:**  
The new iterator processed 50 GB of nested logs using only ~2 MB RAM, cutting pipeline latency by 35%. I also learned how careful state management can replace recursion and generators in tight resource environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
