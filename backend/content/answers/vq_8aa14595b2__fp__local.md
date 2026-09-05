---
qid: vq_8aa14595b2__fp__local
question: What are Left and Right in Scala? Explain Either/Left/Right Design Pattern
  in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 564
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:44:57-05:00'
sources: []
---

### From the Problem to a Robust API

When writing a pipeline that can **succeed or fail** (e.g., parsing JSON, querying a database), we need a type that:

1. **Encodes the result space** – success values and error messages.
2. **Prevents accidental “null” handling** – forcing the caller to examine both possibilities.
3. **Preserves type safety** – the compiler knows which branch is present.

`Either[L, R]` satisfies these goals.  
It is a *sum* (disjoint union) of two types `L` and `R`. By convention:

| Symbol | Meaning | Use case |
|--------|---------|----------|
| `Left[L, _]` | Error or “bad” value | Validation failures, exceptions |
| `Right[_, R]` | Success value | Normal return |

The pattern is a **type‑level discriminated union**. Internally it’s an abstract class with two case classes; the compiler guarantees that at any point only one branch can exist.

### Why It Works

- **Optimization**: No boxing for primitive types, because `Either` is a sealed trait and pattern matching compiles to efficient switch statements.
- **Information‑theoretic**: Each value carries *exactly* one of the two pieces of information; no extra “null” flag is needed. This aligns with *no‑side‑effect* reasoning in functional pipelines.
- **Geometry**: Think of `Either` as a point on a 2‑dimensional lattice; the coordinate `(0,1)` represents `Right`, `(1,0)` represents `Left`. Operations like `map`, `flatMap` move along axes without leaving the lattice.

### Non‑obvious Insight

Many libraries treat `Left` as “failure” by convention, but **there’s no intrinsic bias**. The type system does not care which side is success; you can swap them with `.swap`. This means that *any* binary operation can be expressed symmetrically—e.g., a `Try`‑like API that returns either an exception (`Left`) or a value (`Right`). By keeping the convention explicit, we avoid accidental misuse and make refactoring easier: swapping sides requires only a single call to `.swap`, not touching all error‑handling code.

In practice, using `Either[Error, Result]` lets you compose complex data‑engineering workflows with clear, type‑checked success/failure paths, while the underlying sum type guarantees correctness at compile time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
