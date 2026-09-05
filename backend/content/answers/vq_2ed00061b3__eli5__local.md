---
qid: vq_2ed00061b3__eli5__local
question: How to create an empty class in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 195
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:07:28-05:00'
sources: []
---

Think of a class as a *blueprint* for objects—like a recipe that tells you how to make a cake.  
If you want the blueprint but no ingredients yet, you just write the header and leave the body empty.

```python
class Empty:
    pass          # “pass” means: do nothing here right now
```

`class Empty:` starts the blueprint; `pass` is a placeholder that satisfies Python’s requirement for at least one statement inside the block.  
Now you can create objects from it:

```python
obj = Empty()   # an instance of the empty class
```

The object exists, but it has no attributes or methods until you add them later. This “empty” class is useful when you need a simple container to attach data to later or as a placeholder while building more complex logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
