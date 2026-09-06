---
qid: ing_900b5eada9__fp__local
question: 'Explain: Data Flow — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 415
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:11:20-05:00'
sources: []
---

### From Raw JSON to a Typed Python Object

When you call an API that returns JSON, the *fundamental problem* is: **how do we guarantee that every field has the right type and satisfies domain constraints?**  
Pydantic solves this by turning the raw payload into a *validated model* in two stages:

| Stage | What happens | Why it matters |
|-------|--------------|----------------|
| **Parsing** | `parse_obj()` reads the dictionary, recursively constructing nested models. | Guarantees that every key exists and is of the declared type; missing keys raise `ValidationError`. |
| **Evaluation** | The *evaluator* (`pydantic.evals`) runs any `@validator` or `Field(..., regex=…)`. It can be a simple value check or an async call. | Turns static constraints into dynamic guarantees (e.g., “email must contain @”). |

The evaluator is the **bridge** between data and logic: it knows *how* to coerce values (`int`, `datetime`) and *when* to apply custom rules. It runs in a controlled order, first all field validators, then root validators, ensuring that later computations see a fully‑checked state.

#### One Non‑Obvious Insight

Most people think Pydantic only “parses”. In reality it **executes** code on every assignment. This means you can embed *side‑effects* (e.g., normalising URLs) or even trigger external services during validation, but you must do so carefully to keep models pure. The evaluator’s design—lazy execution until all fields are present—prevents partial state bugs that would otherwise lead to hard‑to‑trace runtime errors.

So, Pydantic’s data flow is not just a type checker; it’s an *optimised pipeline* that guarantees every field satisfies both static types and dynamic business rules before the model can be used.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
