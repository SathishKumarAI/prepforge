---
qid: vq_479cd7b193__faang__local
question: What are keywords in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 463
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:08:21-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of *keywords* in Python—those reserved identifiers that cannot be used for user‑defined names because they have a special syntactic meaning.

**Approach**  
1. Define what a keyword is.  
2. List the current set (or show how to retrieve it).  
3. Explain why keywords matter (parsing, scope, semantics).  

**Depth**  
In Python, *keywords* are words that the interpreter reserves for its own syntax; they cannot be used as variable, function, class or module names. They form the backbone of control flow, data types, and language constructs. As of Python 3.12 there are **55** keywords (e.g., `if`, `else`, `while`, `class`, `def`, `return`, `yield`, `import`, `from`, `as`, `with`, `try`, `except`, `finally`, `raise`, `global`, `nonlocal`, `lambda`, `True`, `False`, `None`, etc.). You can programmatically list them:

```python
import keyword
print(keyword.kwlist)   # ['False', 'None', 'True', ...]
```

These tokens are parsed by the lexer before any semantic analysis; attempting to assign a value to one (`if = 5`) raises a `SyntaxError`. Keywords also influence indentation and block termination, making them essential for Python’s readability‑oriented design.

**Edge Cases**  
- Future‑reserved words (e.g., `match`, `case` in 3.10+) are treated as keywords now but may change.  
- Using keyword names as attributes is allowed (`obj.if = 5`) but discouraged and can be confusing.  

**Optimize & Communicate**  
Emphasize that knowing the keyword set is vital for tooling (linters, IDEs) and for avoiding subtle bugs. Mention that while the list is fixed per version, developers should check `keyword.kwlist` when writing libraries intended to run across multiple Python releases. This concise yet thorough explanation showcases clear communication and technical depth expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
