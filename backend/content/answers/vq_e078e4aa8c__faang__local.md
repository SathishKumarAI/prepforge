---
qid: vq_e078e4aa8c__faang__local
question: Is Python case-sensitive?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 399
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:39:10-05:00'
sources: []
---

**Clarify**  
The interviewer asks whether the Python language treats identifiers (variables, functions, classes, etc.) as case‑sensitive. We assume they mean *source code* level and not runtime data like strings.

**Approach**  
1. State the property.  
2. Give concrete examples.  
3. Mention any nuances (e.g., string literals are case‑sensitive too).  

**Depth**  
Yes, Python is **case‑sensitive**. The interpreter distinguishes `foo`, `Foo`, and `FOO` as three distinct names. This applies to all identifiers: variable names, function names, class names, module names, and even attribute names on objects (`obj.attr` vs `obj.Attr`). The lexer tokenizes based on exact character matches; no automatic lowercasing or canonicalization occurs.

*Example:*  
```python
x = 1
X = 2
print(x, X)   # outputs: 1 2
```
Both `x` and `X` coexist. Likewise, string literals preserve case (`"Hello"` ≠ `"hello"`).

**Edge Cases**  
- **Unicode identifiers:** Python allows Unicode letters; case sensitivity applies to each code point (e.g., `µ` vs `Μ`).  
- **Imports:** Module names are case‑sensitive on case‑sensitive file systems, but Windows’ filesystem is not, which can lead to subtle bugs when moving code.  

**Optimize & Communicate**  
Explain that this design choice aligns with most programming languages, promoting consistency and avoiding accidental collisions. If the team uses a style guide (e.g., PEP 8), emphasize naming conventions (`snake_case` for variables, `CamelCase` for classes) to mitigate confusion while still leveraging case sensitivity for clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
