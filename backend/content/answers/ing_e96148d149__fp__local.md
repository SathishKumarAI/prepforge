---
qid: ing_e96148d149__fp__local
question: 'Explain: API Reference — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 469
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:15:02-05:00'
sources: []
---

## Why *Pydantic Evals* Exist

When a model is built from raw data, the **validation** step must be both fast and mathematically sound: every field should satisfy a constraint that is provably equivalent to its specification (e.g., `int` ≥ 0). Pydantic’s evals are the *compiled predicates* that perform this check. They translate declarative type hints into executable code while preserving the semantics of Python’s typing system.

### From Specification to Execution

1. **Problem** – A user writes `field: Annotated[int, Field(gt=0)]`.  
2. **Fundamental principle** – The constraint is a logical predicate over the field value.  
3. **Derivation** – Pydantic parses the annotation tree, extracts each validator, and builds an *AST* that represents the predicate.  
4. **Optimization** – The AST is compiled into a Python function (`eval_fn`) once per model class. Subsequent validations call this pre‑compiled function instead of re‑parsing or re‑building the logic.

### Deeper Insight: Evaluation as Constraint Satisfaction

Pydantic’s evals are not arbitrary code snippets; they are **constraint satisfaction functions**. They guarantee that if `eval_fn(x)` returns `True`, *x* satisfies every declared condition, and vice versa. This property follows from the one‑to‑one mapping between type annotations and logical formulas, a consequence of the Curry–Howard correspondence applied to data validation.

### Non‑Obvious Benefit

Because evals are compiled functions, they can be **jitted** by tools like Numba or PyPy’s RPython. A single model class can thus achieve near C‑speed validation without sacrificing type safety—a subtle advantage that most users overlook when reading the docs.

---

The API reference documents these *eval_fn* objects: their signatures (`(value) -> bool`), how they’re generated from annotations, and hooks for custom validators. Understanding them clarifies why Pydantic can validate thousands of records per second while still being fully type‑safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
