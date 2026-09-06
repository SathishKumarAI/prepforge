---
qid: ing_76cea9a769__fp__local
question: 'Explain: Pydantic Evals — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 410
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:17:00-05:00'
sources: []
---

## Why “Pydantic Evals” even exist

A **Pydantic model** is a typed container that validates data and serialises it to Python objects.  
When you write a field with `Field(..., eval=True)`, Pydantic treats the supplied value as an *expression* rather than raw data.  
The fundamental problem solved here is **deferred evaluation of user‑supplied values**:

1. **Security & correctness** – The caller may want to compute a value at runtime (e.g., `datetime.now()`), but we don’t want to execute arbitrary code on the server.
2. **Consistency with type hints** – If a field is annotated as `Callable[..., T]`, we must accept either a callable or an expression that yields one.

Pydantic therefore evaluates expressions in a sandboxed, controlled environment: it parses the string into an AST, walks the tree to ensure only safe nodes (literals, attribute access on whitelisted objects, simple arithmetic) appear, then `eval`s it with a restricted globals dict. This guarantees:

- **Predictable runtime** – The expression is evaluated once during model construction.
- **Type safety** – The result is coerced to the annotated type.
- **No side‑effects** – Only read‑only globals are exposed.

### Non‑obvious insight

Most people treat `eval` as a black‑box for dynamic code, but Pydantic turns it into a *first‑class feature* that blends declarative data validation with lightweight scripting. By sandboxing the eval, it becomes a **controlled extension point**: you can embed simple logic directly in model definitions without compromising the overall safety guarantees of the framework. This pattern—exposing safe, expression‑based configuration—is increasingly useful for building self‑documenting, flexible APIs where users may need to supply runtime parameters that are still statically typed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
