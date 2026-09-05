---
qid: vq_3a1de0505c__eli5__local
question: How to use decorators in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 223
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:33-05:00'
sources: []
---

Think of a decorator as a “wrapper” that you put around a recipe before it goes into the oven.  
The original recipe (a function) tells how to make the dish; the wrapper adds extra steps—like sprinkling salt, adding a timer, or logging what’s happening—without changing the recipe itself.

In Python, a decorator is just a function that receives another function and returns a new one. When you write  

```python
@my_decorator
def greet():
    print("Hi!")
```

the line `@my_decorator` tells Python to replace `greet` with whatever `my_decorator(greet)` returns. Inside the decorator you can run code before or after calling the original function, modify its arguments, or even replace it entirely.

So, like a kitchen helper that adds seasoning automatically every time you bake, decorators let you “decorate” any function with reusable behavior—logging, authentication, timing—without touching the function’s own code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
