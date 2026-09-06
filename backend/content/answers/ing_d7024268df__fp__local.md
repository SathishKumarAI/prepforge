---
qid: ing_d7024268df__fp__local
question: 'Explain: Reduce Global Dependencies — 10 Good Coding Principles to Improve
  Code Quality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 573
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:37:17-05:00'
sources: []
---

**Why global state hurts learning‑system code**

In a machine‑learning pipeline, each component (data loader, model, optimizer) should be *invertible*: given its inputs it produces deterministic outputs. A global variable couples components implicitly; the function’s output depends on hidden state, violating referential transparency. That makes unit testing exponential: to test a layer you must bootstrap the entire environment. It also breaks modularity—changing one part forces a cascade of refactors.

**Principles that eliminate globals**

| # | Principle | Core idea | Non‑obvious insight |
|---|-----------|-----------|---------------------|
| 1 | Pass explicit configs | Treat every parameter as an argument, not a hidden flag. | A config object can be immutable; changing it creates a new instance, preserving history for debugging. |
| 2 | Use dependency injection | Supply collaborators at construction time. | In Python this is often a simple `__init__(self, dep)` but the pattern scales to DI containers in larger projects. |
| 3 | Favor composition over inheritance | Compose behaviours instead of inheriting global state. | Composed objects can be swapped without altering the class hierarchy. |
| 4 | Encapsulate side‑effects | Wrap file I/O or GPU allocation in dedicated classes. | The wrapper’s interface becomes testable; the real side‑effect is isolated. |
| 5 | Adopt functional style where possible | Pure functions are easier to reason about and parallelise. | Even small “pure” helper functions reduce global chatter across threads. |
| 6 | Leverage context managers | Explicitly control resource lifetimes (`with torch.no_grad():`). | Contexts enforce cleanup even on exceptions, preventing stale globals. |
| 7 | Immutable data structures | Use tuples or dataclasses with `frozen=True`. | Immutability guarantees that no component mutates shared state silently. |
| 8 | Centralised logging via a logger object | Pass the logger rather than using a global print. | The logger can be swapped for a mock during tests, preserving output semantics. |
| 9 | Versioned checkpoints | Store model weights and hyper‑parameters together. | Checkpoints become reproducible units; you don’t need to remember which global flag produced them. |
|10 | Use environment‑agnostic paths | Resolve paths relative to the project root. | Avoids hidden dependencies on the current working directory, a common source of “it works locally” bugs. |

**Bottom line:** By treating every shared resource as an explicit dependency, you restore referential transparency, enabling modular tests and easier maintenance—critical when models grow from notebooks to production pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
