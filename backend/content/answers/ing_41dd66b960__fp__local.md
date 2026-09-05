---
qid: ing_41dd66b960__fp__local
question: 'Explain: Installation — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 446
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:24:49-05:00'
sources: []
---

**Why you need a dedicated install command**

Pydantic Evals is a thin layer that plugs the evaluation framework into the Pydantic ecosystem.  
At its core it must resolve three constraints simultaneously:

1. **Runtime safety** – every argument passed to an evaluator has to be validated against a schema.
2. **Zero‑overhead integration** – the library should be importable as a normal dependency without polluting `site-packages` with unrelated artefacts.
3. **Reproducible environments** – tests and CI pipelines must use the exact same binary distribution every time.

The *install* command is therefore not just “pip install pydantic‑evals”; it performs a three‑step bootstrap:

| Step | What happens | Why |
|------|--------------|-----|
| **1. Resolve dependencies** | `pip` fetches Pydantic, typing‑extensions, and the optional `evaluate` package from PyPI. | Guarantees that the runtime environment contains all the primitives needed for schema validation and metric computation. |
| **2. Build wheels in place** | The wheel is built with `--no-build-isolation`, so any local edits to the repo are reflected immediately. | Avoids stale binaries when developers tweak evaluation logic; keeps CI lightweight. |
| **3. Create entry points** | A console script `pydantic-evals` is added to `PATH`. | Allows invoking the CLI (`pydantic-evals --help`) without importing the module, satisfying the “zero‑overhead” constraint. |

**Non‑obvious insight**

The `--no-build-isolation` flag is critical: it forces Pydantic Evals to use the *exact* version of its dependencies that are already installed in the environment. Without this, pip would download a new wheel that might pick a newer minor release of Pydantic, breaking backward compatibility with user‑defined schemas. This subtle detail ensures deterministic evaluation pipelines across different machines—an often overlooked source of flaky ML experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
