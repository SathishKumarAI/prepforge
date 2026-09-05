---
qid: vq_b5cdf6fc8d__fp__local
question: What are the different types of Scala literals?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 502
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:52:37-05:00'
sources: []
---

**Scala literals arise from the core problem of representing compile‑time constants in a typed language that must decide, at parse time, what type an expression has without runtime cost.**  
The grammar enumerates five *primitive* categories:

| Category | Syntax examples | Default type |
|----------|-----------------|--------------|
| **Integers** | `42`, `0x2A`, `0o52` | `Int` (unless suffixed) |
| **Longs** | `42L` | `Long` |
| **Floating‑point** | `3.14`, `1e-4f` | `Double` (suffix `f` → `Float`) |
| **Characters** | `'a'`, `'\n'`, `'\u03B1'` | `Char` |
| **Strings** | `"hello"`, raw strings with triple quotes | `String` |

Beyond primitives, *arbitrary‑precision* literals are available:

- `BigInt(12345678901234567890)` (no literal syntax; use constructor)
- `BigDecimal("1.2345")`

Finally, **Boolean** and **Unit** literals (`true`, `false`, `()`).

> **Why this structure?**  
> The compiler must *type‑check* expressions before code generation. By fixing the type of each literal at parse time, it can emit the correct constant pool entry or register initialization without extra runtime checks.

### Non‑obvious insight
Scala’s string interpolation (`s"Hello $name"`) is not a new literal form; it is syntactic sugar that rewrites to `StringContext("Hello ", "").s(name)`. Thus, what looks like a "literal with variable" is actually an *expression* whose type is still `String`, preserving the same compile‑time guarantees. This subtlety explains why interpolated strings don’t introduce new runtime overhead beyond the underlying `StringContext` machinery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
