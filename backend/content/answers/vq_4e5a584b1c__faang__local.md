---
qid: vq_4e5a584b1c__faang__local
question: What are the literals in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 604
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:58-05:00'
sources: []
---

**Clarify**  
The interviewer is asking for *Python literals*: the concrete values that can be written directly in source code (e.g., `5`, `"hello"`). I’ll confirm they want a list of literal types, not expressions or objects created at runtime.

---

**Approach**  
1. Enumerate each literal category.  
2. Give a short example and note any syntactic nuances (trailing commas, prefixes, etc.).  
3. Mention the built‑in type that each literal maps to.  

---

**Depth**

| Literal | Syntax | Built‑in type | Notes |
|---------|--------|---------------|-------|
| **Numeric** | `int`: `-42`, `+7`; `float`: `3.14`, `.5`, `1e6`; `complex`: `2j`, `3+4j` | `int`, `float`, `complex` | `0b101`, `0o77`, `0xFF` are also numeric literals (binary, octal, hex). |
| **Sequence** | `list`: `[1, 2]`; `tuple`: `(a,)`; `range`: `range(5)` | `list`, `tuple`, `range` | Empty tuple: `()`; empty list: `[]`. |
| **Mapping** | `dict`: `{'key': 'value'}` | `dict` | Empty dict: `{}`. |
| **Set** | `set`: `{1, 2}`; `frozenset`: `frozenset({1, 2})` | `set`, `frozenset` | `{}` is a dict, not an empty set. |
| **Boolean** | `True`, `False` | `bool` | Subclass of `int`. |
| **None** | `None` | `NoneType` | Singleton. |
| **String** | Single/double quotes: `'abc'`; triple quotes for multiline: `'''text'''`; raw strings: `r'\n'` | `str` | Unicode by default; escape sequences handled unless raw. |

All literals are *immutable* except mutable containers (`list`, `dict`, `set`) whose contents can change after creation.

---

**Edge Cases**

- Empty tuples vs empty lists: `()` vs `[]`.  
- `{}` is an empty dict, not a set—use `set()` for an empty set.  
- Numeric literals can be combined with prefixes (`0b`, `0o`, `0x`) and exponent notation.  

---

**Optimize & Communicate**

I’ll finish by highlighting that literals are the building blocks of code; understanding them is essential for parsing, serialization, and writing clear, maintainable Python. This concise table demonstrates breadth, depth, and clarity—key signals in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
