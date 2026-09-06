---
qid: vq_79bf793cbb__faang__local
question: How will you capitalize the first letter of a string?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 458
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:16-05:00'
sources: []
---

**Clarify**

> *Problem:* Convert a given string so that only its first character is uppercase, leaving the rest unchanged.  
> *Assumptions to confirm:*  
> • Input is non‑empty and ASCII/Unicode compliant.  
> • We want to preserve existing casing after the first char (e.g., `"hELLO"` → `"HELLO"`).  
> • No side effects: return a new string, don’t mutate the original.

**Approach**

1. Check for empty input – return it unchanged.  
2. Split the string into the first character and the suffix.  
3. Upper‑case the first char (`first.upper()`).  
4. Concatenate with the untouched suffix.

Python’s slicing makes this trivial; we’ll also discuss an alternative using `str.capitalize()` for completeness.

**Depth**

```python
def capitalize_first(s: str) -> str:
    if not s:
        return s          # edge case
    return s[0].upper() + s[1:]
```

*Complexity:*  
- **Time:** O(1) – constant‑time operations.  
- **Space:** O(n) for the new string of length *n*.  

`str.capitalize()` would give the same result but also lower‑cases the rest, which may not be desired.

**Edge Cases**

| Input | Expected Output |
|-------|-----------------|
| `""`  | `""` (no change) |
| `"a"` | `"A"` |
| `"Hello"` | `"Hello"` |
| `"hELLO"` | `"HELLO"` |

Test with Unicode, leading whitespace, or non‑alphabetic first characters to ensure robustness.

**Optimize & Communicate**

If performance is critical for massive strings, avoid slicing by using `join` on a list of two elements (`[''.join([s[0].upper(), s[1:]])]`). For readability and maintainability, the simple slice‑plus‑concatenation version is preferred. Explain that we chose clarity over micro‑optimizations because Python’s string operations are highly optimized internally.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
