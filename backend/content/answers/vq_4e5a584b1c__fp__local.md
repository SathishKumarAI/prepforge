---
qid: vq_4e5a584b1c__fp__local
question: What are the literals in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 486
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:34:56-05:00'
sources: []
---

In Python a *literal* is the simplest way to embed a value directly into source code.  
The fundamental problem it solves is the representation of constants in a language that is both readable and machine‑efficient: we need a syntax that can be parsed deterministically, stored compactly in bytecode, and evaluated without side effects.  

Thus literals are defined as tokens that, once parsed, yield an immutable value with no evaluation cost beyond a direct lookup. They must be:

1. **Self‑describing** – the source form unambiguously identifies the type (e.g., `123` → int, `0xFF` → int in hex).  
2. **Immutable** – any alteration would change program semantics; this guarantees that literals can be safely cached and reused across runs.  
3. **Evaluated at compile time** – no runtime computation is required, which keeps the interpreter’s evaluation loop simple and fast.

Python therefore specifies five literal categories:

| Category | Syntax examples | Type produced |
|----------|-----------------|---------------|
| Numbers | `42`, `0b1010`, `0o77`, `3.14`, `1e-9`, `2j` | int, float, complex |
| Strings | `'abc'`, `"x y"`, `'''multiline'''`, f‑strings (special case) | str |
| Bytes | `b'bytes'`, `br'\n\t'` | bytes |
| Booleans & None | `True`, `False`, `None` | bool, NoneType |
| Containers of literals | `[1, 2]`, `(3, 4)`, `{5: 'five', 6: 'six'}` | tuple/list/set/dict (if all elements are themselves literals) |

A non‑obvious insight is that **container literals are only literal if every element inside is itself a literal**. This restriction allows the compiler to precompute the entire container at compile time, guaranteeing immutability and enabling optimizations like interning small tuples or caching dictionaries. It also explains why `a = [1]` is not a literal: lists are mutable, so a literal list would break the immutable‑literal guarantee.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
