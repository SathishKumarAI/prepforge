---
qid: vq_7b8e49d4a4__fp__local
question: What Are *args and *kwargs?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 392
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:39-05:00'
sources: []
---

**Why *args / **kwargs exist**

When a function is called, the language must decide how to bind the supplied values to its parameters.  
In Python the most general binding rule is “positional → positional‑only”, “keyword → keyword‑only”.  
But programmers often want a single routine that can accept *any* number of arguments, possibly with names they don’t know in advance.

**Derivation**

1. **Argument packing** – In the call `f(1, 2, x=3)`, the interpreter first collects all positional values into a tuple and all keyword values into a dict.
2. **Unpacking** – Inside `def f(*a, **k):` those collections are automatically assigned to `a` (tuple) and `k` (dict).  
   This is equivalent to writing:
   ```python
   def f(*args, **kwargs):
       args = tuple(args)
       kwargs = dict(kwargs)
   ```
3. **Re‑packing** – When forwarding arguments (`g(*args, **kwargs)`), the same mechanism reverses: a tuple expands into positional arguments and a dict into keyword arguments.

Thus `*args` and `**kwargs` are *syntactic sugar for packing/unpacking*. They preserve the original call shape while allowing functions to be written generically.  

**Non‑obvious insight**

The “unpacked” tuple/dict can **be mutated inside the function**—changing `args[0]` or `kwargs['x']` affects only the local copies, not the caller’s originals. This is because Python passes objects by reference but the tuple/dict itself is a new object created during unpacking. Hence *args/**kwargs are both flexible and safe wrappers around the underlying argument lists.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
