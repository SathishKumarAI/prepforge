---
qid: vq_eb88238390__think__local
question: How do you copy an object in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 461
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:37:23-05:00'
sources: []
---

**1. Clarify the question & state assumptions**

- Ask whether “copy” means a shallow or deep copy.
- Confirm if the object is a built‑in container (list/dict/set), a custom class instance, or something else (e.g., NumPy array).
- Assume the user wants to avoid mutating the original when modifying the copy.

**2. Pick a mental model / framework**

Use Python’s `copy` module as the canonical reference:

| Need | Method | When to use |
|------|--------|-------------|
| Shallow copy of any object | `copy.copy(obj)` | For containers where nested objects can stay shared. |
| Deep copy (recursively) | `copy.deepcopy(obj)` | When nested mutable objects must be duplicated. |
| Copy built‑in collections | `list(obj)`, `dict(obj)`, `set(obj)` | Quick shallow copies of those types. |
| Custom objects | Implement `__deepcopy__` or use the module if appropriate | For user classes that need special handling. |

**3. Step‑by‑step reasoning**

1. Import the module: `import copy`.
2. Decide on shallow vs deep based on whether nested data should be shared.
3. Call `copy.copy(obj)` for a shallow clone, or `copy.deepcopy(obj)`.
4. For simple lists/dicts/sets, consider the constructor (`list(orig)`) as a shorthand.

**4. Common traps to avoid**

- Forgetting that `=` only creates a reference, not a copy.
- Using `deepcopy` on objects with circular references without custom handling (can raise recursion errors).
- Assuming built‑in constructors always produce deep copies (they don’t).
- Neglecting that some types (e.g., NumPy arrays) have their own `.copy()` method.

**5. Sanity‑check & communicate**

- Test by mutating the copy and verifying the original remains unchanged.
- Explain the difference between shallow/deep copies clearly, perhaps with a small example.
- Encourage reading the `copy` module docs for edge cases (e.g., objects that define `__reduce_ex__`).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
