---
qid: ing_e9b26d8a7b__faang__local
question: 'Explain: So 10 is not included. So basically — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 524
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:43:09-05:00'
sources: []
---

**Clarify**  
You’re asking why the number **10** is *not* part of a typical Python `range` when we write something like `range(0, 10)`—and you’d like that explained as if it were part of a beginner‑level Python course.

Assumptions I’d confirm:  
- You’re using Python 3.  
- The question concerns the semantics of `range(start, stop[, step])`.  

**Approach**  
1. State what `range` actually returns (an immutable sequence).  
2. Explain the *stop* parameter is exclusive.  
3. Illustrate with examples and a short snippet that prints the values.  
4. Connect to why this design choice matters in real code.

**Depth**  

```python
for i in range(0, 10):
    print(i)          # 0 … 9
```

`range(start, stop)` generates numbers starting at `start`, incrementing by `step` (default 1), **until the next value would be ≥ stop**.  
Thus `stop` is *exclusive*—the sequence stops before reaching it. This mirrors common mathematical interval notation `[0,10)` and keeps the length of the sequence equal to `stop - start`. It also simplifies indexing: `range(5)` gives 0‑4, so index 4 is valid.

**Edge Cases**  
- Negative steps (`range(10, 0, -1)`) still exclude the stop value.  
- Empty ranges (`range(5, 5)`) produce nothing.  
- Very large ranges: Python lazily generates values, so memory‑safe.

**Optimize & Communicate**  
If you need to *include* 10, use `range(0, 11)` or `range(0, 10 + 1)`.  
Explain that this off‑by‑one behaviour is intentional to avoid subtle bugs in loops and array slicing.  
Wrap up by noting that understanding this convention early prevents confusion when working with list indices, slicing (`lst[:10]`), or NumPy arrays.

> **Takeaway**: In Python `range(a, b)` yields `[a, a+1, …, b-1]`; the stop bound is exclusive to keep the sequence length predictable and indexing safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
