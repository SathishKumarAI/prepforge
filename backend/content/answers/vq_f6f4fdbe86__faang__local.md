---
qid: vq_f6f4fdbe86__faang__local
question: What are decorators in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 518
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:42:56-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “What are decorators in Python?”  
Assumptions: We’re talking about function‑level decorators (not class or method wrappers), and the audience has basic knowledge of functions, closures, and higher‑order functions.

---

**2️⃣ Approach**  
Explain that a decorator is a callable that receives another callable and returns a new callable. Emphasize the `@decorator` syntax as syntactic sugar for assignment. Outline three key points: purpose (cross‑cutting concerns), implementation pattern, and common use cases.

---

**3️⃣ Depth**  

| Aspect | Detail |
|--------|--------|
| **Definition** | A decorator is a function or class that takes a function `f` and returns a new function `g`, often wrapping `f`. |
| **Syntax** | ```python
@decorator
def func(...): ...
``` transforms to `func = decorator(func)` |
| **Implementation** | ```python
def decorator(f):
    @functools.wraps(f)
    def wrapper(*args, **kwargs):
        # pre‑logic
        result = f(*args, **kwargs)
        # post‑logic
        return result
    return wrapper
``` |
| **Purpose** | DRY: logging, timing, authentication, caching, validation, etc. |
| **Complexity** | O(1) call overhead per wrapped function; memory for closure references. |
| **Trade‑offs** | Readability can suffer if overused; stack of decorators may obscure original signature unless `functools.wraps` is used. |

---

**4️⃣ Edge Cases**  
- Decorating built‑ins or C extensions (not always possible).  
- Decorators that change the function’s return type or raise exceptions.  
- Multiple decorators: order matters (`@a @b def f()` → `f = a(b(f))`).  
- Recursive functions: ensure wrapper calls original, not wrapped, to avoid infinite recursion.

---

**5️⃣ Optimize & Communicate**  
Explain that for performance‑critical paths, minimize wrapper logic and use `functools.wraps` to preserve metadata. When interviewing, narrate the flow from “call decorator → create wrapper → return wrapper” and highlight how this pattern promotes separation of concerns. Conclude with a quick example (e.g., timing decorator) to solidify understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
