---
qid: vq_c48bdf03f1__fp__local
question: What is Python's Scope Resolution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 335
total_tokens: 501
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:55:19-05:00'
sources: []
---

**Python’s Scope‑Resolution (LEGB) – a principled view**

At its core, a program must decide *which object* a name refers to when it is read.  
Python solves this by walking a chain of **environments** that mirror the structure of
the code itself:  

| Level | What it represents | Why it matters |
|-------|--------------------|----------------|
| **Local** | Variables defined in the current function or lambda | Fastest lookup, most recent bindings |
| **Enclosing** | Lexical scopes of nested functions (closures) | Enables *lexical scoping*: inner code can “see” outer variables |
| **Global** | Module‑level namespace | Keeps a single canonical copy per file |
| **Built‑in** | Names defined by the interpreter (`len`, `range`, …) | Provides a universal fallback |

This hierarchy (LEGB) is *not* an arbitrary rule; it follows from two deep principles:

1. **Information locality** – lookups should be as cheap as possible, so we check the nearest scope first.
2. **Predictable shadowing** – a later definition must hide earlier ones to avoid accidental aliasing.

A subtle but often missed insight: **non‑local assignments are *not* automatically propagated**; they require the `nonlocal` keyword. This preserves immutability of outer bindings unless explicitly declared, preventing hidden side‑effects in closures—an elegant compromise between functional purity and mutable state.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
