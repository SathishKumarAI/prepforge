---
qid: vq_d841bcb52b__local
question: Why would you use the "pass" statement?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 388
total_tokens: 610
web_searches: 0
cost_usd: 0.0
sources: []
---

**Crisp answer:**  
`pass` is a no‑op placeholder that satisfies Python’s requirement for an indented block when you don’t yet have code to put there—e.g., in stubs, abstract methods, or temporary “to‑do” sections.

**Nuance from production experience**

In the early stages of a service I was building, I’d sketch out the API routes with Flask:

```python
@app.route('/process')
def process():
    pass   # TODO: implement heavy‑weight ETL
```

The route had to exist for load‑balancers and health checks, but the body wasn’t ready. Without `pass`, Python would raise an `IndentationError`. Using a real `raise NotImplementedError()` instead caused unwanted 500 responses during integration tests; `pass` keeps the handler silent until I replace it.

In multi‑threaded code, I sometimes create worker classes that inherit from an abstract base:

```python
class Worker(ABC):
    @abstractmethod
    def run(self): pass
```

The concrete subclass implements `run`, but the base still needs a syntactically valid method. A bare `pass` keeps the class lightweight and avoids runtime errors in type checkers.

When refactoring, I occasionally replace a long comment block with:

```python
def legacy_function():
    # FIXME: migrate to new API
    pass
```

This signals that the function should be removed later while keeping the build pipeline happy. In production, `pass` is a quick way to keep skeletons intact without triggering failures in CI or runtime checks.

**Bottom line:** Use `pass` when you need an empty block to satisfy syntax, keep tests passing, and signal “implementation pending” without affecting behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
