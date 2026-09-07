---
qid: vq_d1b439b2ad__faang__local
question: What are the types of literals in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 637
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:35:11-05:00'
sources: []
---

**Clarify**  
The interviewer asks for *all* literal types that can appear directly in a Python source file. We’ll assume CPython 3.x and standard syntax (no future annotations or custom literals).  

**Approach**  
1. List categories: numeric, string, boolean/None, sequence & mapping, and special forms.  
2. For each category provide examples, syntax rules, and any nuances (e.g., prefixes, escapes).  
3. Conclude with a quick reference table.  

**Depth**  

| Literal type | Syntax example(s) | Notes |
|--------------|-------------------|-------|
| **Integer** | `42`, `-7` | Decimal, binary (`0b101`), octal (`0o77`), hex (`0x1A`) |
| **Float** | `3.14`, `-0.001`, `2e10`, `-5E-4` | Supports scientific notation; suffixes like `j` for complex, not for float |
| **Complex** | `1+2j`, `-3j`, `4j` | Requires a real or imaginary part and the trailing `j`/`J` |
| **String** | `'hello'`, `"world"`, `'''multiline'''`, `r'\n\t'`, `f'{x}'` | Single/double quotes, triple for multiline; raw (`r`) and f‑strings (format) are still string literals |
| **Bytes** | `b'abc'`, `b'\xff'`, `br'\n'` | Byte literal with optional `b`/`B`; raw bytes allowed |
| **Boolean / None** | `True`, `False`, `None` | Built‑in singleton objects, not keywords in older Python versions but literals now |
| **Sequence** | `[1, 2]`, `(3, 4)`, `{5}` (set literal), `{}` (empty dict) | Parentheses for tuples, brackets for lists, braces for sets/dicts; empty set requires `set()` |
| **Mapping** | `{'a': 1, 'b': 2}` | Dictionary literal; keys can be any hashable literal or expression |
| **Ellipsis** | `...` | Used in slicing (`arr[1:3]`) and type hints |

**Edge cases**  
- Empty tuple `()` vs. grouping `()`.  
- `0o`, `0b`, `0x` prefixes must be followed by valid digits.  
- Raw strings cannot end with an odd number of backslashes.  
- f‑strings cannot contain a backslash in the expression part.

**Optimize & communicate**  
I’d finish by summarizing that Python’s literal set is exhaustive yet concise, and that understanding them aids parsing, AST generation, and type inference. This structured reply demonstrates clear communication, depth, and awareness of edge nuances—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
