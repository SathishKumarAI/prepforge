---
qid: ing_9deb6943eb__fp__local
question: 'Explain: Code-First Evaluation — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 444
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:41:18-05:00'
sources: []
---

### Why *code‑first* evaluation matters for Pydantic

When a library validates data it faces two intertwined problems: **expressiveness** (the model must capture the domain) and **efficiency** (validation should be fast). Traditional schema languages like JSON‑Schema describe constraints in a *declarative* way, but parsing that description into executable code is costly. Pydantic’s “code‑first” evaluation flips the problem: instead of first writing a spec and then compiling it, you write Python classes directly and let the library generate validators **at import time**.

This approach rests on three deep principles:

1. **Static typing as a contract** – The type annotations in your class are already a formal specification. By turning them into executable checks early, Pydantic guarantees that every instance adheres to the same contract without runtime reflection.
2. **Just‑in‑time compilation of constraints** – Constraints (e.g., `constr(min_length=3)`) become compiled lambda functions that run in C‑extensions (`pydantic_core`). This avoids the overhead of interpreting a schema string at every call.
3. **Zero‑copy data ingestion** – Because validation code is generated once, subsequent parses can reuse precompiled bytecode, keeping memory usage low and allowing fast streaming of large payloads.

#### A non‑obvious insight

Many developers think *“code‑first”* means the library will ignore annotations at runtime. In reality, Pydantic’s evaluation phase **extracts** the annotations into an immutable *model schema* that is cached per class. Even if you later mutate a field default or add validators via decorators, those changes are re‑evaluated lazily only when the model is instantiated again. Thus, the “code‑first” approach gives you both flexibility (you can change the code) and stability (the runtime representation stays consistent until you deliberately rebuild it). This subtle caching mechanism is what lets Pydantic stay fast even in large applications with many models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
