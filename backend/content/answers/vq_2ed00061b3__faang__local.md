---
qid: vq_2ed00061b3__faang__local
question: How to create an empty class in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 379
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:29-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a *syntax‑level* way to declare a class that has no attributes or methods, i.e. an “empty” type.  
Assumptions: we’re using Python 3.x; the goal is a minimal, syntactically valid definition (no `pass`‑style tricks needed).

**Approach**  
1. Define a new class with the usual `class` keyword.  
2. Supply no body—Python will automatically insert a single `pass`.  
3. Verify that the resulting type behaves like any other class.

**Depth**  
```python
# Empty class – no explicit body needed
class Empty:
    """A minimal, empty Python class."""
```
- The interpreter injects a hidden `pass` statement if the body is omitted.  
- `Empty()` creates an instance; `isinstance(Empty(), Empty)` → `True`.  
- The class inherits from `object` by default (`class Empty:` is equivalent to `class Empty(object):`).  
- No attributes, no methods, no metaclass customizations.

**Edge Cases**  
- Defining a class with only comments or whitespace still counts as empty; Python treats it the same.  
- If you need to explicitly show intent, adding a docstring (as above) is best practice.  
- Attempting `Empty.__dict__` will return an empty mapping.

**Optimize & Communicate**  
Explain that while an explicit `pass` can be added (`class Empty: pass`), it’s unnecessary and the interpreter handles it automatically. This keeps code concise, readable, and aligns with Pythonic style guidelines.  

*Word count:* ~170 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
