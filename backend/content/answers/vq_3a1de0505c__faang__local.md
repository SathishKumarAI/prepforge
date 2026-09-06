---
qid: vq_3a1de0505c__faang__local
question: How to use decorators in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 494
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:08-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise yet thorough explanation of Python decorators—how they’re defined, applied, and why they’re useful. Assume the audience knows basic functions but not decorator syntax or common pitfalls.

**Approach**  
1. Define what a decorator is (a callable that takes a function and returns a wrapped function).  
2. Show minimal syntax (`@decorator`).  
3. Explain closure usage for arguments.  
4. Cover `functools.wraps` to preserve metadata.  
5. Mention common patterns: logging, timing, memoization, authentication.

**Depth**  
```python
from functools import wraps

def timer(func):
    @wraps(func)                 # preserves __name__, docstring, etc.
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.perf_counter()-start:.4f}s")
        return result
    return wrapper

@timer                         # equivalent to: my_func = timer(my_func)
def my_func(x):
    """Squares the input."""
    return x * x
```
- **Complexity**: O(1) overhead per call; space is O(1).  
- **Trade‑offs**: Without `wraps`, stack traces lose original names.  
- For decorators with parameters:
  ```python
  def repeat(times):
      def decorator(func):
          @wraps(func)
          def wrapper(*args, **kwargs):
              for _ in range(times): func(*args, **kwargs)
          return wrapper
      return decorator

  @repeat(3)  # calls function thrice
  def greet(): ...
  ```

**Edge Cases**  
- Decorating built‑ins (use `functools.update_wrapper`).  
- Nested decorators: order matters; test stack trace clarity.  
- Recursive functions: ensure wrapper handles recursion correctly.

**Optimize & Communicate**  
Highlight that decorators promote DRY code, enable aspect‑oriented features, and are composable. When explaining, iterate from definition → syntax → practical example → pitfalls → advanced patterns, keeping each step short and anchored to real use cases. This demonstrates clear structure, depth, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
