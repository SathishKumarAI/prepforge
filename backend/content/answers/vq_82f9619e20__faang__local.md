---
qid: vq_82f9619e20__faang__local
question: Multiples of Three from a Series?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 410
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:19:56-05:00'
sources: []
---

**Clarify**  
We need a routine that, given an iterable (list/tuple/generator) of numbers, returns all elements divisible by 3.  
Assumptions: the input is numeric and may be large; order should be preserved; we want O(n) time and O(1) extra space beyond the output list.

**Approach**  
Iterate once over the series, test each value with `value % 3 == 0`, and append matching items to a result list. This is a single‑pass linear scan, optimal for both time and memory.

**Depth**  
```python
def multiples_of_three(series):
    """Return elements of *series* that are divisible by 3."""
    return [x for x in series if isinstance(x, (int, float)) and x % 3 == 0]
```
Complexity:  
- Time = O(n) where n is the number of items.  
- Space = O(k), k = count of multiples of three (output size).  
The list comprehension keeps the code concise while still being readable.

**Edge Cases**  
- Empty input → returns `[]`.  
- Non‑numeric values raise a TypeError; we guard with `isinstance` to skip them.  
- Negative numbers and floats work correctly because `%` handles both.  
- Very large sequences: generator support via the same comprehension works lazily.

**Optimize & Communicate**  
If the caller only needs an iterator, return a generator (`(x for x in series if ...)`) to avoid building a list.  
Explain that this approach satisfies FAANG expectations: clear problem restatement, concise O(n) algorithm, and awareness of edge cases and potential optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
