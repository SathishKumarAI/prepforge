---
qid: vq_f7bf8405e9__eli5__local
question: What are docstrings?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 152
output_tokens: 314
total_tokens: 466
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:34:16-05:00'
sources: []
---

Think of a docstring as the *instruction sheet* that sits right next to every piece of code—like a recipe card tucked beside each ingredient in a kitchen. When you write a function, class, or whole file, you can drop a short paragraph inside triple quotes (`"""…"""`) immediately after its definition. That paragraph is stored as a string and becomes the object’s “__doc__” attribute, which Python (and people) can read later.

So, if your function `add(a, b)` has:

```python
def add(a, b):
    """Return the sum of two numbers."""
    return a + b
```

the text *“Return the sum of two numbers.”* is its docstring. It’s automatically shown by help tools (`help(add)`) and can be printed with `add.__doc__`. Docstrings let anyone looking at the code (or an IDE) understand what it does without digging into the logic, just like a recipe card tells you how to cook before you start chopping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
