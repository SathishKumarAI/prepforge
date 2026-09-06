---
qid: ing_6489d11cdd__fp__local
question: 'Explain: Small bundle size — Valibot: The modular and type safe schema
  library'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 400
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:38:49-05:00'
sources: []
---

**Why a tiny bundle is essential for a schema‑validation library**

The core problem any validation framework tackles is *information extraction*—determining whether an arbitrary JSON value satisfies a set of logical constraints and, if so, extracting a typed representation. This task is inherently **combinatorial**: each constraint (type guard, range check, cross‑field rule) can be composed with others, yielding a combinatorial explosion in code paths.

To keep the library’s **runtime footprint minimal**, Valibot adopts two fundamental design choices:

1. **Modular tree of primitives**  
   Every primitive validator is an isolated function that emits a *static* description (a small AST node). Composition operators (`and`, `or`, `not`) merely splice these nodes; no new code is generated at runtime. The engine walks the AST once, performing type‑safe checks by pattern matching on node kinds. Because each validator lives in its own module, tree‑shaking tools can drop unused primitives, ensuring the final bundle contains only what the consumer actually imports.

2. **Zero‑runtime type erasure**  
   TypeScript’s `as const` and discriminated unions give us compile‑time guarantees without generating extra runtime objects. The library never stores auxiliary metadata (e.g., field names or error messages) unless explicitly requested, so the default build remains under 10 kB.

*Non‑obvious insight*: By treating validators as **first‑class data** rather than functions with side effects, Valibot turns validation into a *pure computation*. This means the same AST can be reused for serialization, documentation, or even server‑side schema generation without any additional code. The result is a tiny, type‑safe bundle that scales linearly with the number of primitives actually used.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
