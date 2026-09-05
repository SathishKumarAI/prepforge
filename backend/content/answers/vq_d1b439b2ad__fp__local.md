---
qid: vq_d1b439b2ad__fp__local
question: What are the types of literals in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 520
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:57:39-05:00'
sources: []
---

In Python a *literal* is a syntactic construct that denotes an immutable value directly in source code.  
They arise because every program must be able to refer to concrete data without invoking runtime computation: strings, numbers, booleans, and the singleton `None` are the most common.

| Category | Syntax | Underlying type | Why it exists |
|----------|--------|-----------------|---------------|
| **Numeric** | `42`, `3.14`, `1e-9`, `0b1010`, `0o77`, `0xFF` | `int`, `float`, `complex` (via `1j`) | Direct representation of mathematical objects; the base prefixes (`0b`, `0o`, `0x`) expose underlying binary, octal or hexadecimal encoding, which is essential for low‑level tasks. |
| **Boolean** | `True`, `False` | `bool` (subclass of `int`) | Provides a clear truth value in logical expressions; inheriting from `int` preserves compatibility with arithmetic (`True == 1`). |
| **String** | `'text'`, `"text"`, `'''text'''`, `"""text"""` | `str` | Textual data must be encoded as sequences of Unicode code points. Triple quotes allow multi‑line literals without escape characters, facilitating documentation and raw strings (`r"text"`). |
| **Sequence/Mapping** | `[1, 2]`, `(3, 4)`, `{5: 'a', 6: 'b'}`, `{'x': [1, 2]}` | `list`, `tuple`, `dict` | Immutable (`tuple`) or mutable (`list`, `dict`) containers are fundamental for grouping values. |
| **Singleton** | `None` | `NoneType` | Represents the absence of a value; its uniqueness allows identity checks (`is None`). |

The deeper principle is *equality by value*: literals create objects that are immediately comparable without indirection. This guarantees that, for example, `42 == 42` holds at compile time, enabling optimizations such as constant folding and interning (especially for small integers and short strings). An often overlooked insight: **Python interns small integers and frequently used string literals**, so two identical literals may refer to the same object (`is`), which can be exploited for efficient identity checks in performance‑critical code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
