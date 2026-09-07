---
qid: vq_de9a3561b1__faang__local
question: What Does the ‘is’ Operator Do?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 448
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:38:53-05:00'
sources: []
---

**Clarify**  
The question asks about Python’s `is` operator.  
Assumptions:  
* The interviewer wants a clear distinction from `==`.  
* We should cover identity vs equality, common pitfalls, and typical use‑cases.

**Approach**  
1. Define “identity” in CPython.  
2. Contrast with value equality (`==`).  
3. Provide examples (small ints, strings, lists).  
4. Mention interning and its effect.  
5. Summarize best practices.

**Depth**  

| Operator | Meaning | Typical use |
|----------|---------|-------------|
| `is` | Checks if two references point to the **same object** (`id(a) == id(b)`). | Singleton checks, identity of `None`, caching, comparing immutable interned literals. |
| `==` | Calls `__eq__`; compares values/content. | General equality comparisons. |

*Example*:  
```python
a = [1, 2]; b = a; c = [1, 2]
a is b      # True – same list object
a == c      # True – same contents
a is c      # False – different objects
```

Interning: small ints (`-5..256`) and short strings are singletons, so `is` may return `True`. Rely on it only when you *know* an object is unique (e.g., `None`, enums).

**Edge Cases**  
* Mutable containers: two different lists with same items → `is` False.  
* Unhashable types or user‑defined classes without custom identity logic.  
* CPython’s reference counting vs other interpreters may differ.

**Optimize & Communicate**  
Explain that using `is` for equality is a bug unless checking singletons; it’s faster but semantically wrong. In interviews, emphasize the importance of understanding object life‑cycle and memory layout to avoid subtle bugs. This demonstrates both depth (technical detail) and structured reasoning (clarify → approach → depth → edge cases).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
