---
qid: ing_5ba08438cf__fp__local
question: Design the harness for an agent that makes multi-file changes from a natural-language
  task. How do you keep it from wrecking a codebase?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 413
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:18:55-05:00'
sources: []
---

**Fundamental problem**  
An AI agent that edits many files at once must respect *information‑flow constraints*: the intent expressed in natural language is a high‑level policy, while each file change is an atomic operation on a finite state machine (the repository). If we let the agent act blindly, a single misinterpretation can cascade through inter‑file dependencies, breaking invariants that are only visible at compile or runtime.

**Why a staged harness is mandatory**  
Treat every change as a *proposal* rather than an execution. The harness therefore:

1. **Semantic snapshotting** – capture the abstract syntax tree (AST) and dependency graph before any edit.  
2. **Locality‑aware validation** – for each proposed diff, run static analyzers that check type‑consistency, contract adherence, and linting against a *policy model* derived from the repository’s build graph.  
3. **Conflict detection** – compare the proposal against concurrent edits (e.g., CI pipelines) using merge‑conflict heuristics that respect file ownership and module boundaries.

Only after all diffs pass these checks does the harness commit them atomically, preserving a consistent state.

**Deeper principle: Information‑theoretic safety**  
Each diff can be seen as transmitting *information* about program behavior. By bounding the mutual information between the natural‑language prompt and the resulting AST changes (via an entropy penalty), we guarantee that the agent cannot introduce arbitrarily large, unverified modifications—essentially a *no‑free‑lunch* safeguard.

**Non‑obvious insight**  
Most systems treat linting as a post‑hoc filter. Instead, embed lint rules directly into the policy model and let them guide the agent’s search space. This turns static analysis from an afterthought into a *prior* that shapes generation, dramatically reducing catastrophic edits while preserving expressiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
